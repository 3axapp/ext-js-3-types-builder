declare namespace Ext.form.Action {
  class DirectSubmit extends Ext.form.Action.Submit {

    public type: string;

    public constructor(config: IDirectSubmitConfig);

    private getParams(): void;

    private processResponse(result: object): void;

    private run(): void;

    private success(response: object, trans: object): void;
  }

  interface IDirectSubmitConfig {
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
