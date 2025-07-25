const { v4: uuidv4 } = require('uuid');
const Cart = require('./cart');
const { hashPassword } = require('./passwordHelper');

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
}

module.exports = User;