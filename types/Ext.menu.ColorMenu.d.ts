declare namespace Ext.menu {
  class ColorMenu extends Ext.menu.Menu {

    public palette: ColorPalette;

    public constructor(config: IColorMenuConfig);

    public addListener<T extends IColorMenuEvents = IColorMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IColorMenuEvents = IColorMenuEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IColorMenuEvents = IColorMenuEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private menuHide(): void;

    public on<T extends IColorMenuEvents = IColorMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IColorMenuEvents = IColorMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IColorMenuEvents = IColorMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IColorMenuConfig {
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
    paletteId?: string,
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

  interface IColorMenuEvents extends Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: ColorMenu, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: ColorMenu, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: ColorMenu, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: ColorMenu) => boolean | void;
    beforeadd: (thisCmp: ColorMenu, component: Ext.Component, index: number) => boolean | void;
    beforedestroy: (thisCmp: ColorMenu) => boolean | void;
    beforehide: (thisCmp: ColorMenu) => boolean | void;
    beforeremove: (thisCmp: ColorMenu, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: ColorMenu) => boolean | void;
    beforeshow: (thisCmp: ColorMenu) => boolean | void;
    beforestaterestore: (thisCmp: ColorMenu, state: object) => boolean | void;
    beforestatesave: (thisCmp: ColorMenu, state: object) => boolean | void;
    destroy: (thisCmp: ColorMenu) => boolean | void;
    disable: (thisCmp: ColorMenu) => boolean | void;
    enable: (thisCmp: ColorMenu) => boolean | void;
    hide: (thisCmp: ColorMenu) => boolean | void;
    mouseout: (thisCmp: ColorMenu, e: Ext.EventObject, menuItem: Ext.menu.Item) => boolean | void;
    mouseover: (thisCmp: ColorMenu, e: Ext.EventObject, menuItem: Ext.menu.Item) => boolean | void;
    move: (thisCmp: ColorMenu, x: number, y: number) => boolean | void;
    remove: (thisCmp: ColorMenu, component: Ext.Component) => boolean | void;
    removed: (thisCmp: ColorMenu, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ColorMenu) => boolean | void;
    resize: (thisCmp: ColorMenu, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    select: (palette: Ext.ColorPalette, color: string) => boolean | void;
    show: (thisCmp: ColorMenu) => boolean | void;
    staterestore: (thisCmp: ColorMenu, state: object) => boolean | void;
    statesave: (thisCmp: ColorMenu, state: object) => boolean | void;
  }
}
