declare namespace Ext.data {
  class HttpProxy extends Ext.data.DataProxy {

    public conn: object;

    public constructor(config: IHttpProxyConfig);

    public addListener<T extends IHttpProxyEvents = IHttpProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private createCallback(action: string, rs: Ext.data.Record[]): void;

    protected doRequest(action: string, rs: Ext.data.Record | Ext.data.Record[], params: object, reader: Ext.data.DataReader, callback: Function, scope: object, arg: object): void;

    public fireEvent<T extends IHttpProxyEvents = IHttpProxyEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getConnection(): Ext.data.Connection;

    public hasListener<T extends IHttpProxyEvents = IHttpProxyEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IHttpProxyEvents = IHttpProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    protected onRead(action: string, o: object, res: object): void;

    protected onWrite(action: string, trans: object, res: object): void;

    public removeListener<T extends IHttpProxyEvents = IHttpProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setUrl(url: string, makePermanent?: boolean): void;

    public un<T extends IHttpProxyEvents = IHttpProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IHttpProxyConfig {
    api?: object,
    doRequest?: Function,
    listeners?: object,
    restful?: boolean,
  }

  interface IHttpProxyEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforeload: (thisCmp: HttpProxy, params: object) => boolean | void;
    beforewrite: (thisCmp: HttpProxy, action: string, rs: Ext.data.Record<R> | Ext.data.Record<R>[], params: object) => boolean | void;
    exception: (thisCmp: HttpProxy, type: string, action: string, options: object, response: object, arg: unknown) => boolean | void;
    load: (thisCmp: HttpProxy, o: object, options: object) => boolean | void;
    loadexception: (misc: unknown) => boolean | void;
    write: (thisCmp: HttpProxy, action: string, data: object, response: object, rs: Ext.data.Record<R> | Ext.data.Record<R>[], options: object) => boolean | void;
  }
}
