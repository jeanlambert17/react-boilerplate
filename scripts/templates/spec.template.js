const camelcase = require('camelcase');

module.exports = (name) => {
	const nameInPascalCase = camelcase(name, { pascalCase: true });
	const nameInCamelCase = camelcase(name);

	return `import React from 'react';
import { shallow } from 'enzyme';
import ${nameInPascalCase} from './${name}';

describe('<${nameInPascalCase} />', () => {
  it('message', () => {
    const ${nameInCamelCase} = shallow(<${nameInPascalCase} />);

  });
});`;
};
