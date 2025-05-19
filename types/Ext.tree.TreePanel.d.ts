declare namespace Ext.tree {
  class TreePanel extends Ext.Panel {

    private animate: object;

    public dragZone: Ext.tree.TreeDragZone;

    public dropZone: Ext.tree.TreeDropZone;

    private enableDD: boolean;

    private hlDrop: object;

    private lines: boolean;

    private pathSeparator: string;

    public root: Ext.tree.TreeNode;

    private rootVisible: boolean;

    public constructor(config: ITreePanelConfig);

    public addListener<T extends ITreePanelEvents = ITreePanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private beforeDestroy(): void;

    private clearInnerCt(): void;

    public collapseAll(): void;

    private destroyRoot(): void;

    public expandAll(): void;

    public expandPath(path: string, attr?: string, callback?: Function): void;

    public fireEvent<T extends ITreePanelEvents = ITreePanelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getChecked(attribute?: string, startNode?: TreeNode): unknown[];

    public getLoader(): Ext.tree.TreeLoader;

    public getNodeById(id: string): Node;

    public getRootNode(): Node;

    public getSelectionModel(): TreeSelectionModel;

    public getTreeEl(): Ext.Element;

    public hasListener<T extends ITreePanelEvents = ITreePanelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    public on<T extends ITreePanelEvents = ITreePanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(ct: object, position: object): void;

    private proxyNodeEvent(ename: object, a1: object, a2: object, a3: object, a4: object, a5: object, a6: object): void;

    private registerNode(node: object): void;

    public removeListener<T extends ITreePanelEvents = ITreePanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private renderRoot(): void;

    private restrictExpand(node: object): void;

    public selectPath(path: string, attr?: string, callback?: Function): void;

    public setRootNode(node: Node): Node;

    private toString(): void;

    public un<T extends ITreePanelEvents = ITreePanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private unregisterNode(node: object): void;
  }

  interface ITreePanelConfig {
    anchor?: string,
    animCollapse?: boolean,
    animate?: boolean,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    baseCls?: string,
    bbar?: object | unknown[],
    bbarCfg?: object,
    bodyBorder?: boolean,
    bodyCfg?: object,
    bodyCssClass?: string | object | Function,
    bodyStyle?: string | object | Function,
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
    collapseFirst?: boolean,
    collapsed?: boolean,
    collapsedCls?: string,
    collapsible?: boolean,
    containerScroll?: boolean,
    ctCls?: string,
    ddAppendOnly?: boolean,
    ddGroup?: string,
    ddScroll?: boolean,
    disabled?: boolean,
    dragConfig?: object,
    draggable?: boolean | object,
    dropConfig?: object,
    enableDD?: boolean,
    enableDrag?: boolean,
    enableDrop?: boolean,
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
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    hlColor?: string,
    hlDrop?: boolean,
    iconCls?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    keys?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    lines?: boolean,
    listeners?: object,
    loader?: Ext.tree.TreeLoader,
    margins?: object,
    maskDisabled?: boolean,
    minButtonWidth?: number,
    overCls?: string,
    padding?: number | string,
    pageX?: number,
    pageY?: number,
    pathSeparator?: string,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    requestMethod?: string,
    resizeEvent?: string,
    root?: Ext.tree.TreeNode,
    rootVisible?: boolean,
    selModel?: object,
    shadow?: boolean | string,
    shadowOffset?: number,
    shim?: boolean,
    singleExpand?: boolean,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tbar?: object | unknown[],
    tbarCfg?: object,
    title?: string,
    titleCollapse?: boolean,
    toolTemplate?: Ext.Template | Ext.XTemplate,
    tools?: unknown[],
    trackMouseOver?: boolean,
    unstyled?: boolean,
    useArrows?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ITreePanelEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    added: (thisCmp: TreePanel, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: TreePanel, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: TreePanel) => boolean | void;
    append: (tree: Tree, parent: Node, node: Node, index: number) => boolean | void;
    beforeappend: (tree: Tree, parent: Node, node: Node) => boolean | void;
    beforechildrenrendered: (node: Node) => boolean | void;
    beforeclick: (node: Node, e: Ext.EventObject) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforecollapsenode: (node: Node, deep: boolean, anim: boolean) => boolean | void;
    beforedblclick: (node: Node, e: Ext.EventObject) => boolean | void;
    beforedestroy: (thisCmp: TreePanel) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforeexpandnode: (node: Node, deep: boolean, anim: boolean) => boolean | void;
    beforehide: (thisCmp: TreePanel) => boolean | void;
    beforeinsert: (tree: Tree, parent: Node, node: Node, refNode: Node) => boolean | void;
    beforeload: (node: Node) => boolean | void;
    beforemovenode: (tree: Tree, node: Node, oldParent: Node, newParent: Node, index: number) => boolean | void;
    beforenodedrop: (dropEvent: object) => boolean | void;
    beforeremove: (tree: Tree, parent: Node, node: Node) => boolean | void;
    beforerender: (thisCmp: TreePanel) => boolean | void;
    beforeshow: (thisCmp: TreePanel) => boolean | void;
    beforestaterestore: (thisCmp: TreePanel, state: object) => boolean | void;
    beforestatesave: (thisCmp: TreePanel, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    checkchange: (thisCmp: TreePanel, checked: boolean) => boolean | void;
    click: (node: Node, e: Ext.EventObject) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    collapsenode: (node: Node) => boolean | void;
    containerclick: (thisCmp: TreePanel, e: Ext.EventObject) => boolean | void;
    containercontextmenu: (thisCmp: TreePanel, e: Ext.EventObject) => boolean | void;
    containerdblclick: (thisCmp: TreePanel, e: Ext.EventObject) => boolean | void;
    contextmenu: (node: Node, e: Ext.EventObject) => boolean | void;
    dblclick: (node: Node, e: Ext.EventObject) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: TreePanel) => boolean | void;
    disable: (thisCmp: TreePanel) => boolean | void;
    disabledchange: (node: Node, disabled: boolean) => boolean | void;
    dragdrop: (thisCmp: TreePanel, node: Ext.tree.TreeNode, dd: DD, e: event) => boolean | void;
    enable: (thisCmp: TreePanel) => boolean | void;
    enddrag: (thisCmp: TreePanel, node: Ext.tree.TreeNode, e: event) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    expandnode: (node: Node) => boolean | void;
    hide: (thisCmp: TreePanel) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    insert: (tree: Tree, parent: Node, node: Node, refNode: Node) => boolean | void;
    load: (node: Node) => boolean | void;
    move: (thisCmp: TreePanel, x: number, y: number) => boolean | void;
    movenode: (tree: Tree, node: Node, oldParent: Node, newParent: Node, index: number) => boolean | void;
    nodedragover: (dragOverEvent: object) => boolean | void;
    nodedrop: (dropEvent: object) => boolean | void;
    remove: (tree: Tree, parent: Node, node: Node) => boolean | void;
    removed: (thisCmp: TreePanel, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TreePanel) => boolean | void;
    resize: (thisCmp: TreePanel, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: TreePanel) => boolean | void;
    startdrag: (thisCmp: TreePanel, node: Ext.tree.TreeNode, e: event) => boolean | void;
    staterestore: (thisCmp: TreePanel, state: object) => boolean | void;
    statesave: (thisCmp: TreePanel, state: object) => boolean | void;
    textchange: (node: Node, text: string, oldText: string) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
