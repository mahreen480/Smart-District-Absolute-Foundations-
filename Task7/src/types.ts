export type Category = "electronics" | "books" | "clothing";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

export interface CartItem extends Product {
  quantity: number;
}