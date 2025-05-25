declare namespace Ext.direct {
  class Provider extends Ext.util.Observable {

    public constructor(config: IProviderConfig);

    public addListener<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public connect(): void;

    public disconnect(): void;

    public fireEvent<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isConnected(): void;

    public on<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IProviderConfig {
    id?: string,
    listeners?: object,
    priority?: number,
    type?: string,
  }

  interface IProviderEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    connect: (provider: Ext.direct.Provider) => boolean | void;
    data: (provider: Ext.direct.Provider, e: event) => boolean | void;
    disconnect: (provider: Ext.direct.Provider) => boolean | void;
    exception: () => boolean | void;
  }
}
