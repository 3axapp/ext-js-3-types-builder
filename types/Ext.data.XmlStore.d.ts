declare namespace Ext.data {
  class XmlStore extends Ext.data.Store {

    public constructor(config: IXmlStoreConfig);

    public addListener<T extends IXmlStoreEvents = IXmlStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IXmlStoreEvents = IXmlStoreEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IXmlStoreEvents = IXmlStoreEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IXmlStoreEvents = IXmlStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IXmlStoreEvents = IXmlStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IXmlStoreEvents = IXmlStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IXmlStoreConfig {
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

  interface IXmlStoreEvents extends Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: XmlStore, records: Ext.data.Record[], index: number) => boolean | void;
    beforeload: (thisCmp: XmlStore, options: object) => boolean | void;
    beforesave: (store: Ext.data.Store, data: object) => boolean | void;
    beforewrite: (store: Ext.data.Store, action: string, rs: Ext.data.Record | Ext.data.Record[], options: object, arg: object) => boolean | void;
    clear: (thisCmp: XmlStore, records: Ext.data.Record[]) => boolean | void;
    datachanged: (thisCmp: XmlStore) => boolean | void;
    exception: (misc: misc) => boolean | void;
    load: (thisCmp: XmlStore, records: Ext.data.Record[], options: object) => boolean | void;
    loadexception: (misc: misc) => boolean | void;
    metachange: (thisCmp: XmlStore, meta: object) => boolean | void;
    remove: (thisCmp: XmlStore, record: Ext.data.Record, index: number) => boolean | void;
    save: (store: Ext.data.Store, batch: number, data: object) => boolean | void;
    update: (thisCmp: XmlStore, record: Ext.data.Record, operation: string) => boolean | void;
    write: (store: Ext.data.Store, action: string, result: object, res: Ext.Direct.Transaction, rs: Ext.data.Record | Ext.data.Record[]) => boolean | void;
  }
}
