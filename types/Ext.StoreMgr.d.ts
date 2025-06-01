declare namespace Ext {
  namespace StoreMgr {

    function addListener<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function fireEvent<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>):  boolean;

    function hasListener<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E):  boolean;

    function lookup(id: string | object):  Ext.data.Store<R>;

    function on<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function register(...stores: Ext.data.Store<R>[]):  void;

    function removeListener<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;

    function un<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;

    function unregister(ids: string | object):  void;
  }

  interface IStoreMgrConfig {
    allowFunctions?: boolean,
  }

  interface IStoreMgrEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (index: number, o: object, key: string) => boolean | void;
    clear: () => boolean | void;
    remove: (o: object, key?: string) => boolean | void;
    replace: (key: string, oldValue: object, newValue: object) => boolean | void;
  }
}
