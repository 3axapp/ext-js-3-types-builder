declare namespace Ext.data {
  class ArrayStore extends Ext.data.Store {

    public constructor(config: IArrayStoreConfig);

    public addListener<T extends IArrayStoreEvents = IArrayStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IArrayStoreEvents = IArrayStoreEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IArrayStoreEvents = IArrayStoreEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public loadData(data: object, append: object): void;

    public on<T extends IArrayStoreEvents = IArrayStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IArrayStoreEvents = IArrayStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IArrayStoreEvents = IArrayStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IArrayStoreConfig {
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

  interface IArrayStoreEvents extends Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: ArrayStore, records: Ext.data.Record[], index: number) => boolean | void;
    beforeload: (thisCmp: ArrayStore, options: object) => boolean | void;
    beforesave: (store: Ext.data.Store, data: object) => boolean | void;
    beforewrite: (store: Ext.data.Store, action: string, rs: Ext.data.Record | Ext.data.Record[], options: object, arg: object) => boolean | void;
    clear: (thisCmp: ArrayStore, records: Ext.data.Record[]) => boolean | void;
    datachanged: (thisCmp: ArrayStore) => boolean | void;
    exception: (misc: misc) => boolean | void;
    load: (thisCmp: ArrayStore, records: Ext.data.Record[], options: object) => boolean | void;
    loadexception: (misc: misc) => boolean | void;
    metachange: (thisCmp: ArrayStore, meta: object) => boolean | void;
    remove: (thisCmp: ArrayStore, record: Ext.data.Record, index: number) => boolean | void;
    save: (store: Ext.data.Store, batch: number, data: object) => boolean | void;
    update: (thisCmp: ArrayStore, record: Ext.data.Record, operation: string) => boolean | void;
    write: (store: Ext.data.Store, action: string, result: object, res: Ext.Direct.Transaction, rs: Ext.data.Record | Ext.data.Record[]) => boolean | void;
  }
}
