const camelcase = require('camelcase');

module.exports = (name) => {
	const nameInCamelCase = camelcase(name, { pascalCase: true });

	return `import React from 'react';
import { shallow } from 'enzyme';
import ${nameInCamelCase} from './${name}';

describe('<${nameInCamelCase} />', () => {
  it('message', () => {
    const ${name} = shallow(<${nameInCamelCase} />);

  });
});`;
};
