declare namespace Ext.direct {
  class JsonProvider extends Ext.direct.Provider {

    public constructor(config: IJsonProviderConfig);

    public addListener<T extends IJsonProviderEvents = IJsonProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IJsonProviderEvents = IJsonProviderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getEvents(xhr: object): void;

    public hasListener<T extends IJsonProviderEvents = IJsonProviderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IJsonProviderEvents = IJsonProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private parseResponse(xhr: object): void;

    public removeListener<T extends IJsonProviderEvents = IJsonProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IJsonProviderEvents = IJsonProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IJsonProviderConfig {
    id?: string,
    listeners?: object,
    priority?: number,
    type?: string,
  }

  interface IJsonProviderEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    connect: (provider: Ext.direct.Provider) => boolean | void;
    data: (provider: Ext.direct.Provider, e: event) => boolean | void;
    disconnect: (provider: Ext.direct.Provider) => boolean | void;
    exception: () => boolean | void;
  }
}
