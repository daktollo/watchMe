const Movie = require("./movie");
const User = require("./user");
const db = require("./database");

function printMovieDetails(movie) {
	console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Price: $${movie.price}`);
}

function printUserPurchases(user) {
	user.purchases.forEach(printMovieDetails);
}


const movie = new Movie("Inception", "Christopher Nolan", 2010, 14.99);

const user = new User("Alice", 30, "alice@example.com", "alicepassword");

user.cart.add(movie);
user.checkout();


db.save("users", [user]);
const users = db.load("users");

users.forEach(printUserPurchases);