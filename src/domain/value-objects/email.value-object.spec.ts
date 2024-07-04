import { Email } from '@domain/value-objects/email.value-object';

describe('EmailValueObject', () => {
  it('should create a valid email', () => {
    const email = 'test@test.com';

    const emailValueObject = Email.create(email);

    expect(emailValueObject.getValue()).toBe(email);
  });

  it('should throw an error for invalid email', () => {
    expect(() => Email.create('test')).toThrow('Invalid email');
  });
});
