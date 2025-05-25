declare namespace Ext {
  class Ajax extends Ext.data.Connection {

    public autoAbort: boolean;

    public defaultHeaders: object;

    public disableCaching: boolean;

    public extraParams: object;

    public method: string;

    public timeout: number;

    public url: string;

    public constructor(config: IAjaxConfig);

    public addListener<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public serializeForm(form: string | HTMLElement): string;

    public un<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IAjaxConfig {
    disableCachingParam?: string,
    listeners?: object,
  }

  interface IAjaxEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforerequest: (conn: Connection, options: object) => boolean | void;
    requestcomplete: (conn: Connection, response: object, options: object) => boolean | void;
    requestexception: (conn: Connection, response: object, options: object) => boolean | void;
  }
}
