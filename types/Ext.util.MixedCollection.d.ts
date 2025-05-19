declare namespace Ext.util {
  class MixedCollection extends Ext.util.Observable {

    public constructor(config: IMixedCollectionConfig);

    private _sort(property: string, dir?: string, fn?: Function): void;

    public add(key: string, o: object): object;

    public addAll(objs: object | unknown[]): void;

    public addListener<T extends IMixedCollectionEvents = IMixedCollectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public clear(): void;

    public clone(): Ext.util.MixedCollection;

    public contains(o: object): boolean;

    public containsKey(key: string): boolean;

    private createValueMatcher(value: string, anyMatch: boolean, caseSensitive: boolean, exactMatch: boolean): void;

    public each(fn: Function, scope?: object): void;

    public eachKey(fn: Function, scope?: object): void;

    public filter(property: string, value: string | RegExp, anyMatch?: boolean, caseSensitive?: boolean): Ext.util.MixedCollection;

    public filterBy(fn: Function, scope?: object): Ext.util.MixedCollection;

    public find(fn: Function, scope?: object): object;

    public findIndex(property: string, value: string | RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean): number;

    public findIndexBy(fn: Function, scope?: object, start?: number): number;

    public fireEvent<T extends IMixedCollectionEvents = IMixedCollectionEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public first(): object;

    public get(key: string | number): object;

    public getCount(): number;

    public getKey(item: object): object;

    public getRange(startIndex?: number, endIndex?: number): unknown[];

    public hasListener<T extends IMixedCollectionEvents = IMixedCollectionEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public indexOf(o: object): number;

    public indexOfKey(key: string): number;

    public insert(index: number, key: string, o?: object): object;

    public item(key: string | number): object;

    public itemAt(index: number): object;

    public key(key: string | number): object;

    public keySort(direction?: string, fn?: Function): void;

    public last(): object;

    public on<T extends IMixedCollectionEvents = IMixedCollectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public remove(o: object): object;

    public removeAt(index: number): object;

    public removeKey(key: string): object;

    public removeListener<T extends IMixedCollectionEvents = IMixedCollectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public reorder(mapping: object): void;

    public replace(key: string, o: object): object;

    public sort(direction?: string, fn?: Function): void;

    public un<T extends IMixedCollectionEvents = IMixedCollectionEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IMixedCollectionConfig {
    allowFunctions?: boolean,
    listeners?: object,
  }

  interface IMixedCollectionEvents extends Record<string, (...args: any[]) => boolean | void> {
    add: (index: number, o: object, key: string) => boolean | void;
    clear: () => boolean | void;
    remove: (o: object, key?: string) => boolean | void;
    replace: (key: string, oldValue: object, newValue: object) => boolean | void;
  }
}
