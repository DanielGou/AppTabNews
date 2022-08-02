import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

const tree = renderer.create(<Home />);

test('snapshot App', ()=>{
  expect(tree).toMatchSnapshot();
})
