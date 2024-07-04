import { Flag } from '@domain/value-objects/flag.value-object';

describe('FlagValueObject', () => {
  it('should create a valid flag', () => {
    const flag = true;

    const flagValueObject = Flag.create(flag);

    expect(flagValueObject.getValue()).toBe(flag);
  });
});
