declare namespace Ext {
  class Direct extends Ext.util.Observable {

    public eventTypes: object;

    public exceptions: object;

    public constructor(config: IDirectConfig);

    public addListener<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public addProvider(provider: object | unknown[]): void;

    private addTransaction(t: object): void;

    private createEvent(response: object, extraProps: object): void;

    public fireEvent<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getProvider(id: string): void;

    private getTransaction(tid: object): void;

    public hasListener<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onProviderData(provider: object, e: object): void;

    public removeListener<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private removeProvider(id: object): void;

    private removeTransaction(t: object): void;

    public un<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IDirectConfig {
    listeners?: object,
  }

  interface IDirectEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    event: (e: event, provider: Ext.direct.Provider) => boolean | void;
    exception: (e: event) => boolean | void;
  }
}
