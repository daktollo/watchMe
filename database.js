const fs = require('fs');

const save = (filename, objects) => {
	fs.writeFileSync(`./${filename}.json`, JSON.stringify(objects));
}

const load = (filename) => {
	return JSON.parse(fs.readFileSync(`./${filename}`, 'utf8'));
}

module.exports = {
	save,
	load
};