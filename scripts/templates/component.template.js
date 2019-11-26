const camelcase = require('camelcase');

module.exports = (name) => {
	const nameInPascalCase = camelcase(name, { pascalCase: true });
	return `// @flow
import React from 'react';
import styles from './${name}.module.scss';

type Props = {};

const ${nameInPascalCase} = (props: Props) => (
  <div className={styles.container}>

  </div>
);


export default ${nameInPascalCase};
  `;
};
