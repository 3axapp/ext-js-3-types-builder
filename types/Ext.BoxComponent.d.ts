declare namespace Ext {
  class BoxComponent extends Ext.Component {

    private boxReady: boolean;

    private deferHeight: boolean;

    public constructor(config: IBoxComponentConfig);

    public addListener<T extends IBoxComponentEvents = IBoxComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private adjustPosition(x: object, y: object): void;

    private adjustSize(w: object, h: object): void;

    private afterRender(): void;

    public fireEvent<T extends IBoxComponentEvents = IBoxComponentEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getBox(local?: boolean): object;

    public getHeight(): number;

    public getOuterSize(): object;

    public getPosition(local?: boolean): unknown[];

    public getResizeEl(): Ext.Element;

    public getSize(): object;

    public getWidth(): number;

    public hasListener<T extends IBoxComponentEvents = IBoxComponentEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends IBoxComponentEvents = IBoxComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onPosition(x: number, y: number): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    public removeListener<T extends IBoxComponentEvents = IBoxComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setAutoScroll(scroll: boolean): this;

    public setHeight(height: unknown): this;

    public setPagePosition(x: number, y: number): this;

    public setPosition(left: number, top: number): this;

    public setSize(width: unknown, height: unknown): this;

    public setWidth(width: unknown): this;

    public syncSize(): this;

    public un<T extends IBoxComponentEvents = IBoxComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public updateBox(box: object): this;
  }

  interface IBoxComponentConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
    flex?: number,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IBoxComponentEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: BoxComponent, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: BoxComponent) => boolean | void;
    beforedestroy: (thisCmp: BoxComponent) => boolean | void;
    beforehide: (thisCmp: BoxComponent) => boolean | void;
    beforerender: (thisCmp: BoxComponent) => boolean | void;
    beforeshow: (thisCmp: BoxComponent) => boolean | void;
    beforestaterestore: (thisCmp: BoxComponent, state: object) => boolean | void;
    beforestatesave: (thisCmp: BoxComponent, state: object) => boolean | void;
    destroy: (thisCmp: BoxComponent) => boolean | void;
    disable: (thisCmp: BoxComponent) => boolean | void;
    enable: (thisCmp: BoxComponent) => boolean | void;
    hide: (thisCmp: BoxComponent) => boolean | void;
    move: (thisCmp: BoxComponent, x: number, y: number) => boolean | void;
    removed: (thisCmp: BoxComponent, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: BoxComponent) => boolean | void;
    resize: (thisCmp: BoxComponent, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: BoxComponent) => boolean | void;
    staterestore: (thisCmp: BoxComponent, state: object) => boolean | void;
    statesave: (thisCmp: BoxComponent, state: object) => boolean | void;
  }
}
