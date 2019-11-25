const CONTAINER_TYPE = require('../constants').CONTAINER_TYPE;
const {
	asClass: containerTemplateAsClass,
	asFunction: containerTemplateAsFunction
} = require('./container.template');
const componentTemplate = require('./component.template');
const indexTemplate = require('./index.template');
const specTemplate = require('./spec.template');
const scssTemplate = require('./scss.template');

const reactTemplate = (type, name, asClass = false) => {
	if (asClass) {
		return containerTemplateAsClass(name);
	}
	if (type === CONTAINER_TYPE) {
		return containerTemplateAsFunction(name);
	}

	return componentTemplate(name);
};

module.exports = {
	indexTemplate,
	componentTemplate,
	reactTemplate,
	scssTemplate,
	specTemplate
};
