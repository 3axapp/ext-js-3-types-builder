declare namespace Ext.data {
  class JsonReader extends Ext.data.DataReader {

    public jsonData: object;

    public meta: unknown;

    public constructor(config: IJsonReaderConfig);

    private extractValues(data: object, items: unknown[], len: Integer): void;

    public read(response: object): object;

    public readRecords(o: object): object;

    public readResponse(action: string, response: object): Response;
  }

  interface IJsonReaderConfig {
    fields?: unknown[] | object,
    idProperty?: string,
    messageProperty?: string,
    root?: string,
    successProperty?: string,
    totalProperty?: string,
  }
}
