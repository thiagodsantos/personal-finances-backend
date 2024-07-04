import { Numeric } from '@domain/value-objects/numeric.value-object';

describe('NumericValueObject', () => {
  it('should create a valid number', () => {
    const number = 1;

    const numericValueObject = Numeric.create(number);

    expect(numericValueObject.getValue()).toBe(number);
  });
});
