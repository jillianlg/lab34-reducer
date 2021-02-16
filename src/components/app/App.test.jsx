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

  it('returns to previous color via the undo', () => {
    render(<App />);

    const undoClick = screen.getByText('undo');
    const colorInput = screen.getByLabelText('Color');
    const displayColor = screen.getByTestId('display');

    fireEvent.change(colorInput, {
      target: {
        values: '#00FF00'
      }
    });

    fireEvent.click(undoClick);

    expect(displayColor).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });

  it('returns to previous color via the redo', () => {
    render(<App />);

    const redoClick = screen.getByText('redo');
    const undoClick = screen.getByText('undo');
    const colorInput = screen.getByLabelText('Color');
    const displayColor = screen.getByTestId('display');

    fireEvent.change(colorInput, {
      target: {
        values: '#00FF00'
      }
    });

    fireEvent.click(undoClick);
    fireEvent.click(redoClick);

    expect(displayColor).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });
});
