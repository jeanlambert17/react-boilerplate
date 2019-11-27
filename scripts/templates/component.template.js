const camelcase = require('camelcase');

module.exports = (name, styles) => {
	const nameInPascalCase = camelcase(name, { pascalCase: true });
	return `// @flow
import React from 'react'; ${
		styles === 'inline' ? '' : `\nimport styles from './${name}.module.${styles}';`
	}

type Props = {};

const ${nameInPascalCase} = (props: Props) => (
  <div className={styles.container}>

  </div>
);


export default ${nameInPascalCase};
  `;
};
