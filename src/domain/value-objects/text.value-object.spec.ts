import { Text } from '@domain/value-objects/text.value-object';

describe('TextValueObject', () => {
  it('should create a valid text', () => {
    const text = 'test_text';

    const textValueObject = Text.create(text);

    expect(textValueObject.getValue()).toBe(text);
  });

  it('should throw an error for invalid text', () => {
    expect(() => Text.create('')).toThrow('Invalid text');
  });
});
