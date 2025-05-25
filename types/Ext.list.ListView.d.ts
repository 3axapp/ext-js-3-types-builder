declare namespace Ext.list {
  class ListView extends Ext.DataView {

    public disableHeaders: boolean;

    private maxColumnWidth: object;

    public constructor(config: IListViewConfig);

    public addListener<T extends IListViewEvents = IListViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public collectData(records: unknown[], startIndex: number): object;

    private findHeaderIndex(header: object): void;

    public fireEvent<T extends IListViewEvents = IListViewEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getTemplateTarget(): void;

    public hasListener<T extends IListViewEvents = IListViewEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends IListViewEvents = IListViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    public removeListener<T extends IListViewEvents = IListViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setHdWidths(): void;

    public un<T extends IListViewEvents = IListViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateIndexes(): void;

    private verifyInternalSize(): void;
  }

  interface IListViewConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    blockRefresh?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    cls?: string,
    columnResize?: boolean | object,
    columnSort?: boolean | object,
    columns?: unknown[],
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    deferEmptyText?: boolean,
    disabled?: boolean,
    disabledClass?: string,
    emptyText?: string,
    fieldLabel?: string,
    flex?: number,
    height?: number,
    hidden?: boolean,
    hideHeaders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    internalTpl?: string | unknown[],
    itemCls?: string,
    itemId?: string,
    itemSelector?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    loadingText?: string,
    margins?: object,
    multiSelect?: boolean,
    overClass?: string,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    reserveScrollOffset?: boolean,
    scrollOffset?: number,
    selectedClass?: string,
    simpleSelect?: boolean,
    singleSelect?: boolean,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    store?: Ext.data.Store<R>,
    style?: string,
    tabTip?: string,
    tpl?: string | unknown[],
    tplWriteMode?: string,
    trackOver?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IListViewEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: ListView, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: ListView) => boolean | void;
    beforeclick: (thisCmp: ListView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    beforedestroy: (thisCmp: ListView) => boolean | void;
    beforehide: (thisCmp: ListView) => boolean | void;
    beforerender: (thisCmp: ListView) => boolean | void;
    beforeselect: (thisCmp: ListView, node: HTMLElement, selections: unknown[]) => boolean | void;
    beforeshow: (thisCmp: ListView) => boolean | void;
    beforestaterestore: (thisCmp: ListView, state: object) => boolean | void;
    beforestatesave: (thisCmp: ListView, state: object) => boolean | void;
    click: (thisCmp: ListView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    containerclick: (thisCmp: ListView, e: Ext.EventObject) => boolean | void;
    containercontextmenu: (thisCmp: ListView, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: ListView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: ListView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    destroy: (thisCmp: ListView) => boolean | void;
    disable: (thisCmp: ListView) => boolean | void;
    enable: (thisCmp: ListView) => boolean | void;
    hide: (thisCmp: ListView) => boolean | void;
    mouseenter: (thisCmp: ListView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    mouseleave: (thisCmp: ListView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: ListView, x: number, y: number) => boolean | void;
    removed: (thisCmp: ListView, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ListView) => boolean | void;
    resize: (thisCmp: ListView, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    selectionchange: (thisCmp: ListView, selections: unknown[]) => boolean | void;
    show: (thisCmp: ListView) => boolean | void;
    staterestore: (thisCmp: ListView, state: object) => boolean | void;
    statesave: (thisCmp: ListView, state: object) => boolean | void;
  }
}
