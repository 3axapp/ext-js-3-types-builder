declare namespace Ext.form.Action {
  class Submit extends Ext.form.Action {

    public constructor(config: ISubmitConfig);
  }

  interface ISubmitConfig {
    clientValidation?: boolean,
    errorReader?: Ext.data.DataReader,
    failure?: Function,
    method?: string,
    params?: unknown,
    reset?: boolean,
    scope?: object,
    submitEmptyText?: boolean,
    success?: Function,
    timeout?: number,
    url?: string,
    waitMsg?: string,
    waitTitle?: string,
  }
}
