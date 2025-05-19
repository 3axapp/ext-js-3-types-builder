declare namespace Ext.form {
  class Action {

    public failureType: string;

    public response: object;

    public result: object;

    public type: string;

    public static CLIENT_INVALID: string;

    public static CONNECT_FAILURE: string;

    public static LOAD_FAILURE: string;

    public static SERVER_INVALID: string;

    public constructor(config: IActionConfig);
  }

  interface IActionConfig {
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
