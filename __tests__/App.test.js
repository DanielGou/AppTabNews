import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.tsx';

const tree = renderer.create(<App />);

test('snapshot App', ()=>{
  expect(tree).toMatchSnapshot();
})
