import React from 'react';
import { shallow } from 'enzyme';
import About from './about';

describe('<About />', () => {
  it('message', () => {
    const about = shallow(<About />);

  });
});