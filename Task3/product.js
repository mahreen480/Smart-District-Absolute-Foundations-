export class Product {
  constructor(id, name, price, category) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
  }

  getInfo() {
    return `${this.name} - $${this.price}`
  }

  static fromObject(obj) {
    return new Product(obj.id, obj.name, obj.price, obj.category)
  }
}