const BaseDatabase = require("./baseDatabase");
const User = require("./user");

class UserDatabase extends BaseDatabase {
  constructor() {
    super(User);
  }
}

module.exports = UserDatabase;
