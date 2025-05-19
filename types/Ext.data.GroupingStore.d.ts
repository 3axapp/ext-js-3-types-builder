declare namespace Ext.data {
  class GroupingStore extends Ext.data.Store {

    public constructor(config: IGroupingStoreConfig);

    public addListener<T extends IGroupingStoreEvents = IGroupingStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private applyGroupField(): void;

    private applyGrouping(alwaysFireChange: object): void;

    public clearGrouping(): void;

    public fireEvent<T extends IGroupingStoreEvents = IGroupingStoreEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getGroupState(): string;

    public groupBy(field: string, forceRegroup?: boolean): void;

    public hasListener<T extends IGroupingStoreEvents = IGroupingStoreEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IGroupingStoreEvents = IGroupingStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IGroupingStoreEvents = IGroupingStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public sort(fieldName: object, dir: object): void;

    public un<T extends IGroupingStoreEvents = IGroupingStoreEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IGroupingStoreConfig {
    autoDestroy?: boolean,
    autoLoad?: boolean | object,
    autoSave?: boolean,
    baseParams?: object,
    batch?: boolean,
    data?: unknown[],
    defaultParamNames?: object,
    groupDir?: string,
    groupField?: string,
    groupOnSort?: boolean,
    listeners?: object,
    paramNames?: object,
    proxy?: Ext.data.DataProxy,
    pruneModifiedRecords?: boolean,
    reader?: Ext.data.DataReader,
    remoteGroup?: boolean,
    remoteSort?: boolean,
    restful?: boolean,
    sortInfo?: object,
    storeId?: string,
    url?: string,
    writer?: Ext.data.DataWriter,
  }

  interface IGroupingStoreEvents extends Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: GroupingStore, records: Ext.data.Record[], index: number) => boolean | void;
    beforeload: (thisCmp: GroupingStore, options: object) => boolean | void;
    beforesave: (store: Ext.data.Store, data: object) => boolean | void;
    beforewrite: (store: Ext.data.Store, action: string, rs: Ext.data.Record | Ext.data.Record[], options: object, arg: object) => boolean | void;
    clear: (thisCmp: GroupingStore, records: Ext.data.Record[]) => boolean | void;
    datachanged: (thisCmp: GroupingStore) => boolean | void;
    exception: (misc: misc) => boolean | void;
    groupchange: (store: Ext.data.GroupingStore, groupField: string) => boolean | void;
    load: (thisCmp: GroupingStore, records: Ext.data.Record[], options: object) => boolean | void;
    loadexception: (misc: misc) => boolean | void;
    metachange: (thisCmp: GroupingStore, meta: object) => boolean | void;
    remove: (thisCmp: GroupingStore, record: Ext.data.Record, index: number) => boolean | void;
    save: (store: Ext.data.Store, batch: number, data: object) => boolean | void;
    update: (thisCmp: GroupingStore, record: Ext.data.Record, operation: string) => boolean | void;
    write: (store: Ext.data.Store, action: string, result: object, res: Ext.Direct.Transaction, rs: Ext.data.Record | Ext.data.Record[]) => boolean | void;
  }
}
