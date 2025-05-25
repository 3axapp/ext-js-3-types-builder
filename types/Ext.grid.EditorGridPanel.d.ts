declare namespace Ext.grid {
  class EditorGridPanel extends Ext.grid.GridPanel {

    private detectEdit: boolean;

    private isEditor: boolean;

    public constructor(config: IEditorGridPanelConfig);

    public addListener<T extends IEditorGridPanelEvents = IEditorGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IEditorGridPanelEvents = IEditorGridPanelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IEditorGridPanelEvents = IEditorGridPanelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    public on<T extends IEditorGridPanelEvents = IEditorGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAutoEditClick(e: object, t: object): void;

    private onCellDblClick(g: object, row: object, col: object): void;

    private onCheckClick(): void;

    private onEditComplete(ed: object, value: object, startValue: object): void;

    private onResize(): void;

    private postEditValue(value: object, originalValue: object, r: object, field: object): void;

    private preEditValue(r: object, field: object): void;

    public removeListener<T extends IEditorGridPanelEvents = IEditorGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setupCheckbox(field: object): void;

    public startEditing(rowIndex: number, colIndex: number): void;

    public stopEditing(cancel?: boolean): void;

    public un<T extends IEditorGridPanelEvents = IEditorGridPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IEditorGridPanelConfig {
    anchor?: string,
    animCollapse?: boolean,
    autoEncode?: boolean,
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
    clicksToEdit?: number,
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
    forceValidation?: boolean,
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
    store?: Ext.data.Store<R>,
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

  interface IEditorGridPanelEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    added: (thisCmp: EditorGridPanel, ownerCt: Ext.Container, index: number) => boolean | void;
    afteredit: (e: object) => boolean | void;
    afterrender: (thisCmp: EditorGridPanel) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: EditorGridPanel) => boolean | void;
    beforeedit: (e: object) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: EditorGridPanel) => boolean | void;
    beforerender: (thisCmp: EditorGridPanel) => boolean | void;
    beforeshow: (thisCmp: EditorGridPanel) => boolean | void;
    beforestaterestore: (thisCmp: EditorGridPanel, state: object) => boolean | void;
    beforestatesave: (thisCmp: EditorGridPanel, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    bodyscroll: (scrollLeft: number, scrollTop: number) => boolean | void;
    cellclick: (thisCmp: EditorGridPanel, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellcontextmenu: (thisCmp: EditorGridPanel, rowIndex: number, cellIndex: number, e: Ext.EventObject) => boolean | void;
    celldblclick: (thisCmp: EditorGridPanel, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellmousedown: (thisCmp: EditorGridPanel, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    click: (e: Ext.EventObject) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    columnmove: (oldIndex: number, newIndex: number) => boolean | void;
    columnresize: (columnIndex: number, newSize: number) => boolean | void;
    containerclick: (thisCmp: EditorGridPanel, e: Ext.EventObject) => boolean | void;
    containercontextmenu: (thisCmp: EditorGridPanel, e: Ext.EventObject) => boolean | void;
    containerdblclick: (thisCmp: EditorGridPanel, e: Ext.EventObject) => boolean | void;
    containermousedown: (thisCmp: EditorGridPanel, e: Ext.EventObject) => boolean | void;
    contextmenu: (e: Ext.EventObject) => boolean | void;
    dblclick: (e: Ext.EventObject) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: EditorGridPanel) => boolean | void;
    disable: (thisCmp: EditorGridPanel) => boolean | void;
    enable: (thisCmp: EditorGridPanel) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    groupchange: (thisCmp: EditorGridPanel, groupField: string) => boolean | void;
    groupclick: (thisCmp: EditorGridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupcontextmenu: (thisCmp: EditorGridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupdblclick: (thisCmp: EditorGridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupmousedown: (thisCmp: EditorGridPanel, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    headerclick: (thisCmp: EditorGridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headercontextmenu: (thisCmp: EditorGridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headerdblclick: (thisCmp: EditorGridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headermousedown: (thisCmp: EditorGridPanel, columnIndex: number, e: Ext.EventObject) => boolean | void;
    hide: (thisCmp: EditorGridPanel) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    keydown: (e: Ext.EventObject) => boolean | void;
    keypress: (e: Ext.EventObject) => boolean | void;
    mousedown: (e: Ext.EventObject) => boolean | void;
    mouseout: (e: Ext.EventObject) => boolean | void;
    mouseover: (e: Ext.EventObject) => boolean | void;
    mouseup: (e: Ext.EventObject) => boolean | void;
    move: (thisCmp: EditorGridPanel, x: number, y: number) => boolean | void;
    reconfigure: (thisCmp: EditorGridPanel, store: Ext.data.Store<R>, colModel: Ext.grid.ColumnModel) => boolean | void;
    removed: (thisCmp: EditorGridPanel, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: EditorGridPanel) => boolean | void;
    resize: (thisCmp: EditorGridPanel, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    rowbodyclick: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodycontextmenu: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodydblclick: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodymousedown: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowclick: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowcontextmenu: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowdblclick: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowmousedown: (thisCmp: EditorGridPanel, rowIndex: number, e: Ext.EventObject) => boolean | void;
    show: (thisCmp: EditorGridPanel) => boolean | void;
    sortchange: (thisCmp: EditorGridPanel, sortInfo: object) => boolean | void;
    staterestore: (thisCmp: EditorGridPanel, state: object) => boolean | void;
    statesave: (thisCmp: EditorGridPanel, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
    validateedit: (e: object) => boolean | void;
    viewready: (thisCmp: EditorGridPanel) => boolean | void;
  }
}
