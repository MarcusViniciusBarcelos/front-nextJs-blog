import '@testing-library/jest-dom';
import 'jest-styled-components';

const originalError = console.error;

console.error = function(...args) {
  if (
    args.length > 0 &&
    typeof args[0] === 'string' &&
    (
      args[0].includes('Warning: Received `false` for a non-boolean attribute `uppercase`. ') ||
      args[0].includes('Warning: React does not recognize the `colorDark` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `colordark` instead. If you accidentally passed it from a parent component, remove it from the DOM element. ')
    )
  ) {
    return;
  }
  originalError;
};
