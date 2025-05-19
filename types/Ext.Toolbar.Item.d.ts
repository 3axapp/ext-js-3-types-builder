declare namespace Ext.Toolbar {
  class Item extends Ext.BoxComponent {

    public constructor(config: IItemConfig);

    public addListener<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public disable(): this;

    public enable(): this;

    public fireEvent<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public focus(): this;

    public hasListener<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IItemConfig {
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

  interface IItemEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Item, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Item) => boolean | void;
    beforedestroy: (thisCmp: Item) => boolean | void;
    beforehide: (thisCmp: Item) => boolean | void;
    beforerender: (thisCmp: Item) => boolean | void;
    beforeshow: (thisCmp: Item) => boolean | void;
    beforestaterestore: (thisCmp: Item, state: object) => boolean | void;
    beforestatesave: (thisCmp: Item, state: object) => boolean | void;
    destroy: (thisCmp: Item) => boolean | void;
    disable: (thisCmp: Item) => boolean | void;
    enable: (thisCmp: Item) => boolean | void;
    hide: (thisCmp: Item) => boolean | void;
    move: (thisCmp: Item, x: number, y: number) => boolean | void;
    removed: (thisCmp: Item, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Item) => boolean | void;
    resize: (thisCmp: Item, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Item) => boolean | void;
    staterestore: (thisCmp: Item, state: object) => boolean | void;
    statesave: (thisCmp: Item, state: object) => boolean | void;
  }
}
