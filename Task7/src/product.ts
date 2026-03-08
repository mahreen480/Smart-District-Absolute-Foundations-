import { Category, Product as ProductType } from "./types";

export class Product implements ProductType {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: Category
  ) {}

  getInfo(): string {
    return `${this.name} - $${this.price}`;
  }

  static fromObject(obj: ProductType): Product {
    return new Product(obj.id, obj.name, obj.price, obj.category);
  }
}