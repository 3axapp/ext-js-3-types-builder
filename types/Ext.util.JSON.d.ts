declare namespace Ext.util {
  class JSON {

    public decode(json: string): object;

    public encode(o: unknown): string;

    public encodeDate(d: Date): string;
  }
}
