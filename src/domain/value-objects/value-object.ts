export abstract class ValueObject {
  public equals(vo: ValueObject): boolean {
    if (vo.getValue() === this.getValue()) {
      return true;
    }

    return false;
  }

  abstract getValue(): unknown;
}