const camelcase = require('camelcase');

module.exports = (name) => {
	const nameInPascalCase = camelcase(name, { pascalCase: true });
	return `import ${nameInPascalCase} from './${name}';
  
export default ${nameInPascalCase};
`;
};
