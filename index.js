const Movie = require("./movie");
const User = require("./user");
const {userDatabase} = require("./database");
function printMovieDetails(movie) {
  console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Price: $${movie.price}`);
}

function printUserPurchases(user) {
  user.purchases.forEach(printMovieDetails);
}
// userDatabase.save([]); // Initialize the database with an empty array

const users = userDatabase.load();

const movie = new Movie("Inception", "Christopher Nolan", 2010, 14.99);

const user = new User("MC", 23, "mc@example.com", "mcpasword");

user.cart.add(movie);
user.checkout();

userDatabase.insert(user);

// userDatabase.removeById(users[0].id);

users.forEach(printUserPurchases);
