const CONTAINER_TYPE = require('../constants').CONTAINER_TYPE;
const {
	asClass: containerTemplateAsClass,
	asFunction: containerTemplateAsFunction
} = require('./container.template');
const componentTemplate = require('./component.template');
const indexTemplate = require('./index.template');
const specTemplate = require('./spec.template');
const scssTemplate = require('./scss.template');

const reactTemplate = (type, name, { asClass = false, styles = 'scss' }) => {
	if (asClass) {
		return containerTemplateAsClass(name, styles);
	}
	if (type === CONTAINER_TYPE) {
		return containerTemplateAsFunction(name, styles);
	}

	return componentTemplate(name, styles);
};

module.exports = {
	indexTemplate,
	componentTemplate,
	reactTemplate,
	scssTemplate,
	specTemplate
};
