declare namespace Ext {
  class DataView extends Ext.BoxComponent {

    private last: boolean;

    public constructor(config: IDataViewConfig);

    public addListener<T extends IDataViewEvents = IDataViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    public bindStore(store: Store): void;

    private bufferRender(records: object, index: object): void;

    public clearSelections(suppressEvent?: boolean): void;

    public collectData(records: unknown[], startIndex: number): unknown[];

    public deselect(node: HTMLElement | number | Ext.data.Record<R>): void;

    private doMultiSelection(item: object, index: object, e: object): void;

    private doSingleSelection(item: object, index: object, e: object): void;

    public findItemFromChild(node: HTMLElement): HTMLElement;

    public fireEvent<T extends IDataViewEvents = IDataViewEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getNode(nodeInfo: HTMLElement | string | number | Ext.data.Record): HTMLElement;

    public getNodes(start?: number, end?: number): unknown[];

    public getRecord(node: HTMLElement): Ext.data.Record<R>;

    public getRecords(nodes: unknown[]): unknown[];

    public getSelectedIndexes(): unknown[];

    public getSelectedNodes(): unknown[];

    public getSelectedRecords(): unknown[];

    public getSelectionCount(): number;

    public getStore(): Ext.data.Store<R>;

    private getTemplateTarget(): void;

    public hasListener<T extends IDataViewEvents = IDataViewEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public indexOf(nodeInfo: HTMLElement | string | number | Ext.data.Record<R>): number;

    private initComponent(): void;

    public isSelected(node: HTMLElement | number | Ext.data.Record): boolean;

    public on<T extends IDataViewEvents = IDataViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAdd(ds: object, records: object, index: object): void;

    private onBeforeLoad(): void;

    private onClick(e: object): void;

    private onContainerClick(e: object): void;

    private onContextMenu(e: object): void;

    private onDataChanged(): void;

    private onDblClick(e: object): void;

    private onDestroy(): void;

    private onItemClick(item: object, index: object, e: object): void;

    private onMouseOut(e: object): void;

    private onMouseOver(e: object): void;

    private onRemove(ds: object, record: object, index: object): void;

    private onUpdate(ds: object, record: object): void;

    public prepareData(data: unknown[] | object, recordIndex: number, record: Ext.data.Record<R>): unknown[] | object;

    public refresh(): void;

    public refreshNode(index: number): void;

    public removeListener<T extends IDataViewEvents = IDataViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public select(nodeInfo: unknown[] | HTMLElement | string | number | Ext.data.Record, keepExisting?: boolean, suppressEvent?: boolean): void;

    public selectRange(start: number, end: number, keepExisting?: boolean): void;

    public setStore(store: Store): void;

    public un<T extends IDataViewEvents = IDataViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateIndexes(startIndex: object, endIndex: object): void;
  }

  interface IDataViewConfig {
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
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
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

  interface IDataViewEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: DataView, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: DataView) => boolean | void;
    beforeclick: (thisCmp: DataView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    beforedestroy: (thisCmp: DataView) => boolean | void;
    beforehide: (thisCmp: DataView) => boolean | void;
    beforerender: (thisCmp: DataView) => boolean | void;
    beforeselect: (thisCmp: DataView, node: HTMLElement, selections: unknown[]) => boolean | void;
    beforeshow: (thisCmp: DataView) => boolean | void;
    beforestaterestore: (thisCmp: DataView, state: object) => boolean | void;
    beforestatesave: (thisCmp: DataView, state: object) => boolean | void;
    click: (thisCmp: DataView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    containerclick: (thisCmp: DataView, e: Ext.EventObject) => boolean | void;
    containercontextmenu: (thisCmp: DataView, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: DataView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: DataView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    destroy: (thisCmp: DataView) => boolean | void;
    disable: (thisCmp: DataView) => boolean | void;
    enable: (thisCmp: DataView) => boolean | void;
    hide: (thisCmp: DataView) => boolean | void;
    mouseenter: (thisCmp: DataView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    mouseleave: (thisCmp: DataView, index: number, node: HTMLElement, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: DataView, x: number, y: number) => boolean | void;
    removed: (thisCmp: DataView, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: DataView) => boolean | void;
    resize: (thisCmp: DataView, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    selectionchange: (thisCmp: DataView, selections: unknown[]) => boolean | void;
    show: (thisCmp: DataView) => boolean | void;
    staterestore: (thisCmp: DataView, state: object) => boolean | void;
    statesave: (thisCmp: DataView, state: object) => boolean | void;
  }
}
