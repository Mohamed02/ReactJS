import { render, screen } from '@testing-library/react';
import App from './App';
import {multiplyByTwo} from './utility'
test('multiply by two',()=>{
  expect(multiplyByTwo(4)).toBe(8);
});
test('negative multiply by two',()=>{
  expect(multiplyByTwo("adf")).toBeNaN();
});
 
/*
test('renders learn react link', () => {
 
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
