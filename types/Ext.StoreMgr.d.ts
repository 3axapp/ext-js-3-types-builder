declare namespace Ext {
  class StoreMgr extends Ext.util.MixedCollection {

    public constructor(config: IStoreMgrConfig);

    public addListener<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public lookup(id: string | object): Ext.data.Store<R>;

    public on<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public register(...stores: Ext.data.Store<R>[]): void;

    public removeListener<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IStoreMgrEvents = IStoreMgrEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unregister(ids: string | object): void;
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
