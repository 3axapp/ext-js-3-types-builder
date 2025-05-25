declare namespace Ext.menu {
  class Menu extends Ext.Container {

    private autoLayout: boolean;

    public hidden: boolean;

    private scrollerHeight: number;

    public constructor(config: IMenuConfig);

    public addElement(el: unknown): Ext.menu.Item;

    public addItem(item: Ext.menu.Item): Ext.menu.Item;

    public addListener<T extends IMenuEvents = IMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public addMenuItem(config: object): Ext.menu.Item;

    public addSeparator(): Ext.menu.Item;

    public addText(text: string): Ext.menu.Item;

    private applyDefaults(c: object): void;

    private constrainScroll(y: object): void;

    private createScrollers(): void;

    private deactivateActive(): void;

    private doFocus(): void;

    private findTargetItem(e: object): void;

    public fireEvent<T extends IMenuEvents = IMenuEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public focus(): this;

    public getLayoutTarget(): Ext.Element;

    private getMenuItem(config: object): void;

    public hasListener<T extends IMenuEvents = IMenuEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hide(deep?: boolean): void;

    private initComponent(): void;

    private lookupComponent(c: object): void;

    public on<T extends IMenuEvents = IMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onClick(e: object): void;

    private onDestroy(): void;

    private onHide(): void;

    private onLayout(): void;

    private onMouseOut(e: object): void;

    private onMouseOver(e: object): void;

    private onRender(ct: object, position: object): void;

    private onScroll(e: object, t: object): void;

    private onScrollerIn(e: object, t: object): void;

    private onScrollerOut(e: object, t: object): void;

    public removeListener<T extends IMenuEvents = IMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setActiveItem(item: object, autoExpand: object): void;

    public show(element: unknown, position?: string, parentMenu?: Ext.menu.Menu): void;

    public showAt(xyPosition: unknown[], parentMenu?: Ext.menu.Menu): void;

    private tryActivate(start: object, step: object): void;

    public un<T extends IMenuEvents = IMenuEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IMenuConfig {
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
    enableScrolling?: boolean,
    fieldLabel?: string,
    flex?: number,
    floating?: boolean,
    forceLayout?: boolean,
    height?: number,
    hidden?: boolean,
    hideBorders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
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
    maxHeight?: number,
    minWidth?: number,
    monitorResize?: boolean,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plain?: boolean,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    resizeEvent?: string,
    scrollIncrement?: number,
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

  interface IMenuEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: Menu, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: Menu, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: Menu, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: Menu) => boolean | void;
    beforeadd: (thisCmp: Menu, component: Ext.Component, index: number) => boolean | void;
    beforedestroy: (thisCmp: Menu) => boolean | void;
    beforehide: (thisCmp: Menu) => boolean | void;
    beforeremove: (thisCmp: Menu, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: Menu) => boolean | void;
    beforeshow: (thisCmp: Menu) => boolean | void;
    beforestaterestore: (thisCmp: Menu, state: object) => boolean | void;
    beforestatesave: (thisCmp: Menu, state: object) => boolean | void;
    click: (thisCmp: Menu, menuItem: Ext.menu.Item, e: Ext.EventObject) => boolean | void;
    destroy: (thisCmp: Menu) => boolean | void;
    disable: (thisCmp: Menu) => boolean | void;
    enable: (thisCmp: Menu) => boolean | void;
    hide: (thisCmp: Menu) => boolean | void;
    itemclick: (baseItem: Ext.menu.BaseItem, e: Ext.EventObject) => boolean | void;
    mouseout: (thisCmp: Menu, e: Ext.EventObject, menuItem: Ext.menu.Item) => boolean | void;
    mouseover: (thisCmp: Menu, e: Ext.EventObject, menuItem: Ext.menu.Item) => boolean | void;
    move: (thisCmp: Menu, x: number, y: number) => boolean | void;
    remove: (thisCmp: Menu, component: Ext.Component) => boolean | void;
    removed: (thisCmp: Menu, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Menu) => boolean | void;
    resize: (thisCmp: Menu, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Menu) => boolean | void;
    staterestore: (thisCmp: Menu, state: object) => boolean | void;
    statesave: (thisCmp: Menu, state: object) => boolean | void;
  }
}
