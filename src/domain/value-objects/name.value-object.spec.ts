import { Name } from '@domain/value-objects/name.value-object';

describe('NameValueObject', () => {
  it('should create a valid name', () => {
    const name = 'test_name';

    const nameValueObject = Name.create(name);

    expect(nameValueObject.getValue()).toBe(name);
  });

  it('should throw an error for invalid name', () => {
    expect(() => Name.create('')).toThrow('Invalid name');
  });
});
