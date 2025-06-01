declare namespace Ext.data {
  class MemoryProxy extends Ext.data.DataProxy {

    public constructor(config: IMemoryProxyConfig);

    public addListener<T extends IMemoryProxyEvents = IMemoryProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public doRequest(action: string, rs: Ext.data.Record | Ext.data.Record[], params: object, reader: Ext.data.DataReader, callback: Function, scope: object, arg: object): void;

    public fireEvent<T extends IMemoryProxyEvents = IMemoryProxyEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IMemoryProxyEvents = IMemoryProxyEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IMemoryProxyEvents = IMemoryProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IMemoryProxyEvents = IMemoryProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IMemoryProxyEvents = IMemoryProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IMemoryProxyConfig {
    api?: object,
    doRequest?: Function,
    listeners?: object,
    restful?: boolean,
  }

  interface IMemoryProxyEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforeload: (thisCmp: MemoryProxy, params: object) => boolean | void;
    beforewrite: (thisCmp: MemoryProxy, action: string, rs: Ext.data.Record<R> | Ext.data.Record<R>[], params: object) => boolean | void;
    exception: (thisCmp: MemoryProxy, type: string, action: string, options: object, response: object, arg: unknown) => boolean | void;
    load: (thisCmp: MemoryProxy, o: object, options: object) => boolean | void;
    loadexception: (thisCmp: MemoryProxy, arg: object, willAlwaysBeNull: object, e: Error) => boolean | void;
    write: (thisCmp: MemoryProxy, action: string, data: object, response: object, rs: Ext.data.Record<R> | Ext.data.Record<R>[], options: object) => boolean | void;
  }
}
