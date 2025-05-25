declare namespace Ext {
  class Window extends Ext.Panel {

    public dd: Ext.dd.DD;

    public constructor(config: IWindowConfig);

    public addListener<T extends IWindowEvents = IWindowEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterHide(): void;

    private afterShow(isAnim: object): void;

    public alignTo(element: unknown, position: string, offsets?: unknown[]): this;

    public anchorTo(element: unknown, position: string, offsets?: unknown[], monitorScroll?: boolean | number): this;

    private animHide(): void;

    private animShow(): void;

    private beforeDestroy(): void;

    private beforeResize(): void;

    private beforeShow(): void;

    public center(): this;

    public clearAnchor(): this;

    public close(): void;

    private doAnchor(): this;

    private doClose(): void;

    private doConstrain(): void;

    public fireEvent<T extends IWindowEvents = IWindowEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fitContainer(): void;

    public focus(): void;

    private getState(): void;

    private ghost(cls: object): void;

    private handleResize(box: object): void;

    public hasListener<T extends IWindowEvents = IWindowEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hide(animateTarget?: string | Element, callback?: Function, scope?: object): this;

    private initComponent(): void;

    private initDraggable(): void;

    private initEvents(): void;

    private initTools(): void;

    public maximize(): this;

    public minimize(): this;

    public on<T extends IWindowEvents = IWindowEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onEsc(k: object, e: object): void;

    public onHide(): void;

    private onRender(ct: object, position: object): void;

    public onShow(): void;

    private onWindowResize(): void;

    public removeListener<T extends IWindowEvents = IWindowEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private resizerAction(): void;

    public restore(): this;

    public setActive(active: boolean): void;

    public setAnimateTarget(el: string | Element): void;

    private setZIndex(index: object): void;

    public show(animateTarget?: string | Element, callback?: Function, scope?: object): this;

    public toBack(): this;

    public toFront(e?: boolean): this;

    public toggleMaximize(): this;

    public un<T extends IWindowEvents = IWindowEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private unghost(show: object, matchPosition: object): void;

    private updateHandles(): void;
  }

  interface IWindowConfig {
    activeItem?: string | number,
    allowDomMove?: boolean,
    anchor?: string,
    animCollapse?: boolean,
    animateTarget?: string | Element,
    applyTo?: unknown,
    autoDestroy?: boolean,
    autoHeight?: boolean,
    autoLoad?: object | string | Function,
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
    bufferResize?: boolean | number,
    buttonAlign?: string,
    buttons?: unknown[],
    bwrapCfg?: object,
    clearCls?: string,
    closable?: boolean,
    closeAction?: string,
    cls?: string,
    collapseFirst?: boolean,
    collapsed?: boolean,
    collapsedCls?: string,
    collapsible?: boolean,
    constrain?: boolean,
    constrainHeader?: boolean,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultButton?: string | number | Component,
    defaultType?: string,
    defaults?: Object|Function,
    disabled?: boolean,
    disabledClass?: string,
    draggable?: boolean,
    expandOnShow?: boolean,
    fbar?: object | unknown[],
    fieldLabel?: string,
    flex?: number,
    footer?: boolean,
    footerCfg?: object,
    forceLayout?: boolean,
    header?: boolean,
    headerAsText?: boolean,
    headerCfg?: object,
    height?: number,
    hidden?: boolean,
    hideAnimDuration?: number,
    hideBorders?: boolean,
    hideCollapseTool?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    iconCls?: string,
    id?: string,
    initHidden?: Booleandeprecated,
    itemCls?: string,
    itemId?: string,
    items?: object | unknown[],
    keys?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    layout?: string | object,
    layoutConfig?: object,
    listeners?: object,
    manager?: Ext.WindowGroup,
    margins?: object,
    maskDisabled?: boolean,
    maximizable?: boolean,
    maximized?: boolean,
    minButtonWidth?: number,
    minHeight?: number,
    minWidth?: number,
    minimizable?: boolean,
    modal?: boolean,
    monitorResize?: boolean,
    onEsc?: Function,
    overCls?: string,
    padding?: number | string,
    pageX?: number,
    pageY?: number,
    plain?: boolean,
    plugins?: object | unknown[],
    preventBodyReset?: boolean,
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    resizable?: boolean,
    resizeEvent?: string,
    resizeHandles?: string,
    shadow?: boolean | string,
    shadowOffset?: number,
    shim?: boolean,
    showAnimDuration?: number,
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

  interface IWindowEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (thisCmp: Window) => boolean | void;
    add: (thisCmp: Window, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: Window, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: Window, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: Window) => boolean | void;
    beforeadd: (thisCmp: Window, component: Ext.Component, index: number) => boolean | void;
    beforeclose: (p: Ext.Panel) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: Window) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: Window) => boolean | void;
    beforeremove: (thisCmp: Window, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: Window) => boolean | void;
    beforeshow: (thisCmp: Window) => boolean | void;
    beforestaterestore: (thisCmp: Window, state: object) => boolean | void;
    beforestatesave: (thisCmp: Window, state: object) => boolean | void;
    bodyresize: (p: Ext.Panel, width: number, height: number) => boolean | void;
    close: (p: Ext.Panel) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    deactivate: (thisCmp: Window) => boolean | void;
    destroy: (thisCmp: Window) => boolean | void;
    disable: (thisCmp: Window) => boolean | void;
    enable: (thisCmp: Window) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: Window) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    maximize: (thisCmp: Window) => boolean | void;
    minimize: (thisCmp: Window) => boolean | void;
    move: (thisCmp: Window, x: number, y: number) => boolean | void;
    remove: (thisCmp: Window, component: Ext.Component) => boolean | void;
    removed: (thisCmp: Window, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Window) => boolean | void;
    resize: (thisCmp: Window, width: number, height: number) => boolean | void;
    restore: (thisCmp: Window) => boolean | void;
    show: (thisCmp: Window) => boolean | void;
    staterestore: (thisCmp: Window, state: object) => boolean | void;
    statesave: (thisCmp: Window, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
