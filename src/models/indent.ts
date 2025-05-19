export class Indent {

  public constructor(
    private level = 0,
    private symbol = ' ',
    private size = 2,
  ) {
  }

  public inc() {
    return new Indent(this.level + 1, this.symbol, this.size);
  }

  private dec() {
    return new Indent(Math.max(this.level - 1, 0), this.symbol, this.size);
  }


  public toString() {
    return this.level
      ? this.symbol.repeat(this.size * this.level)
      : '';
  }
}
