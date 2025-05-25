declare namespace Ext.data {
  class Store<R extends globalThis.Record<string, unknown> = globalThis.Record<string, unknown>> extends Ext.util.Observable {

    public baseParams: object;

    private batchKey: string;

    public fields: Ext.util.MixedCollection;

    public hasMultiSort: boolean;

    public isDestroyed: boolean;

    public lastOptions: object;

    public multiSortInfo: object;

    public recordType: Function;

    public constructor(config: IStoreConfig);

    public add(records: Ext.data.Record[]): void;

    public addListener<T extends IStoreEvents<R> = IStoreEvents<R>, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public addSorted(record: Ext.data.Record): void;

    private addToBatch(batch: object): void;

    private afterCommit(record: object): void;

    private afterEdit(record: object): void;

    private afterReject(record: object): void;

    private applySort(): void;

    private buildWriter(config: object): Ext.data.DataWriter;

    private clearData(): void;

    public clearFilter(suppressEvent: boolean): void;

    private clearModified(rs: object): void;

    public collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean): unknown[];

    public commitChanges(): void;

    private createCallback(action: object, rs: object, batch: object): void;

    private createFilterFn(property: string, value: string | RegExp, anyMatch: boolean, caseSensitive: boolean, exactMatch: boolean): void;

    private createMultipleFilterFn(filters: unknown[]): Function;

    private createRecords(store: object, records: object, index: object): void;

    private createSortFunction(field: string, direction: string): Function;

    public destroy(): void;

    private destroyRecord(store: Store, record: Ext.data.Record, index: number): void;

    private doTransaction(action: object, rs: object, batch: object): void;

    private doUpdate(rec: object): void;

    public each(fn: Function, scope?: object): void;

    private execute(action: string, rs: Ext.data.Record<R> | Ext.data.Record<R>[], options: object): void;

    public filter(field: string | unknown[], value: string | RegExp, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean): void;

    public filterBy(fn: Function, scope?: object): void;

    public find(fieldName: string, value: string | RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean): number;

    public findBy(fn: Function, scope?: object, startIndex?: number): number;

    public findExact(fieldName: string, value: unknown, startIndex?: number): number;

    private findInsertIndex(record: object): void;

    public fireEvent<T extends IStoreEvents<R> = IStoreEvents<R>, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getAt(index: number): Ext.data.Record;

    public getById(id: string): Ext.data.Record;

    public getCount(): number;

    public getModifiedRecords(): Ext.data.Record[];

    public getRange(startIndex?: number, endIndex?: number): Ext.data.Record[];

    public getSortState(): object;

    public getTotalCount(): number;

    private handleException(e: object): void;

    public hasListener<T extends IStoreEvents<R> = IStoreEvents<R>, E extends keyof T = keyof T>(eventName: E): boolean;

    public indexOf(record: Ext.data.Record): number;

    public indexOfId(id: string): number;

    public insert(index: number, records: Ext.data.Record[]): void;

    public isFiltered(): boolean;

    public load(options: object): boolean;

    public loadData(data: object, append?: boolean): void;

    private loadRecords(o: object, options: object, success: object): void;

    public multiSort(sorters: unknown[], direction: string): void;

    public on<T extends IStoreEvents<R> = IStoreEvents<R>, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onClear(store: object, records: object): void;

    private onCreateRecords(success: object, rs: object, data: object): void;

    private onDestroyRecords(success: object, rs: object, data: object): void;

    private onMetaChange(meta: object): void;

    private onUpdateRecords(success: object, rs: object, data: object): void;

    public query(field: string, value: string | RegExp, anyMatch?: boolean, caseSensitive?: boolean): Ext.util.MixedCollection;

    public queryBy(fn: Function, scope?: object): Ext.util.MixedCollection;

    private reMap(record: object): void;

    public rejectChanges(): void;

    public reload(options: object): void;

    public remove(record: Ext.data.Record | Ext.data.Record[]): void;

    public removeAll(silent: boolean): void;

    public removeAt(index: number): void;

    private removeFromBatch(batch: object, action: object, data: object): void;

    public removeListener<T extends IStoreEvents<R> = IStoreEvents<R>, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public save(): number;

    public setBaseParam(name: string, value: unknown): void;

    public setDefaultSort(fieldName: string, dir?: string): void;

    public singleSort(fieldName: string, dir?: string): void;

    public sort(fieldName: string | unknown[], dir?: string): void;

    private sortData(): void;

    private storeOptions(o: object): void;

    public sum(property: string, start?: number, end?: number): number;

    public un<T extends IStoreEvents<R> = IStoreEvents<R>, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateRecord(store: object, record: object, action: object): void;
  }

  interface IStoreConfig {
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
    reader?: Ext.data.DataReader,
    remoteSort?: boolean,
    restful?: boolean,
    sortInfo?: object,
    storeId?: string,
    url?: string,
    writer?: Ext.data.DataWriter,
  }

  interface IStoreEvents<R extends globalThis.Record<string, unknown>> extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: Store, records: Ext.data.Record[], index: number) => boolean | void;
    beforeload: (thisCmp: Store, options: object) => boolean | void;
    beforesave: (store: Ext.data.Store<R>, data: object) => boolean | void;
    beforewrite: (store: Ext.data.Store<R>, action: string, rs: Ext.data.Record<R> | Ext.data.Record<R>[], options: object, arg: object) => boolean | void;
    clear: (thisCmp: Store, records: Ext.data.Record<R>[]) => boolean | void;
    datachanged: (thisCmp: Store) => boolean | void;
    exception: (misc: unknown) => boolean | void;
    load: (thisCmp: Store, records: Ext.data.Record[], options: object) => boolean | void;
    loadexception: (misc: unknown) => boolean | void;
    metachange: (thisCmp: Store, meta: object) => boolean | void;
    remove: (thisCmp: Store, record: Ext.data.Record, index: number) => boolean | void;
    save: (store: Ext.data.Store<R>, batch: number, data: object) => boolean | void;
    update: (thisCmp: Store, record: Ext.data.Record, operation: string) => boolean | void;
    write: (store: Ext.data.Store<R>, action: string, result: object, res: Ext.Direct.Transaction, rs: Ext.data.Record<R> | Ext.data.Record<R>[]) => boolean | void;
  }
}
