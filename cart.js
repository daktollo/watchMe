class Cart {
    constructor() {
        this.items = [];
    }

    add(product) {
        this.items.push(product);
    }

    remove(product) {
        this.items = this.items.filter(item => item !== product);
    }

    clear() {
        this.items = [];
    }

    getItems() {
        return this.items;
    }
}

module.exports = Cart;