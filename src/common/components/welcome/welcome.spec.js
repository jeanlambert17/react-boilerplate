import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './welcome';

describe('<Welcome />', () => {
	it('Check if the text is correct', () => {
		const text = 'Test welcome';
		const welcome = shallow(<Welcome text={text} />);
		expect(welcome.text()).toEqual(text);
	});
});
