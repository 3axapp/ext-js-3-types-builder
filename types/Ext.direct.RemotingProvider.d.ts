declare namespace Ext.direct {
  class RemotingProvider extends Ext.direct.JsonProvider {

    public constructor(config: IRemotingProviderConfig);

    public addListener<T extends IRemotingProviderEvents = IRemotingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private combineAndSend(): void;

    public connect(): void;

    private createMethod(c: object, m: object): void;

    public disconnect(): void;

    private doCall(c: object, m: object, args: object): void;

    private doCallback(t: object, e: object): void;

    private doForm(c: object, m: object, form: object, callback: object, scope: object): void;

    private doSend(data: object): void;

    public fireEvent<T extends IRemotingProviderEvents = IRemotingProviderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getCallData(t: object): void;

    private getTransaction(opt: object): void;

    public hasListener<T extends IRemotingProviderEvents = IRemotingProviderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initAPI(): void;

    public isConnected(): void;

    public on<T extends IRemotingProviderEvents = IRemotingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onData(opt: object, success: object, xhr: object): void;

    private processForm(t: object): void;

    private queueTransaction(t: object): void;

    public removeListener<T extends IRemotingProviderEvents = IRemotingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IRemotingProviderEvents = IRemotingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IRemotingProviderConfig {
    actions?: object,
    enableBuffer?: number | boolean,
    enableUrlEncode?: string,
    id?: string,
    listeners?: object,
    maxRetries?: number,
    namespace?: string | object,
    priority?: number,
    timeout?: number,
    type?: string,
    url?: string,
  }

  interface IRemotingProviderEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforecall: (provider: Ext.direct.RemotingProvider, transaction: Ext.Direct.Transaction, meta: object) => boolean | void;
    call: (provider: Ext.direct.RemotingProvider, transaction: Ext.Direct.Transaction, meta: object) => boolean | void;
    connect: (provider: Ext.direct.Provider) => boolean | void;
    data: (provider: Ext.direct.Provider, e: event) => boolean | void;
    disconnect: (provider: Ext.direct.Provider) => boolean | void;
    exception: () => boolean | void;
  }
}
