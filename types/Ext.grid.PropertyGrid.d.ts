declare namespace Ext.grid {
  class PropertyGrid extends Ext.grid.EditorGridPanel {

    public constructor(config: IPropertyGridConfig);

    public addListener<T extends IPropertyGridEvents = IPropertyGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    public fireEvent<T extends IPropertyGridEvents = IPropertyGridEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getSource(): object;

    public hasListener<T extends IPropertyGridEvents = IPropertyGridEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends IPropertyGridEvents = IPropertyGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(): void;

    public removeListener<T extends IPropertyGridEvents = IPropertyGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public removeProperty(prop: string): void;

    public setProperty(prop: string, value: unknown, create?: boolean): void;

    public setSource(source: object): void;

    public un<T extends IPropertyGridEvents = IPropertyGridEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IPropertyGridConfig {
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
    collapseFirst?: boolean,
    collapsed?: boolean,
    collapsedCls?: string,
    collapsible?: boolean,
    columnLines?: boolean,
    ctCls?: string,
    customEditors?: object,
    customRenderers?: object,
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
    propertyNames?: object,
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
    source?: object,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
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

  interface IPropertyGridEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    added: (thisCmp: PropertyGrid, ownerCt: Ext.Container, index: number) => boolean | void;
    afteredit: (e: object) => boolean | void;
    afterrender: (thisCmp: PropertyGrid) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: PropertyGrid) => boolean | void;
    beforeedit: (e: object) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: PropertyGrid) => boolean | void;
    beforepropertychange: (source: object, recordId: string, value: unknown, oldValue: unknown) => boolean | void;
    beforerender: (thisCmp: PropertyGrid) => boolean | void;
    beforeshow: (thisCmp: PropertyGrid) => boolean | void;
    beforestaterestore: (thisCmp: PropertyGrid, state: object) => boolean | void;
    beforestatesave: (thisCmp: PropertyGrid, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    bodyscroll: (scrollLeft: number, scrollTop: number) => boolean | void;
    cellclick: (thisCmp: PropertyGrid, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellcontextmenu: (thisCmp: PropertyGrid, rowIndex: number, cellIndex: number, e: Ext.EventObject) => boolean | void;
    celldblclick: (thisCmp: PropertyGrid, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    cellmousedown: (thisCmp: PropertyGrid, rowIndex: number, columnIndex: number, e: Ext.EventObject) => boolean | void;
    click: (e: Ext.EventObject) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    columnmove: (oldIndex: number, newIndex: number) => boolean | void;
    columnresize: (columnIndex: number, newSize: number) => boolean | void;
    containerclick: (thisCmp: PropertyGrid, e: Ext.EventObject) => boolean | void;
    containercontextmenu: (thisCmp: PropertyGrid, e: Ext.EventObject) => boolean | void;
    containerdblclick: (thisCmp: PropertyGrid, e: Ext.EventObject) => boolean | void;
    containermousedown: (thisCmp: PropertyGrid, e: Ext.EventObject) => boolean | void;
    contextmenu: (e: Ext.EventObject) => boolean | void;
    dblclick: (e: Ext.EventObject) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: PropertyGrid) => boolean | void;
    disable: (thisCmp: PropertyGrid) => boolean | void;
    enable: (thisCmp: PropertyGrid) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    groupchange: (thisCmp: PropertyGrid, groupField: string) => boolean | void;
    groupclick: (thisCmp: PropertyGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupcontextmenu: (thisCmp: PropertyGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupdblclick: (thisCmp: PropertyGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    groupmousedown: (thisCmp: PropertyGrid, groupField: string, groupValue: string, e: Ext.EventObject) => boolean | void;
    headerclick: (thisCmp: PropertyGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headercontextmenu: (thisCmp: PropertyGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headerdblclick: (thisCmp: PropertyGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    headermousedown: (thisCmp: PropertyGrid, columnIndex: number, e: Ext.EventObject) => boolean | void;
    hide: (thisCmp: PropertyGrid) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    keydown: (e: Ext.EventObject) => boolean | void;
    keypress: (e: Ext.EventObject) => boolean | void;
    mousedown: (e: Ext.EventObject) => boolean | void;
    mouseout: (e: Ext.EventObject) => boolean | void;
    mouseover: (e: Ext.EventObject) => boolean | void;
    mouseup: (e: Ext.EventObject) => boolean | void;
    move: (thisCmp: PropertyGrid, x: number, y: number) => boolean | void;
    propertychange: (source: object, recordId: string, value: unknown, oldValue: unknown) => boolean | void;
    reconfigure: (thisCmp: PropertyGrid, store: Ext.data.Store, colModel: Ext.grid.ColumnModel) => boolean | void;
    removed: (thisCmp: PropertyGrid, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: PropertyGrid) => boolean | void;
    resize: (thisCmp: PropertyGrid, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    rowbodyclick: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodycontextmenu: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodydblclick: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowbodymousedown: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowclick: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowcontextmenu: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowdblclick: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    rowmousedown: (thisCmp: PropertyGrid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    show: (thisCmp: PropertyGrid) => boolean | void;
    sortchange: (thisCmp: PropertyGrid, sortInfo: object) => boolean | void;
    staterestore: (thisCmp: PropertyGrid, state: object) => boolean | void;
    statesave: (thisCmp: PropertyGrid, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
    validateedit: (e: object) => boolean | void;
    viewready: (thisCmp: PropertyGrid) => boolean | void;
  }
}
