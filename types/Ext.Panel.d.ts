declare namespace Ext {
  class Panel extends Ext.Container {

    public body: Ext.Element;

    public buttons: unknown[];

    public bwrap: Ext.Element;

    private collapseDefaults: object;

    private collapseEl: string;

    public collapsed: boolean;

    public dd: Ext.dd.DragSource;

    private deferHeight: boolean;

    private expandDefaults: object;

    public footer: Ext.Element;

    public header: Ext.Element;

    private slideAnchor: string;

    private toolTarget: string;

    public constructor(config: IPanelConfig);

    public addButton(config: string | object, handler: Function, scope: object): Ext.Button;

    public addListener<T extends IPanelEvents = IPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private addTool(): void;

    private adjustBodyHeight(h: object): void;

    private adjustBodyWidth(w: object): void;

    private afterCollapse(anim: object): void;

    private afterEffect(anim: object): void;

    private afterExpand(anim: object): void;

    private afterRender(): void;

    private beforeDestroy(): void;

    private beforeEffect(anim: object): void;

    public collapse(animate: boolean): this;

    private createClasses(): void;

    private createEffect(a: object, cb: object, scope: object): void;

    private createElement(name: object, pnode: object): void;

    private createFbar(fbar: object): void;

    private createGhost(cls: object, useShim: object, appendTo: object): void;

    private createToolHandler(t: object, tc: object, overCls: object, panel: object): void;

    private createToolbar(tb: object, options: object): void;

    private doAutoLoad(): void;

    public expand(animate: boolean): this;

    public fireEvent<T extends IPanelEvents = IPanelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getBottomToolbar(): Ext.Toolbar;

    private getContentTarget(): void;

    public getFooterToolbar(): Ext.Toolbar;

    public getFrameHeight(): number;

    public getFrameWidth(): number;

    public getInnerHeight(): number;

    public getInnerWidth(): number;

    private getKeyMap(): void;

    public getLayoutTarget(): Ext.Element;

    public getTool(id: string): object;

    private getToolbarHeight(): void;

    public getTopToolbar(): Ext.Toolbar;

    public getUpdater(): Ext.Updater;

    public hasListener<T extends IPanelEvents = IPanelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initDraggable(): void;

    private initEvents(): void;

    public load(config: object | string | Function): this;

    private makeFloating(cfg: object): void;

    public on<T extends IPanelEvents = IPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onBodyResize(w: object, h: object): void;

    private onCollapse(doAnim: object, animArg: object): void;

    private onDisable(): void;

    private onEnable(): void;

    private onExpand(doAnim: object, animArg: object): void;

    private onHide(): void;

    private onLayout(shallow: object, force: object): void;

    private onPosition(x: number, y: number): void;

    private onRender(ct: object, position: object): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    private onShow(): void;

    public removeListener<T extends IPanelEvents = IPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setIconClass(cls: string): void;

    public setTitle(title: string, iconCls?: string): this;

    private syncHeight(): void;

    private syncShadow(): void;

    public toggleCollapse(animate: boolean): this;

    public un<T extends IPanelEvents = IPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IPanelConfig {
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
    tools?: unknown[],
    tpl?: unknown,
    tplWriteMode?: string,
    unstyled?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IPanelEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    add: (thisCmp: Panel, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: Panel, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: Panel, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: Panel) => boolean | void;
    beforeadd: (thisCmp: Panel, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: Panel) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: Panel) => boolean | void;
    beforeremove: (thisCmp: Panel, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: Panel) => boolean | void;
    beforeshow: (thisCmp: Panel) => boolean | void;
    beforestaterestore: (thisCmp: Panel, state: object) => boolean | void;
    beforestatesave: (thisCmp: Panel, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: Panel) => boolean | void;
    disable: (thisCmp: Panel) => boolean | void;
    enable: (thisCmp: Panel) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: Panel) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: Panel, x: number, y: number) => boolean | void;
    remove: (thisCmp: Panel, component: Ext.Component) => boolean | void;
    removed: (thisCmp: Panel, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Panel) => boolean | void;
    resize: (thisCmp: Panel, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Panel) => boolean | void;
    staterestore: (thisCmp: Panel, state: object) => boolean | void;
    statesave: (thisCmp: Panel, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
