declare namespace Ext.form {
  class FormPanel extends Ext.Panel {

    public constructor(config: IFormPanelConfig);

    public addListener<T extends IFormPanelEvents = IFormPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private applySettings(c: object): void;

    private beforeDestroy(): void;

    private bindHandler(): void;

    private createForm(): void;

    public fireEvent<T extends IFormPanelEvents = IFormPanelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getForm(): Ext.form.BasicForm;

    public getLayoutTarget(): Ext.Element;

    public hasListener<T extends IFormPanelEvents = IFormPanelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    private initFields(): void;

    private isField(c: object): void;

    public load(options: object): void;

    public on<T extends IFormPanelEvents = IFormPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAdd(c: object): void;

    private onAddEvent(ct: object, c: object): void;

    private onDisable(): void;

    private onEnable(): void;

    private onRemove(c: object): void;

    private onRemoveEvent(ct: object, c: object): void;

    private onRender(ct: object, position: object): void;

    private processAdd(c: object): void;

    private processRemove(c: object): void;

    public removeListener<T extends IFormPanelEvents = IFormPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public startMonitoring(): void;

    public stopMonitoring(): void;

    public un<T extends IFormPanelEvents = IFormPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IFormPanelConfig {
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
    formId?: string,
    frame?: boolean,
    header?: boolean,
    headerAsText?: boolean,
    headerCfg?: object,
    height?: number,
    hidden?: boolean,
    hideBorders?: boolean,
    hideCollapseTool?: boolean,
    hideLabel?: boolean,
    hideLabels?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    iconCls?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    items?: object | unknown[],
    keys?: object | unknown[],
    labelAlign?: string,
    labelPad?: number,
    labelSeparator?: string,
    labelStyle?: string,
    labelWidth?: number,
    layout?: string,
    layoutConfig?: object,
    listeners?: object,
    margins?: object,
    maskDisabled?: boolean,
    minButtonWidth?: number,
    monitorPoll?: number,
    monitorResize?: boolean,
    monitorValid?: boolean,
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

  interface IFormPanelEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    add: (thisCmp: FormPanel, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: FormPanel, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: FormPanel, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: FormPanel) => boolean | void;
    beforeadd: (thisCmp: FormPanel, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: FormPanel) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: FormPanel) => boolean | void;
    beforeremove: (thisCmp: FormPanel, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: FormPanel) => boolean | void;
    beforeshow: (thisCmp: FormPanel) => boolean | void;
    beforestaterestore: (thisCmp: FormPanel, state: object) => boolean | void;
    beforestatesave: (thisCmp: FormPanel, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    clientvalidation: (thisCmp: FormPanel, valid: boolean) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: FormPanel) => boolean | void;
    disable: (thisCmp: FormPanel) => boolean | void;
    enable: (thisCmp: FormPanel) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: FormPanel) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: FormPanel, x: number, y: number) => boolean | void;
    remove: (thisCmp: FormPanel, component: Ext.Component) => boolean | void;
    removed: (thisCmp: FormPanel, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: FormPanel) => boolean | void;
    resize: (thisCmp: FormPanel, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: FormPanel) => boolean | void;
    staterestore: (thisCmp: FormPanel, state: object) => boolean | void;
    statesave: (thisCmp: FormPanel, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
