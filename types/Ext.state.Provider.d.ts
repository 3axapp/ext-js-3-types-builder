declare namespace Ext.state {
  class Provider extends Ext.util.Observable {

    public re: RegExp;

    public constructor(config: IProviderConfig);

    public addListener<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public clear(name: string): void;

    public decodeValue(value: string): unknown;

    public encodeValue(value: unknown): string;

    public fireEvent<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public get(name: string, defaultValue: unknown): unknown;

    public hasListener<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public set(name: string, value: unknown): void;

    public un<T extends IProviderEvents = IProviderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IProviderConfig {
    listeners?: object,
  }

  interface IProviderEvents extends Record<string, (...args: any[]) => boolean | void> {
    statechange: (thisCmp: Provider, key: string, value: string) => boolean | void;
  }
}
