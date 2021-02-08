import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import TestApp from '../../helpers/TestApp';

describe('Render the page correctly', () => {
  test('Render correctly', () => {
    const { asFragment } = render(<TestApp />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Application name in place', () => {
    expect('MovieNchill').toMatchSnapshot();
  });

  test('Footer content in place', () => {
    expect('Created by Hemant Soni. Powered by ').toMatchSnapshot();
  });

  test('App header in place', () => {
    const { container } = render(<TestApp />);
    expect(container.innerHTML).toContain('<h3>MovieN<span>chill</span></h3>');
  });

  test('upcoming button in place', () => {
    const { container } = render(<TestApp />);
    expect(container.innerHTML).toContain('<button type="button" class="active">Upcoming</button>');
  });

  test('top rated button in place', () => {
    const { container } = render(<TestApp />);
    expect(container.innerHTML).toContain('<button type="button" class="unactive">Top Rated</button>');
  });

  test('Footer element image in place', () => {
    const { container } = render(<TestApp />);
    expect(container.innerHTML).toContain('<img style="height: 50px;" src="moviedblogo.svg" alt="moviedblogo">');
  });
});
