declare namespace Ext.data {
  class XmlWriter extends Ext.data.DataWriter {

    public constructor(config: IXmlWriterConfig);

    protected createRecord(rec: Ext.data.Record): unknown[];

    protected destroyRecord(rec: Ext.data.Record): unknown[];

    public render(params: object, baseParams: object, data: object | Object[]): void;

    protected updateRecord(rec: Ext.data.Record): unknown[];
  }

  interface IXmlWriterConfig {
    createRecord?: Function,
    destroyRecord?: Function,
    documentRoot?: string,
    forceDocumentRoot?: boolean,
    listful?: boolean,
    root?: string,
    tpl?: string | Ext.XTemplate,
    updateRecord?: Function,
    writeAllFields?: boolean,
    xmlEncoding?: string,
    xmlVersion?: string,
  }
}
