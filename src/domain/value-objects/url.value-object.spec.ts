import { Url } from '@domain/value-objects/url.value-object';

describe('UrlValueObject', () => {
  it('should create a valid url', () => {
    const url = 'http://test.com';

    const urlValueObject = Url.create(url);

    expect(urlValueObject.getValue()).toBe(url);
  });

  it('should throw an error for invalid url', () => {
    expect(() => Url.create('')).toThrow('Invalid url');
  });
});
