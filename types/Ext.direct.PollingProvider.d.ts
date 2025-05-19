declare namespace Ext.direct {
  class PollingProvider extends Ext.direct.JsonProvider {

    public constructor(config: IPollingProviderConfig);

    public addListener<T extends IPollingProviderEvents = IPollingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public connect(): void;

    public disconnect(): void;

    public fireEvent<T extends IPollingProviderEvents = IPollingProviderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IPollingProviderEvents = IPollingProviderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isConnected(): void;

    public on<T extends IPollingProviderEvents = IPollingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onData(opt: object, success: object, xhr: object): void;

    public removeListener<T extends IPollingProviderEvents = IPollingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IPollingProviderEvents = IPollingProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IPollingProviderConfig {
    baseParams?: object,
    id?: string,
    interval?: number,
    listeners?: object,
    priority?: number,
    type?: string,
    url?: string | Function,
  }

  interface IPollingProviderEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforepoll: (thisCmp: PollingProvider) => boolean | void;
    connect: (provider: Ext.direct.Provider) => boolean | void;
    data: (provider: Ext.direct.Provider, e: event) => boolean | void;
    disconnect: (provider: Ext.direct.Provider) => boolean | void;
    exception: () => boolean | void;
    poll: (thisCmp: PollingProvider) => boolean | void;
  }
}
