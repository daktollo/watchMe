class Order {
  constructor(userId, items, total, date = new Date()) {
    this.userId = userId;
    this.items = items;
    this.total = total;
    this.date = date;
    this.status = "completed";
  }
}

module.exports = Order;
