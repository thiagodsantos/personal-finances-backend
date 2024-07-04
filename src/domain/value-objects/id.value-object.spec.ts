import { Id } from '@domain/value-objects/id.value-object';

describe('IdValueObject', () => {
  it('should create a valid id', () => {
    const id = 'test_id';

    const idValueObject = Id.create(id);

    expect(idValueObject.getValue()).toBe(id);
  });

  it('should throw an error for invalid id', () => {
    expect(() => Id.create('')).toThrow('Invalid id');
  });
});
