const camelcase = require('camelcase');

module.exports.asFunction = (name, styles) => {
  const nameInPascalCase = camelcase(name, { pascalCase: true });

  return `// @flow
import React, { useState, useEffect } from 'react';${
    styles === 'inline' ? '' : `\nimport classes from './${name}.module.${styles}';`
    }

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
    <div className={classes.container}>
  
    </div>
  );
}


export default ${nameInPascalCase};
  `;
};

module.exports.asClass = (name, styles) => {
  const nameInPascalCase = camelcase(name, { pascalCase: true });
  return `import React, { Component } from 'react';${
    styles === 'inline' ? '' : `\nimport classes from './${name}.module.${styles}';`
    }
  
type Props = {};

type State = {};

class ${nameInPascalCase} extends Component<Props, State> {

  state = {

  }

  render() {

    return (
      <div className={classes.container}>
    
      </div>
    );
  }
}

export default ${nameInPascalCase};
  `;
};
