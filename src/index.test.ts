import { expect, test } from 'vitest';
import { orThrow } from '.';

class ValidationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

test('orThrow', () => {
  expect(() => orThrow(false)).toThrow();
  expect(() => orThrow(null)).toThrow();
  expect(() => orThrow(undefined)).toThrow();
  expect(() => orThrow(0)).toThrow();
  expect(() => orThrow('')).toThrow();
  expect(() => orThrow(null, 'error message')).toThrow('error message');
  expect(orThrow(1)).toBe(1);

  expect(() => orThrow(false, new ValidationError())).toThrow();
});
