export class Indent {
    level;
    symbol;
    size;
    constructor(level = 0, symbol = ' ', size = 2) {
        this.level = level;
        this.symbol = symbol;
        this.size = size;
    }
    inc() {
        return new Indent(this.level + 1, this.symbol, this.size);
    }
    dec() {
        return new Indent(Math.max(this.level - 1, 0), this.symbol, this.size);
    }
    toString() {
        return this.level
            ? this.symbol.repeat(this.size * this.level)
            : '';
    }
}
