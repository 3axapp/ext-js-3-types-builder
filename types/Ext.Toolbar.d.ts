declare namespace Ext {
  class Toolbar extends Ext.Container {

    public constructor(config: IToolbarConfig);

    public add(arg1: unknown, arg2: unknown, etc: unknown): void;

    public addButton(config: object | unknown[]): Ext.Button | unknown[];

    public addDom(config: object): Ext.Toolbar.Item;

    public addElement(el: unknown): Ext.Toolbar.Item;

    public addField(field: Ext.form.Field): Ext.Toolbar.Item;

    public addFill(): void;

    public addItem(item: Ext.Toolbar.Item): Ext.Toolbar.Item;

    public addListener<T extends IToolbarEvents = IToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public addSeparator(): Ext.Toolbar.Item;

    public addSpacer(): Ext.Toolbar.Spacer;

    public addText(text: string): Ext.Toolbar.Item;

    public fireEvent<T extends IToolbarEvents = IToolbarEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IToolbarEvents = IToolbarEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public insertButton(index: number, item: object | Ext.Toolbar.Item | Ext.Button | unknown[]): Ext.Button | Item;

    public on<T extends IToolbarEvents = IToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IToolbarEvents = IToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IToolbarEvents = IToolbarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IToolbarConfig {
    activeItem?: string | number,
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoDestroy?: boolean,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    bufferResize?: boolean | number,
    buttonAlign?: string,
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultType?: string,
    defaults?: Object|Function,
    disabled?: boolean,
    disabledClass?: string,
    enableOverflow?: boolean,
    fieldLabel?: string,
    flex?: number,
    forceLayout?: boolean,
    height?: number,
    hidden?: boolean,
    hideBorders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    items?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    layout?: string | object,
    layoutConfig?: object,
    listeners?: object,
    margins?: object,
    monitorResize?: boolean,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    resizeEvent?: string,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IToolbarEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: Toolbar, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: Toolbar, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: Toolbar, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: Toolbar) => boolean | void;
    beforeadd: (thisCmp: Toolbar, component: Ext.Component, index: number) => boolean | void;
    beforedestroy: (thisCmp: Toolbar) => boolean | void;
    beforehide: (thisCmp: Toolbar) => boolean | void;
    beforeremove: (thisCmp: Toolbar, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: Toolbar) => boolean | void;
    beforeshow: (thisCmp: Toolbar) => boolean | void;
    beforestaterestore: (thisCmp: Toolbar, state: object) => boolean | void;
    beforestatesave: (thisCmp: Toolbar, state: object) => boolean | void;
    destroy: (thisCmp: Toolbar) => boolean | void;
    disable: (thisCmp: Toolbar) => boolean | void;
    enable: (thisCmp: Toolbar) => boolean | void;
    hide: (thisCmp: Toolbar) => boolean | void;
    move: (thisCmp: Toolbar, x: number, y: number) => boolean | void;
    overflowchange: (c: object, lastOverflow: boolean) => boolean | void;
    remove: (thisCmp: Toolbar, component: Ext.Component) => boolean | void;
    removed: (thisCmp: Toolbar, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Toolbar) => boolean | void;
    resize: (thisCmp: Toolbar, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Toolbar) => boolean | void;
    staterestore: (thisCmp: Toolbar, state: object) => boolean | void;
    statesave: (thisCmp: Toolbar, state: object) => boolean | void;
  }
}
