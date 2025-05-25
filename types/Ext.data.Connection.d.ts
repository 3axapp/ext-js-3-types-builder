declare namespace Ext.data {
  class Connection extends Ext.util.Observable {

    public constructor(config: IConnectionConfig);

    public abort(transactionId?: number): void;

    public addListener<T extends IConnectionEvents = IConnectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IConnectionEvents = IConnectionEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IConnectionEvents = IConnectionEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isLoading(transactionId?: number): boolean;

    public on<T extends IConnectionEvents = IConnectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IConnectionEvents = IConnectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public request(options: object): number;

    public un<T extends IConnectionEvents = IConnectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IConnectionConfig {
    autoAbort?: boolean,
    defaultHeaders?: object,
    disableCaching?: boolean,
    disableCachingParam?: string,
    extraParams?: object,
    listeners?: object,
    method?: string,
    timeout?: number,
    url?: string,
  }

  interface IConnectionEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforerequest: (conn: Connection, options: object) => boolean | void;
    requestcomplete: (conn: Connection, response: object, options: object) => boolean | void;
    requestexception: (conn: Connection, response: object, options: object) => boolean | void;
  }
}
