const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    const saltRounds = 12;
    return bcrypt.hashSync(password, saltRounds);
};

const verifyPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

module.exports = { hashPassword, verifyPassword };