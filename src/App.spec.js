import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App.jsx';

describe('App', () => {
    it('should shallow render without exploding', () => {
        const wrapper = shallow(<App />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
