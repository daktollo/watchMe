const { v4: uuidv4 } = require("uuid");
const Cart = require("./cart");
const { hashPassword } = require("./passwordHelper");
const payment = require("./payment");
const Order = require("./order");

class User {
  constructor(name, age, email, password) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = hashPassword(password);
    this.purchases = [];
    this.cart = new Cart();
    this.orders = [];
  }

  buyProduct(product) {
    this.purchases.push(product);
  }

  checkout() {
    const items = this.cart.getItems();
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const paymentSuccess = payment(this, total);
    if (paymentSuccess) {
      const order = new Order(this.id, [...items], total);
      this.orders.push(order);
      this.purchases.push(...items);
      this.cart.clear();
      console.log("Purchase successful!");
      return true;
    } else {
      console.log("Payment failed!");
      return false;
    }
  }
}

module.exports = User;
