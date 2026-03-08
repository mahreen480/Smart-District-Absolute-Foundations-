import { readFile } from "fs/promises";
import { Product } from "./product";
import { addItem, getCart, cloneCart } from "./cart";
import { sortByPrice, groupByCategory, getCategories } from "./utils";

async function main() {
    const data = await readFile("./products.json", "utf-8");
    const productsData = JSON.parse(data);

    const products = productsData.map((p: any) => Product.fromObject(p));

    addItem(products[0], 1);
    addItem(products[2], 2);

    console.log("Cart:", getCart());

    const copiedCart = cloneCart();
    console.log("Cloned Cart:", copiedCart);

    const sorted = sortByPrice(products);
    console.log("Sorted Products:", sorted);

    const grouped = groupByCategory(products);
    console.log("Grouped Inventory:", grouped);

    const categories = getCategories(products);

    const summary = `
    Cart Summary
    ------------
    Total Items: ${getCart().length}
    Categories: ${categories.join(", ")}`;

    console.log(summary);
}

main();