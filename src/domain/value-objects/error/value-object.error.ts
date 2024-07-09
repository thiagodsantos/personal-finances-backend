export class ValueObjectError extends Error {
  constructor(message: string) {
    super(`Value error: ${message}`);
  }
}
