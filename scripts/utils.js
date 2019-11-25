const path = require('path');
const promisify = require('util').promisify;
// Utilities to promisify
const fs = require('fs');
// Modules
const chalk = require('chalk');

// fsAsync
module.exports.fsAsync = {
	mkdir: promisify(fs.mkdir),
	writeFile: promisify(fs.writeFile)
};
// module.exports.mkdirAsync = promisify(fs.mkdir);
// module.exports.writeFileAsync = promisify(fs.writeFile);

// Utilities
module.exports.verifyFolder = (_path) => {
	const fullPath = path.resolve(_path);
	if (!fs.existsSync(fullPath)) {
		return fullPath;
	} else {
		return null;
	}
};

// Printer
const { error, log } = console;

const printError = (message, bg = true) => {
	if (bg) {
		error(chalk.bgRed(message));
	} else {
		error(chalk.red(message));
	}
};

const printSuccess = (message, bg = true) => {
	if (bg) {
		log(chalk.bgGreen(message));
	} else {
		log(chalk.green(message));
	}
};

module.exports.printer = {
	printError,
	printSuccess
};
