declare namespace Ext.list {
  class Sorter extends Ext.util.Observable {

    public constructor(config: ISorterConfig);

    public addListener(eventName: string, handler: Function, scope?: object, options?: object): void;

    public fireEvent(eventName: string, ...args: object[]): boolean;

    public hasListener(eventName: string): boolean;

    private init(listView: object): void;

    private initEvents(view: object): void;

    public on(eventName: string, handler: Function, scope?: object, options?: object): void;

    private onHdClick(e: object): void;

    public removeListener(eventName: string, handler: Function, scope?: object): void;

    public un(eventName: string, handler: Function, scope?: object): void;

    private updateSortIcon(col: object, dir: object): void;

    private updateSortState(store: object): void;
  }

  interface ISorterConfig {
    listeners?: object,
    sortClasses?: unknown[],
  }
}
