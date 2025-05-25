declare namespace Ext.data {
  class JsonStore extends Ext.data.Store {

    public constructor(config: IJsonStoreConfig);

    public addListener<T extends IJsonStoreEvents = IJsonStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IJsonStoreEvents = IJsonStoreEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IJsonStoreEvents = IJsonStoreEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IJsonStoreEvents = IJsonStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IJsonStoreEvents = IJsonStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IJsonStoreEvents = IJsonStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IJsonStoreConfig {
    autoDestroy?: boolean,
    autoLoad?: boolean | object,
    autoSave?: boolean,
    baseParams?: object,
    batch?: boolean,
    data?: unknown[],
    defaultParamNames?: object,
    listeners?: object,
    paramNames?: object,
    proxy?: Ext.data.DataProxy,
    pruneModifiedRecords?: boolean,
    remoteSort?: boolean,
    restful?: boolean,
    sortInfo?: object,
    storeId?: string,
    url?: string,
    writer?: Ext.data.DataWriter,
  }

  interface IJsonStoreEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: JsonStore, records: Ext.data.Record[], index: number) => boolean | void;
    beforeload: (thisCmp: JsonStore, options: object) => boolean | void;
    beforesave: (store: Ext.data.Store<R>, data: object) => boolean | void;
    beforewrite: (store: Ext.data.Store<R>, action: string, rs: Ext.data.Record<R> | Ext.data.Record<R>[], options: object, arg: object) => boolean | void;
    clear: (thisCmp: JsonStore, records: Ext.data.Record<R>[]) => boolean | void;
    datachanged: (thisCmp: JsonStore) => boolean | void;
    exception: (misc: unknown) => boolean | void;
    load: (thisCmp: JsonStore, records: Ext.data.Record[], options: object) => boolean | void;
    loadexception: (misc: unknown) => boolean | void;
    metachange: (thisCmp: JsonStore, meta: object) => boolean | void;
    remove: (thisCmp: JsonStore, record: Ext.data.Record, index: number) => boolean | void;
    save: (store: Ext.data.Store<R>, batch: number, data: object) => boolean | void;
    update: (thisCmp: JsonStore, record: Ext.data.Record, operation: string) => boolean | void;
    write: (store: Ext.data.Store<R>, action: string, result: object, res: Ext.Direct.Transaction, rs: Ext.data.Record<R> | Ext.data.Record<R>[]) => boolean | void;
  }
}
