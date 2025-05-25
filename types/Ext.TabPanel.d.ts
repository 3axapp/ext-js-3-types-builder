declare namespace Ext {
  class TabPanel extends Ext.Panel {

    private idDelimiter: string;

    public constructor(config: ITabPanelConfig);

    public activate(tab: string | Panel): void;

    public addListener<T extends ITabPanelEvents = ITabPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private adjustBodyWidth(w: object): void;

    private afterRender(): void;

    private autoScrollTabs(): void;

    private autoSizeTabs(): void;

    private beforeDestroy(): void;

    public beginUpdate(): void;

    private createScrollers(): void;

    private delegateUpdates(): void;

    public endUpdate(): void;

    private findTargets(e: object): void;

    public fireEvent<T extends ITabPanelEvents = ITabPanelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getActiveTab(): BoxComponent;

    public getItem(id: string): Panel;

    private getScrollAnim(): void;

    private getScrollArea(): void;

    private getScrollIncrement(): void;

    private getScrollPos(): void;

    private getScrollWidth(): void;

    public getTabEl(tab: Panel | number | string): HTMLElement;

    public getTemplateArgs(item: Ext.BoxComponent): object;

    public hasListener<T extends ITabPanelEvents = ITabPanelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hideTabStripItem(item: number | string | Panel): void;

    private initComponent(): void;

    private initEvents(): void;

    private initTab(item: object, index: object): void;

    public on<T extends ITabPanelEvents = ITabPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAdd(c: object): void;

    private onBeforeAdd(item: object): void;

    private onBeforeShowItem(item: object): void;

    private onItemDisabled(item: object): void;

    private onItemEnabled(item: object): void;

    private onItemIconChanged(item: object, iconCls: object, oldCls: object): void;

    private onItemTitleChanged(item: object): void;

    private onRemove(c: object): void;

    private onRender(ct: object, position: object): void;

    private onResize(): void;

    private onScrollLeft(): void;

    private onScrollRight(): void;

    private onStripContextMenu(e: object): void;

    private onStripMouseDown(e: object): void;

    private onWheel(e: object): void;

    public readTabs(removeExisting: boolean): void;

    public removeListener<T extends ITabPanelEvents = ITabPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private scrollTo(pos: object, animate: object): void;

    public scrollToTab(item: Panel, animate: boolean): void;

    public setActiveTab(item: string | number): void;

    public un<T extends ITabPanelEvents = ITabPanelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unhideTabStripItem(item: number | string | Panel): void;

    private updateScrollButtons(): void;
  }

  interface ITabPanelConfig {
    activeItem?: string | number,
    activeTab?: string | number,
    allowDomMove?: boolean,
    anchor?: string,
    animCollapse?: boolean,
    animScroll?: boolean,
    applyTo?: unknown,
    autoDestroy?: boolean,
    autoHeight?: boolean,
    autoLoad?: object | string | Function,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoTabSelector?: string,
    autoTabs?: boolean,
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
    collapsedCls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultType?: string,
    defaults?: Object|Function,
    deferredRender?: boolean,
    disabled?: boolean,
    disabledClass?: string,
    draggable?: boolean | object,
    elements?: string,
    enableTabScroll?: boolean,
    fbar?: object | unknown[],
    fieldLabel?: string,
    flex?: number,
    floating?: unknown,
    footer?: boolean,
    footerCfg?: object,
    forceLayout?: boolean,
    frame?: boolean,
    headerCfg?: object,
    height?: number,
    hidden?: boolean,
    hideBorders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    iconCls?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    itemTpl?: Template | XTemplate,
    items?: object | unknown[],
    keys?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    layoutConfig?: object,
    layoutOnTabChange?: boolean,
    listeners?: object,
    margins?: object,
    maskDisabled?: boolean,
    minButtonWidth?: number,
    minTabWidth?: number,
    monitorResize?: boolean,
    overCls?: string,
    padding?: number | string,
    pageX?: number,
    pageY?: number,
    plain?: boolean,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    resizeEvent?: string,
    resizeTabs?: boolean,
    scrollDuration?: number,
    scrollIncrement?: number,
    scrollRepeatInterval?: number,
    shadow?: boolean | string,
    shadowOffset?: number,
    shim?: boolean,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabCls?: string,
    tabMargin?: number,
    tabPosition?: string,
    tabTip?: string,
    tabWidth?: number,
    tbar?: object | unknown[],
    tbarCfg?: object,
    tpl?: unknown,
    tplWriteMode?: string,
    unstyled?: boolean,
    wheelIncrement?: number,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ITabPanelEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (p: Ext.Panel) => boolean | void;
    add: (thisCmp: TabPanel, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: TabPanel, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: TabPanel, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: TabPanel) => boolean | void;
    beforeadd: (thisCmp: TabPanel, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: TabPanel) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: TabPanel) => boolean | void;
    beforeremove: (thisCmp: TabPanel, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: TabPanel) => boolean | void;
    beforeshow: (thisCmp: TabPanel) => boolean | void;
    beforestaterestore: (thisCmp: TabPanel, state: object) => boolean | void;
    beforestatesave: (thisCmp: TabPanel, state: object) => boolean | void;
    beforetabchange: (thisCmp: TabPanel, newTab: Panel, currentTab: Panel) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    contextmenu: (thisCmp: TabPanel, tab: Panel, e: EventObject) => boolean | void;
    deactivate: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: TabPanel) => boolean | void;
    disable: (thisCmp: TabPanel) => boolean | void;
    enable: (thisCmp: TabPanel) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: TabPanel) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: TabPanel, x: number, y: number) => boolean | void;
    remove: (thisCmp: TabPanel, component: Ext.Component) => boolean | void;
    removed: (thisCmp: TabPanel, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TabPanel) => boolean | void;
    resize: (thisCmp: TabPanel, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: TabPanel) => boolean | void;
    staterestore: (thisCmp: TabPanel, state: object) => boolean | void;
    statesave: (thisCmp: TabPanel, state: object) => boolean | void;
    tabchange: (thisCmp: TabPanel, tab: Panel) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
