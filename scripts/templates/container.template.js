const camelcase = require('camelcase');

module.exports.asFunction = (name) => {
	const nameInPascalCase = camelcase(name, { pascalCase: true });
	return `// @flow
import React, { useState, useEffect } from 'react';
import styles from './${name}.module.scss';

type Props = {};

const ${nameInPascalCase} = (props: Props) => {
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


export default ${nameInPascalCase};
  `;
};

module.exports.asClass = (name) => {
	const nameInPascalCase = camelcase(name, { pascalCase: true });
	return `import React, { Component } from 'react';
import styles from './${name}.module.scss';
  
type Props = {};

type State = {};

class ${nameInPascalCase} extends Component<Props, State> {

  state = {

  }

  render() {

    return (
      <div className={styles.container}>
    
      </div>
    );
  }
}

export default ${nameInPascalCase};
  `;
};
