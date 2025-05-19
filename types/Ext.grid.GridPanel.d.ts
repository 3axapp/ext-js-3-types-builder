declare namespace Ext.grid {
  class GridPanel extends Ext.Panel {

    public rendered: boolean;

    private viewReady: boolean;

    public constructor(config: IGridPanelConfig);

    public addListener<T extends IGridPanelEvents = IGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private applyState(state: object): void;

    public fireEvent<T extends IGridPanelEvents = IGridPanelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getColumnModel(): Ext.grid.ColumnModel;

    public getDragDropText(): string;

    public getGridEl(): Element;

    public getSelectionModel(): SelectionModel;

    private getState(): void;

    public getStore(): Ext.data.Store;

    public getView(): Ext.grid.GridView;

    public hasListener<T extends IGridPanelEvents = IGridPanelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    private initStateEvents(): void;

    public on<T extends IGridPanelEvents = IGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onClick(e: object): void;

    private onContextMenu(e: object, t: object): void;

    private onDblClick(e: object): void;

    private onDestroy(): void;

    private onMouseDown(e: object): void;

    private onRender(ct: object, position: object): void;

    private processEvent(name: object, e: object): void;

    public reconfigure(store: Ext.data.Store, colModel: Ext.grid.ColumnModel): void;

    public removeListener<T extends IGridPanelEvents = IGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private stopEditing(): void;

    public un<T extends IGridPanelEvents = IGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private walkCells(row: object, col: object, step: object, fn: object, scope: object): void;
  }

  interface IGridPanelConfig {
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
    listeners?: object,
    loadMask?: object,
    margins?: object,
    maskDisabled?: boolean,
    maxHeight?: number,
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

  interface IGridPanelEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    added: (thisCmp: GridPanel, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: GridPanel) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: GridPanel) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: GridPanel) => boolean | void;
    beforerender: (thisCmp: GridPanel) => boolean | void;
    beforeshow: (thisCmp: GridPanel) => boolean | void;
    beforestaterestore: (thisCmp: GridPanel, state: object) => boolean | void;
    beforestatesave: (thisCmp: GridPanel, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    bodyscroll: (scrollLeft: number, scrollTop: number) => boolean | void;
    cellclick: (thisCmp: GridPanel, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellcontextmenu: (thisCmp: GridPanel, rowIndex: number, cellIndex: number, e: Ext.EventObject) => boolean | void;
    celldblclick: (thisCmp: GridPanel, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellmousedown: (thisCmp: GridPanel, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    click: (e: Ext.EventObject) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    columnmove: (oldIndex: number, newIndex: number) => boolean | void;
    columnresize: (columnIndex: number, newSize: number) => boolean | void;
    containerclick: (thisCmp: GridPanel, e: Ext.EventObject) => boolean | void;
    containercontextmenu: (thisCmp: GridPanel, e: Ext.EventObject) => boolean | void;
    containerdblclick: (thisCmp: GridPanel, e: Ext.EventObject) => boolean | void;
    containermousedown: (thisCmp: GridPanel, e: Ext.EventObject) => boolean | void;
    contextmenu: (e: Ext.EventObject) => boolean | void;
    dblclick: (e: Ext.EventObject) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: GridPanel) => boolean | void;
    disable: (thisCmp: GridPanel) => boolean | void;
    enable: (thisCmp: GridPanel) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    groupchange: (thisCmp: GridPanel, groupField: string) => boolean | void;
    groupclick: (thisCmp: GridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupcontextmenu: (thisCmp: GridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupdblclick: (thisCmp: GridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupmousedown: (thisCmp: GridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    headerclick: (thisCmp: GridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headercontextmenu: (thisCmp: GridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headerdblclick: (thisCmp: GridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headermousedown: (thisCmp: GridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    hide: (thisCmp: GridPanel) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    keydown: (e: Ext.EventObject) => boolean | void;
    keypress: (e: Ext.EventObject) => boolean | void;
    mousedown: (e: Ext.EventObject) => boolean | void;
    mouseout: (e: Ext.EventObject) => boolean | void;
    mouseover: (e: Ext.EventObject) => boolean | void;
    mouseup: (e: Ext.EventObject) => boolean | void;
    move: (thisCmp: GridPanel, x: number, y: number) => boolean | void;
    reconfigure: (thisCmp: GridPanel, store: Ext.data.Store, colModel: Ext.grid.ColumnModel) => boolean | void;
    removed: (thisCmp: GridPanel, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: GridPanel) => boolean | void;
    resize: (thisCmp: GridPanel, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    rowbodyclick: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodycontextmenu: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodydblclick: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodymousedown: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowclick: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowcontextmenu: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowdblclick: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowmousedown: (thisCmp: GridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    show: (thisCmp: GridPanel) => boolean | void;
    sortchange: (thisCmp: GridPanel, sortInfo: object) => boolean | void;
    staterestore: (thisCmp: GridPanel, state: object) => boolean | void;
    statesave: (thisCmp: GridPanel, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
    viewready: (thisCmp: GridPanel) => boolean | void;
  }
}
