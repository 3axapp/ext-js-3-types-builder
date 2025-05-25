declare namespace Ext.Toolbar {
  class Fill extends Ext.Toolbar.Spacer {

    private isFill: boolean;

    public constructor(config: IFillConfig);

    public addListener<T extends IFillEvents = IFillEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IFillEvents = IFillEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IFillEvents = IFillEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IFillEvents = IFillEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IFillEvents = IFillEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public render(): this;

    public un<T extends IFillEvents = IFillEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IFillConfig {
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
    overflowText?: string,
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

  interface IFillEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Fill, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Fill) => boolean | void;
    beforedestroy: (thisCmp: Fill) => boolean | void;
    beforehide: (thisCmp: Fill) => boolean | void;
    beforerender: (thisCmp: Fill) => boolean | void;
    beforeshow: (thisCmp: Fill) => boolean | void;
    beforestaterestore: (thisCmp: Fill, state: object) => boolean | void;
    beforestatesave: (thisCmp: Fill, state: object) => boolean | void;
    destroy: (thisCmp: Fill) => boolean | void;
    disable: (thisCmp: Fill) => boolean | void;
    enable: (thisCmp: Fill) => boolean | void;
    hide: (thisCmp: Fill) => boolean | void;
    move: (thisCmp: Fill, x: number, y: number) => boolean | void;
    removed: (thisCmp: Fill, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Fill) => boolean | void;
    resize: (thisCmp: Fill, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Fill) => boolean | void;
    staterestore: (thisCmp: Fill, state: object) => boolean | void;
    statesave: (thisCmp: Fill, state: object) => boolean | void;
  }
}
