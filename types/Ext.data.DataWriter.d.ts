declare namespace Ext.data {
  class DataWriter {

    public constructor(config: IDataWriterConfig);

    public apply(params: object, baseParams: object, action: string, rs: Ext.data.Record<R> | Ext.data.Record<R>[]): void;

    public render(action: string, rs: Ext.data.Record<R>[], params: object, data: object): void;

    protected toArray(data: Hash): Object[];

    protected toHash(rec: Ext.data.Record, config: object): object;
  }

  interface IDataWriterConfig {
    createRecord?: Function,
    destroyRecord?: Function,
    listful?: boolean,
    updateRecord?: Function,
    writeAllFields?: boolean,
  }
}
