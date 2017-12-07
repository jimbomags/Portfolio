import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App, Title, About } from './app';
import Content from './components/Content';

configure({ adapter: new Adapter() })

test('It should render', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Portfolio links should appear/disappear when burger is clicked', () => {
  const wrapper = mount(<App />);

  wrapper.find('#burger_icon').simulate('click')

  expect(wrapper.find('#links').prop('style')).toEqual({ 'display': 'flex' })

  wrapper.find('#burger_icon').simulate('click')

  expect(wrapper.find('#links').prop('style')).toEqual({ 'display': 'none' })

});

test('Title should render the property passed to it', () => {
  const wrapper = shallow(<Title title={Content.title} />)

  expect(wrapper.find('h1').text()).toEqual('James McGillFrontend Developer')
  expect(wrapper.find('a').prop('href')).toEqual('#about')
});

test('About should render the property passed to it', () => {
  const wrapper = shallow(<About about={Content.about} />)

  expect(wrapper.html()).toMatch(/[(<p>)(junior)]/);
});
