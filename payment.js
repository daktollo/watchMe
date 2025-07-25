function payment(user, amount) {
    console.log(`Payment section: ${amount} TL will be charged to ${user.name}`);
    return true; // Always successful
}

module.exports = payment;