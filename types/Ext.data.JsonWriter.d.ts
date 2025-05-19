declare namespace Ext.data {
  class JsonWriter extends Ext.data.DataWriter {

    public constructor(config: IJsonWriterConfig);

    protected createRecord(rec: Ext.data.Record): object;

    protected destroyRecord(rec: Ext.data.Record): object;

    public render(Ajax: object, baseParams: object, data: object | Object[]): void;

    protected updateRecord(rec: Ext.data.Record): object;
  }

  interface IJsonWriterConfig {
    createRecord?: Function,
    destroyRecord?: Function,
    encode?: boolean,
    encodeDelete?: boolean,
    listful?: boolean,
    updateRecord?: Function,
    writeAllFields?: boolean,
  }
}
