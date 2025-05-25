declare namespace Ext {
  class ToolTip extends Ext.Tip {

    private constrainPosition: boolean;

    private targetCounter: number;

    public triggerElement: DOMElement;

    public constructor(config: IToolTipConfig);

    public addListener<T extends IToolTipEvents = IToolTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private adjustPosition(x: object, y: object): void;

    private afterRender(): void;

    private beforeDestroy(): void;

    private clearTimer(name: object): void;

    private clearTimers(): void;

    private delayHide(): void;

    private delayShow(): void;

    private doEnable(): void;

    public fireEvent<T extends IToolTipEvents = IToolTipEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getAnchorAlign(): void;

    private getAnchorPosition(): void;

    private getMouseOffset(): void;

    private getOffsets(): void;

    private getTargetXY(): void;

    public hasListener<T extends IToolTipEvents = IToolTipEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hide(): void;

    private initComponent(): void;

    public initTarget(t: unknown): void;

    public on<T extends IToolTipEvents = IToolTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onDisable(): void;

    private onDocMouseDown(e: object): void;

    private onHide(): void;

    private onMouseMove(e: object): void;

    private onRender(ct: object, position: object): void;

    private onShow(): void;

    private onTargetOut(e: object): void;

    private onTargetOver(e: object): void;

    public removeListener<T extends IToolTipEvents = IToolTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setPagePosition(x: object, y: object): this;

    public show(): void;

    public showAt(xy: object): void;

    private syncAnchor(): void;

    public un<T extends IToolTipEvents = IToolTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IToolTipConfig {
    activeItem?: string | number,
    allowDomMove?: boolean,
    anchor?: string,
    anchorOffset?: number,
    anchorToTarget?: boolean,
    animCollapse?: boolean,
    applyTo?: unknown,
    autoDestroy?: boolean,
    autoHeight?: boolean,
    autoHide?: boolean,
    autoLoad?: object | string | Function,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
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
    bufferResize?: boolean | number,
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
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultAlign?: string,
    defaultType?: string,
    defaults?: Object|Function,
    delegate?: string,
    disabled?: boolean,
    disabledClass?: string,
    dismissDelay?: number,
    draggable?: boolean | object,
    elements?: string,
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
    hideBorders?: boolean,
    hideCollapseTool?: boolean,
    hideDelay?: number,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    iconCls?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    items?: object | unknown[],
    keys?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    layout?: string | object,
    layoutConfig?: object,
    listeners?: object,
    margins?: object,
    maskDisabled?: boolean,
    maxWidth?: number,
    minButtonWidth?: number,
    minWidth?: number,
    monitorResize?: boolean,
    mouseOffset?: unknown[],
    overCls?: string,
    padding?: number | string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    preventBodyReset?: boolean,
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    resizeEvent?: string,
    shadow?: boolean | string,
    shadowOffset?: number,
    shim?: boolean,
    showDelay?: number,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    target?: unknown,
    tbar?: object | unknown[],
    tbarCfg?: object,
    title?: string,
    titleCollapse?: boolean,
    toolTemplate?: Ext.Template | Ext.XTemplate,
    tools?: unknown[],
    tpl?: unknown,
    tplWriteMode?: string,
    trackMouse?: boolean,
    unstyled?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IToolTipEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    add: (thisCmp: ToolTip, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: ToolTip, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: ToolTip, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: ToolTip) => boolean | void;
    beforeadd: (thisCmp: ToolTip, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: ToolTip) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: ToolTip) => boolean | void;
    beforeremove: (thisCmp: ToolTip, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: ToolTip) => boolean | void;
    beforeshow: (thisCmp: ToolTip) => boolean | void;
    beforestaterestore: (thisCmp: ToolTip, state: object) => boolean | void;
    beforestatesave: (thisCmp: ToolTip, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: ToolTip) => boolean | void;
    disable: (thisCmp: ToolTip) => boolean | void;
    enable: (thisCmp: ToolTip) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: ToolTip) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: ToolTip, x: number, y: number) => boolean | void;
    remove: (thisCmp: ToolTip, component: Ext.Component) => boolean | void;
    removed: (thisCmp: ToolTip, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ToolTip) => boolean | void;
    resize: (thisCmp: ToolTip, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: ToolTip) => boolean | void;
    staterestore: (thisCmp: ToolTip, state: object) => boolean | void;
    statesave: (thisCmp: ToolTip, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
