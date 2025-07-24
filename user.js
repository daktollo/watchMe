class User{
	constructor(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.purchases = [];
	}

	buyProduct(product) {
		this.purchases.push(product);
	}

}



module.exports = User;