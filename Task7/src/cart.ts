import { CartItem, Product } from "./types";

let cart: CartItem[] = [];

export type ReadonlyCart = Readonly<CartItem[]>;

export function addItem(product: Product, quantity: number = 1): CartItem[] {
  const item: CartItem = {
    ...product,
    quantity,
  };

  cart = [...cart, item];
  return cart;
}

export function removeItem(productId: number): CartItem[] {
  cart = cart.filter((item) => item.id !== productId);
  return cart;
}

export function getCart(): ReadonlyCart {
  return cart;
}

export function cloneCart(): CartItem[] {
  return structuredClone(cart);
}

export function updateProduct(
  product: Product,
  updates: Partial<Pick<Product, "name" | "price">>
): Product {
  return { ...product, ...updates };
}