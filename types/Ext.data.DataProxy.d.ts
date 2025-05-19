declare namespace Ext.data {
  class DataProxy extends Ext.util.Observable {

    public constructor(config: IDataProxyConfig);

    public addListener<T extends IDataProxyEvents = IDataProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private buildUrl(action: string, record: Ext.data.Record | Ext.data.Record[]): string;

    public destroy(): void;

    public fireEvent<T extends IDataProxyEvents = IDataProxyEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IDataProxyEvents = IDataProxyEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isApiAction(action: string): boolean;

    public load(params: object, reader: object, callback: object, scope: object, arg: object): void;

    public on<T extends IDataProxyEvents = IDataProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IDataProxyEvents = IDataProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public request(action: string, rs: Ext.data.Record | Ext.data.Record[] | null, params: object, reader: Ext.data.DataReader, callback: Function, scope: object, options: object): void;

    public setApi(api: string | object, url: string | Function): void;

    public un<T extends IDataProxyEvents = IDataProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IDataProxyConfig {
    api?: object,
    doRequest?: Function,
    listeners?: object,
    restful?: boolean,
  }

  interface IDataProxyEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeload: (thisCmp: DataProxy, params: object) => boolean | void;
    beforewrite: (thisCmp: DataProxy, action: string, rs: Ext.data.Record | Ext.data.Record[], params: object) => boolean | void;
    exception: (thisCmp: DataProxy, type: string, action: string, options: object, response: object, arg: unknown) => boolean | void;
    load: (thisCmp: DataProxy, o: object, options: object) => boolean | void;
    loadexception: (misc: misc) => boolean | void;
    write: (thisCmp: DataProxy, action: string, data: object, response: object, rs: Ext.data.Record | Ext.data.Record[], options: object) => boolean | void;
  }
}
