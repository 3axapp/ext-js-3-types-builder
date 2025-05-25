declare namespace Ext {
  class Container extends Ext.BoxComponent {

    public items: Ext.util.MixedCollection;

    public constructor(config: IContainerConfig);

    public add(...component: object[] | unknown[][]): Ext.Component | unknown[];

    public addListener<T extends IContainerEvents = IContainerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private applyDefaults(c: object): void;

    private beforeDestroy(): void;

    private canLayout(): void;

    public cascade(fn: Function, scope?: object, args?: unknown[]): this;

    private createComponent(config: object, defaultType: object): void;

    public doLayout(shallow?: boolean, force?: boolean): this;

    private doRemove(c: object, autoDestroy: object): void;

    public find(prop: string, value: string): unknown[];

    public findBy(fn: Function, scope?: object): unknown[];

    public findById(id: string): object;

    public findByType(xtype: string | typeof Ext.Component, shallow?: boolean): unknown[];

    public fireEvent<T extends IContainerEvents = IContainerEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public get(key: string | number): Ext.Component;

    public getComponent(comp: string | number): object;

    private getComponentId(comp: object): void;

    public getLayout(): Ext.layout.ContainerLayout;

    public getLayoutTarget(): Ext.Element;

    private hasLayoutPending(): void;

    public hasListener<T extends IContainerEvents = IContainerEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initItems(): void;

    public insert(index: number, component: Ext.Component): Ext.Component;

    private lookupComponent(comp: object): void;

    public on<T extends IContainerEvents = IContainerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAdd(c: object): void;

    private onAdded(container: Ext.Container, pos: number): void;

    private onBeforeAdd(item: object): void;

    private onLayout(): void;

    private onRemove(c: object): void;

    private onShow(): void;

    public remove(component: Component | string, autoDestroy?: boolean): Ext.Component;

    public removeAll(autoDestroy?: boolean): unknown[];

    public removeListener<T extends IContainerEvents = IContainerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setLayout(layout: object): void;

    private shouldBufferLayout(): void;

    public un<T extends IContainerEvents = IContainerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IContainerConfig {
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
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultType?: string,
    defaults?: Object|Function,
    disabled?: boolean,
    disabledClass?: string,
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

  interface IContainerEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: Container, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: Container, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: Container, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: Container) => boolean | void;
    beforeadd: (thisCmp: Container, component: Ext.Component, index: number) => boolean | void;
    beforedestroy: (thisCmp: Container) => boolean | void;
    beforehide: (thisCmp: Container) => boolean | void;
    beforeremove: (thisCmp: Container, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: Container) => boolean | void;
    beforeshow: (thisCmp: Container) => boolean | void;
    beforestaterestore: (thisCmp: Container, state: object) => boolean | void;
    beforestatesave: (thisCmp: Container, state: object) => boolean | void;
    destroy: (thisCmp: Container) => boolean | void;
    disable: (thisCmp: Container) => boolean | void;
    enable: (thisCmp: Container) => boolean | void;
    hide: (thisCmp: Container) => boolean | void;
    move: (thisCmp: Container, x: number, y: number) => boolean | void;
    remove: (thisCmp: Container, component: Ext.Component) => boolean | void;
    removed: (thisCmp: Container, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Container) => boolean | void;
    resize: (thisCmp: Container, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Container) => boolean | void;
    staterestore: (thisCmp: Container, state: object) => boolean | void;
    statesave: (thisCmp: Container, state: object) => boolean | void;
  }
}
