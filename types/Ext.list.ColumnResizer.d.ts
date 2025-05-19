declare namespace Ext.list {
  class ColumnResizer extends Ext.util.Observable {

    public constructor(config: IColumnResizerConfig);

    public addListener(eventName: string, handler: Function, scope?: object, options?: object): void;

    public fireEvent(eventName: string, ...args: object[]): boolean;

    private handleHdMove(e: object, t: object): void;

    public hasListener(eventName: string): boolean;

    private init(listView: object): void;

    private initEvents(view: object): void;

    public on(eventName: string, handler: Function, scope?: object, options?: object): void;

    private onBeforeStart(e: object): void;

    private onDrag(e: object): void;

    private onEnd(e: object): void;

    private onStart(e: object): void;

    public removeListener(eventName: string, handler: Function, scope?: object): void;

    private setBoundaries(relativeX: object): void;

    public un(eventName: string, handler: Function, scope?: object): void;
  }

  interface IColumnResizerConfig {
    listeners?: object,
    minPct?: number,
  }
}
