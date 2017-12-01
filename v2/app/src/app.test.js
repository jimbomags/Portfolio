import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() })

test('It should render', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Portfolio links should appear/disappear when burger is clicked', () => {
  const wrapper = mount(<App />);

  wrapper.find('#burger_icon').simulate('click')

  //expect(wrapper.find('#links').hasClass('foo')).toBeTruthy();

  // expect(wrapper.find('#links').prop('style')).toEqual('flex')

})
