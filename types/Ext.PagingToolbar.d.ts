declare namespace Ext {
  class PagingToolbar extends Ext.Toolbar {

    public cursor: number;

    public pageSize: number;

    public paramNames: object;

    public constructor(config: IPagingToolbarConfig);

    public addListener<T extends IPagingToolbarEvents = IPagingToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public bind(store: Ext.data.Store<R>): void;

    public bindStore(store: Store, initial?: boolean): void;

    public changePage(page: Integer): void;

    public doRefresh(): void;

    public fireEvent<T extends IPagingToolbarEvents = IPagingToolbarEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IPagingToolbarEvents = IPagingToolbarEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public moveFirst(): void;

    public moveLast(): void;

    public moveNext(): void;

    public movePrevious(): void;

    public on<T extends IPagingToolbarEvents = IPagingToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IPagingToolbarEvents = IPagingToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IPagingToolbarEvents = IPagingToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unbind(store: Ext.data.Store<R>): void;
  }

  interface IPagingToolbarConfig {
    activeItem?: string | number,
    afterPageText?: string,
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoDestroy?: boolean,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    beforePageText?: string,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    bufferResize?: boolean | number,
    buttonAlign?: string,
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultType?: string,
    defaults?: Object|Function,
    disabled?: boolean,
    disabledClass?: string,
    displayInfo?: boolean,
    displayMsg?: string,
    emptyMsg?: string,
    enableOverflow?: boolean,
    fieldLabel?: string,
    firstText?: string,
    flex?: number,
    forceLayout?: boolean,
    height?: number,
    hidden?: boolean,
    hideBorders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    items?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    lastText?: string,
    layout?: string | object,
    layoutConfig?: object,
    listeners?: object,
    margins?: object,
    monitorResize?: boolean,
    nextText?: string,
    overCls?: string,
    pageSize?: number,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    prependButtons?: boolean,
    prevText?: string,
    ptype?: string,
    ref?: string,
    refreshText?: string,
    region?: string,
    renderTo?: unknown,
    resizeEvent?: string,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    store?: Ext.data.Store<R>,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IPagingToolbarEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: PagingToolbar, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: PagingToolbar, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: PagingToolbar, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: PagingToolbar) => boolean | void;
    beforeadd: (thisCmp: PagingToolbar, component: Ext.Component, index: number) => boolean | void;
    beforechange: (thisCmp: PagingToolbar, params: object) => boolean | void;
    beforedestroy: (thisCmp: PagingToolbar) => boolean | void;
    beforehide: (thisCmp: PagingToolbar) => boolean | void;
    beforeremove: (thisCmp: PagingToolbar, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: PagingToolbar) => boolean | void;
    beforeshow: (thisCmp: PagingToolbar) => boolean | void;
    beforestaterestore: (thisCmp: PagingToolbar, state: object) => boolean | void;
    beforestatesave: (thisCmp: PagingToolbar, state: object) => boolean | void;
    change: (thisCmp: PagingToolbar, pageData: object) => boolean | void;
    destroy: (thisCmp: PagingToolbar) => boolean | void;
    disable: (thisCmp: PagingToolbar) => boolean | void;
    enable: (thisCmp: PagingToolbar) => boolean | void;
    hide: (thisCmp: PagingToolbar) => boolean | void;
    move: (thisCmp: PagingToolbar, x: number, y: number) => boolean | void;
    overflowchange: (c: object, lastOverflow: boolean) => boolean | void;
    remove: (thisCmp: PagingToolbar, component: Ext.Component) => boolean | void;
    removed: (thisCmp: PagingToolbar, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: PagingToolbar) => boolean | void;
    resize: (thisCmp: PagingToolbar, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: PagingToolbar) => boolean | void;
    staterestore: (thisCmp: PagingToolbar, state: object) => boolean | void;
    statesave: (thisCmp: PagingToolbar, state: object) => boolean | void;
  }
}
