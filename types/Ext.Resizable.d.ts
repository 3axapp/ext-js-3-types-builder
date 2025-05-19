declare namespace Ext {
  class Resizable extends Ext.util.Observable {

    public enabled: boolean;

    public proxy: Ext.Element;

    public constructor(config: IResizableConfig);

    public addListener<T extends IResizableEvents = IResizableEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private constrain(v: object, diff: object, m: object, mx: object): void;

    public destroy(removeEl?: boolean): void;

    public fireEvent<T extends IResizableEvents = IResizableEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getEl(): Ext.Element;

    public getResizeChild(): Ext.Element;

    private handleOut(): void;

    private handleOver(): void;

    public hasListener<T extends IResizableEvents = IResizableEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IResizableEvents = IResizableEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onMouseDown(handle: object, e: object): void;

    private onMouseMove(e: object): void;

    private onMouseUp(e: object): void;

    public removeListener<T extends IResizableEvents = IResizableEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public resizeElement(): void;

    public resizeTo(width: number, height: number): void;

    private snap(value: object, inc: object, min: object): void;

    private startSizing(e: object, handle: object): void;

    private syncHandleHeight(): void;

    public un<T extends IResizableEvents = IResizableEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateChildSize(): void;
  }

  interface IResizableConfig {
    adjustments?: unknown[] | string,
    animate?: boolean,
    constrainTo?: unknown,
    disableTrackOver?: boolean,
    draggable?: boolean,
    duration?: number,
    dynamic?: boolean,
    easing?: string,
    enabled?: boolean,
    handleCls?: string,
    handles?: string,
    height?: number,
    heightIncrement?: number,
    listeners?: object,
    maxHeight?: number,
    maxWidth?: number,
    minHeight?: number,
    minWidth?: number,
    minX?: number,
    minY?: number,
    multiDirectional?: boolean,
    pinned?: boolean,
    preserveRatio?: boolean,
    resizeChild?: boolean | string | Element,
    resizeRegion?: Ext.lib.Region,
    transparent?: boolean,
    width?: number,
    widthIncrement?: number,
    wrap?: boolean,
  }

  interface IResizableEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeresize: (thisCmp: Resizable, e: Ext.EventObject) => boolean | void;
    resize: (thisCmp: Resizable, width: number, height: number, e: Ext.EventObject) => boolean | void;
  }
}
