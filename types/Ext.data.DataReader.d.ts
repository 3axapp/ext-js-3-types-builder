declare namespace Ext.data {
  class DataReader {

    public meta: unknown;

    public constructor(config: IDataReaderConfig);

    public buildExtractors(): void;

    private extractData(data-root: Object[] | object, returnRecords: boolean): void;

    public extractValues(): void;

    public getId(): void;

    public getMessage(): void;

    public getRoot(): void;

    public getSuccess(): void;

    public getTotal(): void;

    public isData(data: object): boolean;

    public realize(record: Ext.data.Record | Ext.data.Record[], data: object | Object[]): void;

    public update(rs: Ext.data.Record | Ext.data.Record[], data: object | Object[]): void;
  }

  interface IDataReaderConfig {
    fields?: unknown[] | object,
    messageProperty?: string,
  }
}
