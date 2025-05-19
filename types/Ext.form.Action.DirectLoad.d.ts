declare namespace Ext.form.Action {
  class DirectLoad extends Ext.form.Action.Load {

    public type: string;

    public constructor(config: IDirectLoadConfig);

    private getParams(): void;

    private processResponse(result: object): void;

    private run(): void;

    private success(response: object, trans: object): void;
  }

  interface IDirectLoadConfig {
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
