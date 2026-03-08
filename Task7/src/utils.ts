import { Product, Category } from "./types";

export function validatePrice<T extends { price: number }>(item: T): boolean {
  return item.price > 0;
}

export function sortByPrice(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.price - b.price);
}

export function groupByCategory(products: Product[]): Record<string, Product[]> {

  const inventory: Record<string, Product[]> = {}

  for (const product of products) {

    const category = product.category

    if (!inventory[category]) {
      inventory[category] = []
    }

    inventory[category].push(product)
  }

  return inventory
}

export function getCategories(products: Product[]): Category[] {
  const set = new Set<Category>();

  for (const p of products) {
    set.add(p.category);
  }

  return [...set];
}