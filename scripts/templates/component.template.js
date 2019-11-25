const camelcase = require('camelcase');

module.exports = (name) => {
	const nameInCamelCase = camelcase(name, { pascalCase: true });
	return `// @flow
import React from 'react';
import styles from './${name}.module.scss';

type Props = {};

const ${nameInCamelCase} = (props: Props) => (
  <div className={styles.container}>

  </div>
);


export default ${nameInCamelCase};
  `;
};
