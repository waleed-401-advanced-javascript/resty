import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

import App from '../App.js';
import Form from '../component/form/form';
import Results from '../component/results/results';
import History from '../component/history/history';
import Help from '../component/help/help';
import NotFound from '../component/NotFound/NotFound';

Enzyme.configure({adapter: new Adapter()});

test('check render App ', () => {
  render(<MemoryRouter><App /></MemoryRouter>); // I will have a screen -> get me an element
  const header = screen.getByTestId('header');
  const footer = screen.getByTestId('footer');
  expect(header).toBeTruthy();
  expect(footer).toBeTruthy();
});


test('check render results', () => {
  const json = { headers: 'header', body: 'header' };
  render (<Results json={json} />);
  const results = screen.getByTestId('results');
  expect(results).toBeTruthy();
});

test('check render history', () => {
  const items = [{ method: 'get', url: 'https://adnan' }];
  const selectItem = function (i){};
  render (<History selectItem={selectItem} items={items} />);
  const history = screen.getByTestId('history');
  expect(history).toBeTruthy();
});

test('test Router to / home', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>,
  );
  expect(wrapper.find(Form)).toHaveLength(1);
  expect(wrapper.find(History)).toHaveLength(0);
  expect(wrapper.find(Help)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});

test('test Router to / History', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/history' ]}>
      <App/>
    </MemoryRouter>,
  );
  expect(wrapper.find(Form)).toHaveLength(1);
  expect(wrapper.find(History)).toHaveLength(0);
  expect(wrapper.find(Help)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});

test('test Router to / Help', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/help' ]}>
      <App/>
    </MemoryRouter>,
  );
  expect(wrapper.find(Form)).toHaveLength(1);
  expect(wrapper.find(History)).toHaveLength(0);
  expect(wrapper.find(Help)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});


test('test Router to / NotFound', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/notFound' ]}>
      <App/>
    </MemoryRouter>,
  );
  expect(wrapper.find(Form)).toHaveLength(1);
  expect(wrapper.find(History)).toHaveLength(0);
  expect(wrapper.find(Help)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});