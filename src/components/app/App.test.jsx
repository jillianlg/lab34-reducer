import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('updates the display color via color input', () => {
    render(<App />);

    const colorInput = screen.getByLabelText('Color');
    const displayColor = screen.getByTestId('display');

    fireEvent.change(colorInput, {
      target: {
        values: '#FF0000'
      }
    });

    expect(displayColor).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });
});
