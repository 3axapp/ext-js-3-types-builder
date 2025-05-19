declare namespace Ext.data {
  class ArrayReader extends Ext.data.JsonReader {

    public constructor(config: IArrayReaderConfig);

    public readRecords(o: object): object;
  }

  interface IArrayReaderConfig {
    fields?: unknown[] | object,
    id?: number,
    idIndex?: number,
    idProperty?: string,
    messageProperty?: string,
    root?: string,
    totalProperty?: string,
  }
}
