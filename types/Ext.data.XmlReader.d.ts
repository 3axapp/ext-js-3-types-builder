declare namespace Ext.data {
  class XmlReader extends Ext.data.DataReader {

    public xmlData: XMLDocument;

    public constructor(config: IXmlReaderConfig);

    public read(response: object): object;

    public readRecords(doc: object): object;

    public readResponse(action: string, response: object): Ext.data.Response;
  }

  interface IXmlReaderConfig {
    fields?: unknown[] | object,
    idPath?: string,
    messageProperty?: string,
    record?: string,
    successProperty?: string,
    totalProperty?: string,
  }
}
