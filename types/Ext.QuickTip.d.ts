declare namespace Ext {
  class QuickTip extends Ext.ToolTip {

    private tagConfig: object;

    public constructor(config: IQuickTipConfig);

    public addListener<T extends IQuickTipEvents = IQuickTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public cancelShow(el: string | HTMLElement | Element): void;

    public fireEvent<T extends IQuickTipEvents = IQuickTipEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getTipCfg(e: object): void;

    public hasListener<T extends IQuickTipEvents = IQuickTipEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hide(): void;

    private initComponent(): void;

    public on<T extends IQuickTipEvents = IQuickTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onTargetOut(e: object): void;

    private onTargetOver(e: object): void;

    public register(config: object): void;

    public removeListener<T extends IQuickTipEvents = IQuickTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public showAt(xy: object): void;

    public un<T extends IQuickTipEvents = IQuickTipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unregister(el: string | HTMLElement | Element): void;
  }

  interface IQuickTipConfig {
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
    interceptTitles?: boolean,
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

  interface IQuickTipEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    add: (thisCmp: QuickTip, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: QuickTip, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: QuickTip, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: QuickTip) => boolean | void;
    beforeadd: (thisCmp: QuickTip, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: QuickTip) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: QuickTip) => boolean | void;
    beforeremove: (thisCmp: QuickTip, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: QuickTip) => boolean | void;
    beforeshow: (thisCmp: QuickTip) => boolean | void;
    beforestaterestore: (thisCmp: QuickTip, state: object) => boolean | void;
    beforestatesave: (thisCmp: QuickTip, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: QuickTip) => boolean | void;
    disable: (thisCmp: QuickTip) => boolean | void;
    enable: (thisCmp: QuickTip) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: QuickTip) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: QuickTip, x: number, y: number) => boolean | void;
    remove: (thisCmp: QuickTip, component: Ext.Component) => boolean | void;
    removed: (thisCmp: QuickTip, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: QuickTip) => boolean | void;
    resize: (thisCmp: QuickTip, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: QuickTip) => boolean | void;
    staterestore: (thisCmp: QuickTip, state: object) => boolean | void;
    statesave: (thisCmp: QuickTip, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
