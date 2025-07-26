const fs = require("fs");

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name;
  }
  save(objects) {
    fs.writeFileSync(`./${this.filename}.json`, JSON.stringify(objects, null, 2), "utf8");
  }

  load() {
    return JSON.parse(fs.readFileSync(`./${this.filename}.json`, "utf8"));
  }

  insert(object) {
    const objects = this.load();
    objects.push(object);
    this.save(objects);
  }

  removeById(id) {
    const objects = this.load();
    const updatedObjects = objects.filter((obj) => obj.id !== id);
    this.save(updatedObjects);
  }

  findById(id) {
    const objects = this.load();
    return objects.find((obj) => obj.id === id);
  }
}

module.exports = BaseDatabase;