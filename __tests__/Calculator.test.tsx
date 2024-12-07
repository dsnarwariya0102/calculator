import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NumberSum from '../src/Screen/Calculator';
import {describe, test, expect} from '@jest/globals';

describe('NumberSum Component', () => {
  test('calculates the sum of numbers from input text', () => {
    const {getByTestId} = render(<NumberSum />);

    // Get the input field and button
    const inputField = getByTestId('input-field');
    const submitButton = getByTestId('submit-button');

    // Simulate entering text
    fireEvent.changeText(inputField, 'The numbers are 5, 10, and 20.');
    fireEvent.press(submitButton);
  });

  test('handles input without numbers gracefully', () => {
    const {getByTestId, queryByTestId} = render(<NumberSum />);

    // Get the input field and button
    const inputField = getByTestId('input-field');
    const submitButton = getByTestId('submit-button');

    // Simulate entering text without numbers
    fireEvent.changeText(inputField, 'No numbers here!');
    fireEvent.press(submitButton);
  });
});
