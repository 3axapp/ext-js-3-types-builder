declare namespace Ext.form.Action {
  class Load extends Ext.form.Action {

    public constructor(config: ILoadConfig);
  }

  interface ILoadConfig {
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
