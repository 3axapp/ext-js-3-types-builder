declare namespace Ext.grid {
  class PivotGrid extends Ext.grid.GridPanel {

    public leftAxis: Ext.grid.PivotAxis;

    public topAxis: Ext.grid.PivotAxis;

    public constructor(config: IPivotGridConfig);

    public addListener<T extends IPivotGridEvents = IPivotGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private extractData(): unknown[];

    public fireEvent<T extends IPivotGridEvents = IPivotGridEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getAggregator(): Function;

    public getView(): Ext.grid.PivotGridView;

    public hasListener<T extends IPivotGridEvents = IPivotGridEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initAxes(): void;

    private initComponent(): void;

    public on<T extends IPivotGridEvents = IPivotGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IPivotGridEvents = IPivotGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setAggregator(aggregator: string | Function): void;

    public setLeftAxis(axis: Ext.grid.PivotAxis, refresh: boolean): void;

    public setMeasure(measure: string): void;

    public setTopAxis(axis: Ext.grid.PivotAxis, refresh: boolean): void;

    public un<T extends IPivotGridEvents = IPivotGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IPivotGridConfig {
    aggregator?: String|Function,
    anchor?: string,
    animCollapse?: boolean,
    autoExpandColumn?: string,
    autoExpandMax?: number,
    autoExpandMin?: number,
    autoHeight?: boolean,
    autoShow?: boolean,
    baseCls?: string,
    bbar?: object | unknown[],
    bbarCfg?: object,
    bodyCfg?: object,
    bodyCssClass?: string | object | Function,
    border?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    buttonAlign?: string,
    buttons?: unknown[],
    bwrapCfg?: object,
    clearCls?: string,
    closable?: boolean,
    cls?: string,
    cm?: object,
    colModel?: object,
    collapseFirst?: boolean,
    collapsed?: boolean,
    collapsedCls?: string,
    collapsible?: boolean,
    columnLines?: boolean,
    columns?: unknown[],
    ctCls?: string,
    data?: unknown,
    ddGroup?: string,
    ddText?: string,
    deferRowRender?: boolean,
    disableSelection?: boolean,
    disabled?: boolean,
    dragCell?: boolean,
    draggable?: boolean | object,
    enableColumnHide?: boolean,
    enableColumnMove?: boolean,
    enableColumnResize?: boolean,
    enableDragDrop?: boolean,
    enableHdMenu?: boolean,
    fbar?: object | unknown[],
    fieldLabel?: string,
    flex?: number,
    floating?: unknown,
    footer?: boolean,
    footerCfg?: object,
    forceLayout?: boolean,
    frame?: boolean,
    header?: boolean,
    headerAsText?: boolean,
    headerCfg?: object,
    height?: number,
    hidden?: boolean,
    hideCollapseTool?: boolean,
    hideHeaders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    iconCls?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    keys?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    leftAxis?: Array|Ext.grid.PivotAxis,
    listeners?: object,
    loadMask?: object,
    margins?: object,
    maskDisabled?: boolean,
    maxHeight?: number,
    measure?: string,
    minButtonWidth?: number,
    minColumnWidth?: number,
    overCls?: string,
    padding?: number | string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    renderer?: Function,
    resizeEvent?: string,
    selModel?: object,
    shadow?: boolean | string,
    shadowOffset?: number,
    shim?: boolean,
    sm?: object,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    store?: Ext.data.Store,
    stripeRows?: boolean,
    style?: string,
    tabTip?: string,
    tbar?: object | unknown[],
    tbarCfg?: object,
    title?: string,
    titleCollapse?: boolean,
    toolTemplate?: Ext.Template | Ext.XTemplate,
    tools?: unknown[],
    topAxis?: Array|Ext.grid.PivotAxis,
    tpl?: unknown,
    tplWriteMode?: string,
    trackMouseOver?: boolean,
    unstyled?: boolean,
    view?: object,
    viewConfig?: object,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IPivotGridEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    added: (thisCmp: PivotGrid, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: PivotGrid) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: PivotGrid) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: PivotGrid) => boolean | void;
    beforerender: (thisCmp: PivotGrid) => boolean | void;
    beforeshow: (thisCmp: PivotGrid) => boolean | void;
    beforestaterestore: (thisCmp: PivotGrid, state: object) => boolean | void;
    beforestatesave: (thisCmp: PivotGrid, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    bodyscroll: (scrollLeft: number, scrollTop: number) => boolean | void;
    cellclick: (thisCmp: PivotGrid, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellcontextmenu: (thisCmp: PivotGrid, rowIndex: number, cellIndex: number, e: Ext.EventObject) => boolean | void;
    celldblclick: (thisCmp: PivotGrid, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellmousedown: (thisCmp: PivotGrid, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    click: (e: Ext.EventObject) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    columnmove: (oldIndex: number, newIndex: number) => boolean | void;
    columnresize: (columnIndex: number, newSize: number) => boolean | void;
    containerclick: (thisCmp: PivotGrid, e: Ext.EventObject) => boolean | void;
    containercontextmenu: (thisCmp: PivotGrid, e: Ext.EventObject) => boolean | void;
    containerdblclick: (thisCmp: PivotGrid, e: Ext.EventObject) => boolean | void;
    containermousedown: (thisCmp: PivotGrid, e: Ext.EventObject) => boolean | void;
    contextmenu: (e: Ext.EventObject) => boolean | void;
    dblclick: (e: Ext.EventObject) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: PivotGrid) => boolean | void;
    disable: (thisCmp: PivotGrid) => boolean | void;
    enable: (thisCmp: PivotGrid) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    groupchange: (thisCmp: PivotGrid, groupField: string) => boolean | void;
    groupclick: (thisCmp: PivotGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupcontextmenu: (thisCmp: PivotGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupdblclick: (thisCmp: PivotGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupmousedown: (thisCmp: PivotGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    headerclick: (thisCmp: PivotGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headercontextmenu: (thisCmp: PivotGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headerdblclick: (thisCmp: PivotGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headermousedown: (thisCmp: PivotGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    hide: (thisCmp: PivotGrid) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    keydown: (e: Ext.EventObject) => boolean | void;
    keypress: (e: Ext.EventObject) => boolean | void;
    mousedown: (e: Ext.EventObject) => boolean | void;
    mouseout: (e: Ext.EventObject) => boolean | void;
    mouseover: (e: Ext.EventObject) => boolean | void;
    mouseup: (e: Ext.EventObject) => boolean | void;
    move: (thisCmp: PivotGrid, x: number, y: number) => boolean | void;
    reconfigure: (thisCmp: PivotGrid, store: Ext.data.Store, colModel: Ext.grid.ColumnModel) => boolean | void;
    removed: (thisCmp: PivotGrid, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: PivotGrid) => boolean | void;
    resize: (thisCmp: PivotGrid, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    rowbodyclick: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodycontextmenu: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodydblclick: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodymousedown: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowclick: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowcontextmenu: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowdblclick: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowmousedown: (thisCmp: PivotGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    show: (thisCmp: PivotGrid) => boolean | void;
    sortchange: (thisCmp: PivotGrid, sortInfo: object) => boolean | void;
    staterestore: (thisCmp: PivotGrid, state: object) => boolean | void;
    statesave: (thisCmp: PivotGrid, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
    viewready: (thisCmp: PivotGrid) => boolean | void;
  }
}
