declare namespace Ext {
  namespace Direct {

    const eventTypes: object;

    const exceptions: object;

    function addListener<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function addProvider(provider: object | unknown[]):  void;

    function addTransaction(t: object):  void;

    function createEvent(response: object, extraProps: object):  void;

    function fireEvent<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>):  boolean;

    function getProvider(id: string):  void;

    function getTransaction(tid: object):  void;

    function hasListener<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E):  boolean;

    function on<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function onProviderData(provider: object, e: object):  void;

    function removeListener<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;

    function removeProvider(id: object):  void;

    function removeTransaction(t: object):  void;

    function un<T extends IDirectEvents = IDirectEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;
  }

  interface IDirectConfig {
    listeners?: object,
  }

  interface IDirectEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    event: (e: event, provider: Ext.direct.Provider) => boolean | void;
    exception: (e: event) => boolean | void;
  }
}
