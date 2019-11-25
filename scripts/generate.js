// Modules
const argv = require('yargs').argv;
// Utilities
const {
	printer: { printError, printSuccess },
	fsAsync,
	verifyFolder
} = require('./utils');
// Constants
const { TYPES, DEFAULT_PATH } = require('./constants');
// Templates
const {
	indexTemplate,
	reactTemplate,
	scssTemplate,
	specTemplate
} = require('./templates');
// Variables
const type = argv._[0];
const name = argv._[1].toLowerCase();

if (!type) {
	printError(`A type must be provided`);
	return;
}

if (!name) {
	printError(`A name must be provided`);
	return;
}

const validateType = (type) => {
	return TYPES.some((_type) => _type === type);
};

const isValid = validateType(type);
if (!isValid) {
	printError(
		`Invalid argument type, a valid value must be provided, use one of the following values: \n - ${TYPES.join(
			'\n - '
		)}`
	);
	return;
}

let pathToFolder = argv.path ? argv.path : DEFAULT_PATH;
pathToFolder = verifyFolder(`${pathToFolder}/${type}s/${name}`);

if (!pathToFolder) {
	printError(`The given ${type} name already exists`);
	return;
}

(async function() {
	try {
		const asClass = argv.class ? true : false;

		await fsAsync.mkdir(pathToFolder);
		await fsAsync.writeFile(
			`${pathToFolder}/${name}.js`,
			reactTemplate(type, name, asClass)
		);
		await fsAsync.writeFile(`${pathToFolder}/${name}.spec.js`, specTemplate(name));
		await fsAsync.writeFile(`${pathToFolder}/index.js`, indexTemplate(name));
		await fsAsync.writeFile(`${pathToFolder}/${name}.module.scss`, scssTemplate());

		printSuccess('Success');
		printSuccess(
			`The ${type} was created in the following path:\n${pathToFolder}`,
			false
		);
	} catch (err) {
		printError(`${err.message}`);
		return;
	}
})();
