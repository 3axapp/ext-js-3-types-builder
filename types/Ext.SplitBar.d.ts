declare namespace Ext {
  class SplitBar extends Ext.util.Observable {

    private adapter: object;

    public animate: boolean;

    private b4StartDrag: object;

    private dd: object;

    private dragSpecs: object;

    private el: object;

    private endDrag: object;

    public maxSize: number;

    public minSize: number;

    private orientation: number;

    private proxy: object;

    private resizingEl: object;

    private shim: object;

    public tickSize: number;

    public useShim: boolean;

    public constructor(config: ISplitBarConfig);

    public addListener<T extends ISplitBarEvents = ISplitBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private createProxy(dir: object): void;

    public destroy(removeEl: boolean): void;

    public fireEvent<T extends ISplitBarEvents = ISplitBarEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getAdapter(): object;

    public getMaximumSize(): number;

    public getMinimumSize(): number;

    public hasListener<T extends ISplitBarEvents = ISplitBarEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ISplitBarEvents = ISplitBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onEndProxyDrag(e: object): void;

    public removeListener<T extends ISplitBarEvents = ISplitBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setAdapter(adapter: object): void;

    public setCurrentSize(size: number): void;

    public setMaximumSize(maxSize: number): void;

    public setMinimumSize(minSize: number): void;

    public un<T extends ISplitBarEvents = ISplitBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ISplitBarConfig {
    listeners?: object,
  }

  interface ISplitBarEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeresize: (thisCmp: SplitBar) => boolean | void;
    moved: (thisCmp: SplitBar, newSize: number) => boolean | void;
    resize: (thisCmp: SplitBar, newSize: number) => boolean | void;
  }
}
