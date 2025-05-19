declare namespace Ext {
  class History extends Ext.util.Observable {

    public fieldId: string;

    public iframeId: string;

    public constructor(config: IHistoryConfig);

    public add(token: string, preventDuplicates: boolean): void;

    public addListener<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public back(): void;

    public fireEvent<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public forward(): void;

    public getToken(): string;

    public hasListener<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public init(onReady?: boolean, scope?: object): void;

    public on<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IHistoryConfig {
    listeners?: object,
  }

  interface IHistoryEvents extends Record<string, (...args: any[]) => boolean | void> {
    change: (token: string) => boolean | void;
    ready: (The: Ext.History) => boolean | void;
  }
}
