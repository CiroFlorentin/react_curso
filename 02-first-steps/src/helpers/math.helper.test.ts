import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
  test('two positive numbers', () => {
    //! Arrange PREPARACIÓN
    const a = 1;
    const b = 2;

    //! Act APLICAR LA ACCIÓN
    const result = add(a, b);

    //! Assert COMPROBAR EL RESULTADO
    expect(result).toBe(a + b);
  });
  test('two negative numbers', () => {
    //! Arrange PREPARACIÓN
    const a = -4;
    const b = -2;

    //! Act APLICAR LA ACCIÓN
    const result = add(a, b);

    //! Assert COMPROBAR EL RESULTADO
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('two positive numbers', () => {
    const a = 5;
    const b = 3;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
  test('two negative numbers', () => {
    const a = -4;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});
describe('multiply', () => {
  test('two positive numbers', () => {
    const a = 5;
    const b = 3;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
  test('two negative numbers', () => {
    const a = -4;
    const b = -2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
describe('divide', () => {
  test('two positive numbers', () => {
    const a = 5;
    const b = 3;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
  test('two negative numbers', () => {
    const a = -4;
    const b = -2;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});
