declare namespace Ext.slider {
  class Tip extends Ext.Tip {

    private offsets: object;

    public constructor(config: ITipConfig);

    public addListener<T extends ITipEvents = ITipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ITipEvents = ITipEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getText(thumb: Ext.slider.Thumb): string;

    public hasListener<T extends ITipEvents = ITipEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private init(slider: object): void;

    public on<T extends ITipEvents = ITipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onSlide(slider: Ext.slider.MultiSlider, e: Ext.EventObject, thumb: Ext.slider.Thumb): void;

    public removeListener<T extends ITipEvents = ITipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ITipEvents = ITipEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITipConfig {
    activeItem?: string | number,
    allowDomMove?: boolean,
    anchor?: string,
    animCollapse?: boolean,
    applyTo?: unknown,
    autoDestroy?: boolean,
    autoHeight?: boolean,
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
    disabled?: boolean,
    disabledClass?: string,
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
    tpl?: unknown,
    tplWriteMode?: string,
    unstyled?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ITipEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    add: (thisCmp: Tip, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: Tip, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: Tip, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: Tip) => boolean | void;
    beforeadd: (thisCmp: Tip, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: Tip) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: Tip) => boolean | void;
    beforeremove: (thisCmp: Tip, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: Tip) => boolean | void;
    beforeshow: (thisCmp: Tip) => boolean | void;
    beforestaterestore: (thisCmp: Tip, state: object) => boolean | void;
    beforestatesave: (thisCmp: Tip, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: Tip) => boolean | void;
    disable: (thisCmp: Tip) => boolean | void;
    enable: (thisCmp: Tip) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: Tip) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: Tip, x: number, y: number) => boolean | void;
    remove: (thisCmp: Tip, component: Ext.Component) => boolean | void;
    removed: (thisCmp: Tip, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Tip) => boolean | void;
    resize: (thisCmp: Tip, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Tip) => boolean | void;
    staterestore: (thisCmp: Tip, state: object) => boolean | void;
    statesave: (thisCmp: Tip, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
