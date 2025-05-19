declare namespace Ext {
  class ButtonGroup extends Ext.Panel {

    private internalDefaults: object;

    public constructor(config: IButtonGroupConfig);

    public addListener<T extends IButtonGroupEvents = IButtonGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private applyDefaults(c: object): void;

    public fireEvent<T extends IButtonGroupEvents = IButtonGroupEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IButtonGroupEvents = IButtonGroupEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends IButtonGroupEvents = IButtonGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAfterLayout(): void;

    public removeListener<T extends IButtonGroupEvents = IButtonGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IButtonGroupEvents = IButtonGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IButtonGroupConfig {
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
    columns?: number,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
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
    layout?: string,
    layoutConfig?: object,
    listeners?: object,
    margins?: object,
    maskDisabled?: boolean,
    minButtonWidth?: number,
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
    tpl?: unknown,
    tplWriteMode?: string,
    unstyled?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IButtonGroupEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    add: (thisCmp: ButtonGroup, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: ButtonGroup, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: ButtonGroup, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: ButtonGroup) => boolean | void;
    beforeadd: (thisCmp: ButtonGroup, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: ButtonGroup) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: ButtonGroup) => boolean | void;
    beforeremove: (thisCmp: ButtonGroup, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: ButtonGroup) => boolean | void;
    beforeshow: (thisCmp: ButtonGroup) => boolean | void;
    beforestaterestore: (thisCmp: ButtonGroup, state: object) => boolean | void;
    beforestatesave: (thisCmp: ButtonGroup, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: ButtonGroup) => boolean | void;
    disable: (thisCmp: ButtonGroup) => boolean | void;
    enable: (thisCmp: ButtonGroup) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: ButtonGroup) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: ButtonGroup, x: number, y: number) => boolean | void;
    remove: (thisCmp: ButtonGroup, component: Ext.Component) => boolean | void;
    removed: (thisCmp: ButtonGroup, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ButtonGroup) => boolean | void;
    resize: (thisCmp: ButtonGroup, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: ButtonGroup) => boolean | void;
    staterestore: (thisCmp: ButtonGroup, state: object) => boolean | void;
    statesave: (thisCmp: ButtonGroup, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
