declare namespace Ext.util {
  class Observable {

    public constructor(config: IObservableConfig);

    public addEvents(o: object | string, Optional: string): void;

    public addListener(eventName: string, handler: Function, scope?: object, options?: object): void;

    public enableBubble(events: string | unknown[]): void;

    public fireEvent(eventName: string, ...args: object[]): boolean;

    public hasListener(eventName: string): boolean;

    public on(eventName: string, handler: Function, scope?: object, options?: object): void;

    public purgeListeners(): void;

    public relayEvents(o: object, events: unknown[]): void;

    public removeListener(eventName: string, handler: Function, scope?: object): void;

    public resumeEvents(): void;

    public suspendEvents(queueSuspended: boolean): void;

    public un(eventName: string, handler: Function, scope?: object): void;

    public static capture(o: Ext.util.Observable, fn: Function, scope?: object): void;

    public static observeClass(c: Function, listeners: object): void;

    public static releaseCapture(o: Ext.util.Observable): void;
  }

  interface IObservableConfig {
    listeners?: object,
  }
}
