declare namespace Ext.data {
  class DirectProxy extends Ext.data.DataProxy {

    public constructor(config: IDirectProxyConfig);

    public addListener<T extends IDirectProxyEvents = IDirectProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    protected doRequest(action: string, rs: Ext.data.Record | Ext.data.Record[], params: object, reader: Ext.data.DataReader, callback: Function, scope: object, arg: object): void;

    public fireEvent<T extends IDirectProxyEvents = IDirectProxyEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IDirectProxyEvents = IDirectProxyEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IDirectProxyEvents = IDirectProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    protected onRead(action: string, trans: object, result: object, res: object): void;

    protected onWrite(action: string, trans: object, result: object, res: object, rs: Ext.data.Record | Ext.data.Record[]): void;

    public removeListener<T extends IDirectProxyEvents = IDirectProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IDirectProxyEvents = IDirectProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IDirectProxyConfig {
    api?: object,
    directFn?: Function,
    doRequest?: Function,
    listeners?: object,
    paramOrder?: unknown[] | string,
    paramsAsHash?: boolean,
    restful?: boolean,
  }

  interface IDirectProxyEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeload: (thisCmp: DirectProxy, params: object) => boolean | void;
    beforewrite: (thisCmp: DirectProxy, action: string, rs: Ext.data.Record | Ext.data.Record[], params: object) => boolean | void;
    exception: (thisCmp: DirectProxy, type: string, action: string, options: object, response: object, arg: unknown) => boolean | void;
    load: (thisCmp: DirectProxy, o: object, options: object) => boolean | void;
    loadexception: (misc: misc) => boolean | void;
    write: (thisCmp: DirectProxy, action: string, data: object, response: object, rs: Ext.data.Record | Ext.data.Record[], options: object) => boolean | void;
  }
}
