const camelcase = require('camelcase');

module.exports = (name, styles) => {
	const nameInPascalCase = camelcase(name, { pascalCase: true });
	return `// @flow
import React from 'react'; ${
		styles === 'inline' ? '' : `\nimport classes from './${name}.module.${styles}';`
		}

type Props = {};

const ${nameInPascalCase} = (props: Props) => (
  <div className={classes.container}>

  </div>
);


export default ${nameInPascalCase};
  `;
};
