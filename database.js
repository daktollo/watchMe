const fs = require('fs');

const save = (filename, objects) => {
	fs.writeFileSync(`./${filename}.json`, JSON.stringify(objects, null, 2), 'utf8');
}

const load = (filename) => {
	return JSON.parse(fs.readFileSync(`./${filename}.json`, 'utf8'));
}

const insert = (filename, object) => {
	const objects = load(filename);
	objects.push(object);
	save(filename, objects);
}

const removeById = (filename, id) => {
	const objects = load(filename);
	const updatedObjects = objects.filter(obj => obj.id !== id);
	save(filename, updatedObjects);
}

const findById = (filename, id) => {
	const objects = load(filename);
	return objects.find(obj => obj.id === id);
}

module.exports = {
	save,
	load,
	insert,
	removeById,
	findById
};