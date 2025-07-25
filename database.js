const fs = require('fs');

const save = (filename, objects) => {
	fs.writeFileSync(`./${filename}.json`, JSON.stringify(objects, null, 2), 'utf8');
}

const load = (filename) => {
	return JSON.parse(fs.readFileSync(`./${filename}.json`, 'utf8'));
}

module.exports = {
	save,
	load
};