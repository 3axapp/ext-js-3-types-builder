declare namespace Ext.data {
  class Response {

    public constructor(config: IResponseConfig);
  }

  interface IResponseConfig {
    action?: string,
    data?: unknown[] | object,
    message?: string,
    raw?: object,
    records?: Ext.data.Record | Ext.data.Record[],
    success?: boolean,
  }
}
