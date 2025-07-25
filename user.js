const { v4: uuidv4 } = require('uuid');
const Cart = require('./cart');
const { hashPassword } = require('./passwordHelper');
const payment = require('./payment');

class User {
    constructor(name, age, email, password) {
        this.id = uuidv4();
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = hashPassword(password);
        this.purchases = [];
        this.cart = new Cart();
    }


    buyProduct(product) {
        this.purchases.push(product);
    }

	checkout() {
		const total = this.cart.getItems().reduce((sum, item) => sum + item.price, 0);
		const paymentSuccess = payment(this, total);
		if (paymentSuccess) {
			this.purchases.push(...this.cart.getItems());
			this.cart.clear();
			console.log("Purchase successful!");
			return true;
		}
		else {
			console.log("Payment failed!");
			return false;
		}
	}
}

module.exports = User;