const camelcase = require('camelcase');

module.exports = (name) => {
	const nameInCamelCase = camelcase(name, { pascalCase: true });
	return `import ${nameInCamelCase} from './${name}';
  
export default ${nameInCamelCase};
`;
};
