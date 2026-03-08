export function sortByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price)
}

export function groupByCategory(products) {

  const map = new Map()

  for (const product of products) {

    const { category } = product

    if (!map.has(category)) {
      map.set(category, [])
    }

    map.get(category).push(product)
  }

  return map
}

export function getCategories(products) {

  const set = new Set()

  for (const p of products) {
    set.add(p.category)
  }

  return [...set]
}