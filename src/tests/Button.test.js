import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';


describe('<Button/> spec', () => {

  test('renders start button', () => {
    const { getByText } = render(<Button text={"start"}/>);
    const linkElement = getByText(/start/i);
    expect(linkElement).toBeInTheDocument();
  });

});