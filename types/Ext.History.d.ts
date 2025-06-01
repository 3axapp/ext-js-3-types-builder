declare namespace Ext {
  namespace History {

    const fieldId: string;

    const iframeId: string;

    function add(token: string, preventDuplicates: boolean):  void;

    function addListener<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function back():  void;

    function fireEvent<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>):  boolean;

    function forward():  void;

    function getToken():  string;

    function hasListener<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E):  boolean;

    function init(onReady?: boolean, scope?: object):  void;

    function on<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function removeListener<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;

    function un<T extends IHistoryEvents = IHistoryEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;
  }

  interface IHistoryConfig {
    listeners?: object,
  }

  interface IHistoryEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    change: (token: string) => boolean | void;
    ready: (The: Ext.History) => boolean | void;
  }
}
