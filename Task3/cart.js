let cart = []

export function addItem(product, quantity = 1) {

  const { id, name, price } = product

  const item = {
    id,
    name,
    price,
    quantity
  }

  cart = [...cart, item]

  return cart
}

export function removeItem(productId) {
  cart = cart.filter(item => item.id !== productId)
  return cart
}

export function getCart() {
  return cart
}

export function cloneCart() {
  return structuredClone(cart)
}