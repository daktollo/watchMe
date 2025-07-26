const BaseDatabase = require("./baseDatabase");
const User = require("./user");

class UserDatabase extends BaseDatabase {
}

module.exports = new UserDatabase(User);
