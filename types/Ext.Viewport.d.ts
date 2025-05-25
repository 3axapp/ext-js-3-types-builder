declare namespace Ext {
  class Viewport extends Ext.Container {

    public constructor(config: IViewportConfig);

    public addListener<T extends IViewportEvents = IViewportEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IViewportEvents = IViewportEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fireResize(w: object, h: object): void;

    public hasListener<T extends IViewportEvents = IViewportEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IViewportEvents = IViewportEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IViewportEvents = IViewportEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IViewportEvents = IViewportEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IViewportConfig {
    activeItem?: string | number,
    anchor?: string,
    autoDestroy?: boolean,
    autoEl?: unknown,
    autoScroll?: boolean,
    autoShow?: boolean,
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
    hidden?: boolean,
    hideBorders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
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
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    resizeEvent?: string,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IViewportEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: Viewport, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: Viewport, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: Viewport, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: Viewport) => boolean | void;
    beforeadd: (thisCmp: Viewport, component: Ext.Component, index: number) => boolean | void;
    beforedestroy: (thisCmp: Viewport) => boolean | void;
    beforehide: (thisCmp: Viewport) => boolean | void;
    beforeremove: (thisCmp: Viewport, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: Viewport) => boolean | void;
    beforeshow: (thisCmp: Viewport) => boolean | void;
    beforestaterestore: (thisCmp: Viewport, state: object) => boolean | void;
    beforestatesave: (thisCmp: Viewport, state: object) => boolean | void;
    destroy: (thisCmp: Viewport) => boolean | void;
    disable: (thisCmp: Viewport) => boolean | void;
    enable: (thisCmp: Viewport) => boolean | void;
    hide: (thisCmp: Viewport) => boolean | void;
    move: (thisCmp: Viewport, x: number, y: number) => boolean | void;
    remove: (thisCmp: Viewport, component: Ext.Component) => boolean | void;
    removed: (thisCmp: Viewport, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Viewport) => boolean | void;
    resize: (thisCmp: Viewport, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Viewport) => boolean | void;
    staterestore: (thisCmp: Viewport, state: object) => boolean | void;
    statesave: (thisCmp: Viewport, state: object) => boolean | void;
  }
}
