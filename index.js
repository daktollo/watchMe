const Movie = require("./movie");
const User = require("./user");
const db = require("./database");

function printMovieDetails(movie) {
  console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Price: $${movie.price}`);
}

function printUserPurchases(user) {
  user.purchases.forEach(printMovieDetails);
}

const users = db.load("users");

const movie = new Movie("Inception", "Christopher Nolan", 2010, 14.99);

const user = new User("MC", 23, "mc@example.com", "mcpasword");

user.cart.add(movie);
user.checkout();

db.insert("users", user);

db.removeById("users", users[0].id);

users.forEach(printUserPurchases);
