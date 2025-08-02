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
    if (!fs.existsSync(`./${this.filename}.json`)) {
      return [];
    }
    const objects = JSON.parse(fs.readFileSync(`./${this.filename}.json`, "utf8"));
    return objects.map(this.model.create);
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

  update(object) {
    const objects = this.load();
    const index = objects.findIndex(obj => obj.id == object.id);

    if (index === -1) {
      throw new Error(`Object with id ${object.id} not found.`);
    }

    objects.splice(index, 1, object);
    this.save(objects);
  }
}

module.exports = BaseDatabase;