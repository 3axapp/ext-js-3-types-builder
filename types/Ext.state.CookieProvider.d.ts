declare namespace Ext.state {
  class CookieProvider extends Ext.state.Provider {

    public constructor(config: ICookieProviderConfig);

    public addListener<T extends ICookieProviderEvents = ICookieProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public clear(name: object): void;

    private clearCookie(name: object): void;

    public fireEvent<T extends ICookieProviderEvents = ICookieProviderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ICookieProviderEvents = ICookieProviderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ICookieProviderEvents = ICookieProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private readCookies(): void;

    public removeListener<T extends ICookieProviderEvents = ICookieProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public set(name: object, value: object): void;

    private setCookie(name: object, value: object): void;

    public un<T extends ICookieProviderEvents = ICookieProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICookieProviderConfig {
    domain?: string,
    expires?: Date,
    listeners?: object,
    path?: string,
    secure?: boolean,
  }

  interface ICookieProviderEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    statechange: (thisCmp: CookieProvider, key: string, value: string) => boolean | void;
  }
}
