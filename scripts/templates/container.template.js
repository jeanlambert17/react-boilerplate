const camelcase = require('camelcase');

module.exports.asFunction = (name) => {
	const nameInCamelCase = camelcase(name, { pascalCase: true });
	return `// @flow
import React, { useState, useEffect } from 'react';
import styles from './${name}.module.scss';

type Props = {};

const ${nameInCamelCase} = (props: Props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input])

  return (
    <div className={styles.container}>
  
    </div>
  );
}


export default ${nameInCamelCase};
  `;
};

module.exports.asClass = (name) => {
	const nameInCamelCase = camelcase(name, { pascalCase: true });
	return `import React, { Component } from 'react';
import styles from './${name}.module.scss';
  
type Props = {};

type State = {};

class ${nameInCamelCase} extends Component<Props, State> {

  state = {

  }

  render() {

    return (
      <div className={styles.container}>
    
      </div>
    );
  }
}

export default ${nameInCamelCase};
  `;
};
