declare namespace Ext.menu {
  class DateMenu extends Ext.menu.Menu {

    public picker: DatePicker;

    public constructor(config: IDateMenuConfig);

    public addListener<T extends IDateMenuEvents = IDateMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IDateMenuEvents = IDateMenuEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IDateMenuEvents = IDateMenuEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private menuHide(): void;

    public on<T extends IDateMenuEvents = IDateMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onBeforeShow(): void;

    private onShow(): void;

    public removeListener<T extends IDateMenuEvents = IDateMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IDateMenuEvents = IDateMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IDateMenuConfig {
    activeItem?: string | number,
    allowDomMove?: boolean,
    allowOtherMenus?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoDestroy?: boolean,
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
    bufferResize?: boolean | number,
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultAlign?: string,
    defaultOffsets?: unknown[],
    defaultType?: string,
    defaults?: object,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
    flex?: number,
    floating?: boolean,
    forceLayout?: boolean,
    handler?: Function,
    height?: number,
    hidden?: boolean,
    hideBorders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideOnClick?: boolean,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    ignoreParentClicks?: boolean,
    itemCls?: string,
    itemId?: string,
    items?: unknown,
    labelSeparator?: string,
    labelStyle?: string,
    layout?: string | object,
    layoutConfig?: object,
    listeners?: object,
    margins?: object,
    minWidth?: number,
    monitorResize?: boolean,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    pickerId?: string,
    plain?: boolean,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    resizeEvent?: string,
    scope?: object,
    shadow?: boolean | string,
    showSeparator?: boolean,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    subMenuAlign?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
    zIndex?: number,
  }

  interface IDateMenuEvents extends Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: DateMenu, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: DateMenu, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: DateMenu, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: DateMenu) => boolean | void;
    beforeadd: (thisCmp: DateMenu, component: Ext.Component, index: number) => boolean | void;
    beforedestroy: (thisCmp: DateMenu) => boolean | void;
    beforehide: (thisCmp: DateMenu) => boolean | void;
    beforeremove: (thisCmp: DateMenu, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: DateMenu) => boolean | void;
    beforeshow: (thisCmp: DateMenu) => boolean | void;
    beforestaterestore: (thisCmp: DateMenu, state: object) => boolean | void;
    beforestatesave: (thisCmp: DateMenu, state: object) => boolean | void;
    destroy: (thisCmp: DateMenu) => boolean | void;
    disable: (thisCmp: DateMenu) => boolean | void;
    enable: (thisCmp: DateMenu) => boolean | void;
    hide: (thisCmp: DateMenu) => boolean | void;
    mouseout: (thisCmp: DateMenu, e: Ext.EventObject, menuItem: Ext.menu.Item) => boolean | void;
    mouseover: (thisCmp: DateMenu, e: Ext.EventObject, menuItem: Ext.menu.Item) => boolean | void;
    move: (thisCmp: DateMenu, x: number, y: number) => boolean | void;
    remove: (thisCmp: DateMenu, component: Ext.Component) => boolean | void;
    removed: (thisCmp: DateMenu, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: DateMenu) => boolean | void;
    resize: (thisCmp: DateMenu, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    select: (picker: DatePicker, date: Date) => boolean | void;
    show: (thisCmp: DateMenu) => boolean | void;
    staterestore: (thisCmp: DateMenu, state: object) => boolean | void;
    statesave: (thisCmp: DateMenu, state: object) => boolean | void;
  }
}
