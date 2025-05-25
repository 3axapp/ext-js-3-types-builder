declare namespace Ext {
  class FlashComponent extends Ext.BoxComponent {

    private swfHeight: string;

    private swfId: object;

    private swfWidth: string;

    public static EXPRESS_INSTALL_URL: string;

    public constructor(config: IFlashComponentConfig);

    public addListener<T extends IFlashComponentEvents = IFlashComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeDestroy(): void;

    public fireEvent<T extends IFlashComponentEvents = IFlashComponentEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getId(): string;

    private getSwfId(): void;

    public hasListener<T extends IFlashComponentEvents = IFlashComponentEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initSwf(): void;

    public on<T extends IFlashComponentEvents = IFlashComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onFlashEvent(e: object): void;

    private onRender(): void;

    private onSwfReady(): void;

    public removeListener<T extends IFlashComponentEvents = IFlashComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IFlashComponentEvents = IFlashComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IFlashComponentConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    backgroundColor?: string,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    expressInstall?: boolean,
    fieldLabel?: string,
    flashParams?: object,
    flashVars?: object,
    flashVersion?: string,
    flex?: number,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    url?: string,
    width?: number,
    wmode?: string,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IFlashComponentEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: FlashComponent, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: FlashComponent) => boolean | void;
    beforedestroy: (thisCmp: FlashComponent) => boolean | void;
    beforehide: (thisCmp: FlashComponent) => boolean | void;
    beforerender: (thisCmp: FlashComponent) => boolean | void;
    beforeshow: (thisCmp: FlashComponent) => boolean | void;
    beforestaterestore: (thisCmp: FlashComponent, state: object) => boolean | void;
    beforestatesave: (thisCmp: FlashComponent, state: object) => boolean | void;
    destroy: (thisCmp: FlashComponent) => boolean | void;
    disable: (thisCmp: FlashComponent) => boolean | void;
    enable: (thisCmp: FlashComponent) => boolean | void;
    hide: (thisCmp: FlashComponent) => boolean | void;
    initialize: (thisCmp: FlashComponent) => boolean | void;
    move: (thisCmp: FlashComponent, x: number, y: number) => boolean | void;
    removed: (thisCmp: FlashComponent, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: FlashComponent) => boolean | void;
    resize: (thisCmp: FlashComponent, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: FlashComponent) => boolean | void;
    staterestore: (thisCmp: FlashComponent, state: object) => boolean | void;
    statesave: (thisCmp: FlashComponent, state: object) => boolean | void;
  }
}
