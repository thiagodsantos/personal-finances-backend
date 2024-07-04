import { CustomDate } from '@domain/value-objects/custom-date.value-object';

describe('CustomDateValueObject', () => {
  it('should create a valid date', () => {
    const date = new Date();

    const customDate = CustomDate.create(date);

    expect(customDate.getValue()).toBe(date);
  });

  it('should throw an error for invalid date', () => {
    expect(() => CustomDate.create(null as unknown as Date)).toThrow('Invalid date');
  });
});
