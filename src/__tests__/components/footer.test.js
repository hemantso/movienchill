import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../components/Footer';

describe('Render the page correctly', () => {
  test('Render correctly', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Footer element image in place', () => {
    const { container } = render(<Footer />);
    expect(container.innerHTML).toContain('<img style="height: 50px;" src="moviedblogo.svg" alt="moviedblogo">');
  });

  test('Footer content in place', () => {
    expect('Created by Hemant Soni. Powered by ').toMatchSnapshot();
  });
});
