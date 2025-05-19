declare namespace Ext.data {
  class ScriptTagProxy extends Ext.data.DataProxy {

    public constructor(config: IScriptTagProxyConfig);

    public abort(): void;

    public addListener<T extends IScriptTagProxyEvents = IScriptTagProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public doRequest(action: string, rs: Ext.data.Record | Ext.data.Record[], params: object, reader: Ext.data.DataReader, callback: Function, scope: object, arg: object): void;

    public fireEvent<T extends IScriptTagProxyEvents = IScriptTagProxyEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IScriptTagProxyEvents = IScriptTagProxyEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IScriptTagProxyEvents = IScriptTagProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    protected onRead(action: string, trans: object, res: object): void;

    protected onWrite(action: string, trans: object, res: object): void;

    public removeListener<T extends IScriptTagProxyEvents = IScriptTagProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IScriptTagProxyEvents = IScriptTagProxyEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IScriptTagProxyConfig {
    api?: object,
    callbackParam?: string,
    doRequest?: Function,
    listeners?: object,
    nocache?: boolean,
    restful?: boolean,
    timeout?: number,
    url?: string,
  }

  interface IScriptTagProxyEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeload: (thisCmp: ScriptTagProxy, params: object) => boolean | void;
    beforewrite: (thisCmp: ScriptTagProxy, action: string, rs: Ext.data.Record | Ext.data.Record[], params: object) => boolean | void;
    exception: (thisCmp: ScriptTagProxy, type: string, action: string, options: object, response: object, arg: unknown) => boolean | void;
    load: (thisCmp: ScriptTagProxy, o: object, options: object) => boolean | void;
    loadexception: (thisCmp: ScriptTagProxy, options: object, arg: object, e: Error) => boolean | void;
    write: (thisCmp: ScriptTagProxy, action: string, data: object, response: object, rs: Ext.data.Record | Ext.data.Record[], options: object) => boolean | void;
  }
}
