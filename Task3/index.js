import { readFile } from "fs/promises"
import { Product } from "./product.js"
import { addItem, getCart, cloneCart } from "./cart.js"

async function main() {
    const data = await readFile("./products.json", "utf-8")
    const productsData = JSON.parse(data)

    const products = productsData.map(p => Product.fromObject(p))

    const utils = await import("./utils.js")

    addItem(products[0], 1)
    addItem(products[2], 2)

    console.log("Cart:", getCart())

    const copiedCart = cloneCart()
    console.log("Cloned Cart:", copiedCart)

    const sorted = utils.sortByPrice(products)
    console.log("Sorted Products:", sorted)

    const grouped = utils.groupByCategory(products)
    console.log("Grouped:", grouped)

    const categories = utils.getCategories(products)

    const summary = `
        Cart Summary
        -------------
        Total Items: ${getCart().length}
        Categories: ${categories.join(", ")}`

    console.log(summary)
}

main()