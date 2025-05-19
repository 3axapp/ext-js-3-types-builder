declare namespace Ext.data {
  class Request {

    public constructor(config: IRequestConfig);
  }

  interface IRequestConfig {
    action?: string,
    callback?: Function,
    params?: object,
    reader?: Ext.data.DataReader,
    rs?: Ext.data.Record[] | Ext.data.Record,
    scope?: object,
  }
}
