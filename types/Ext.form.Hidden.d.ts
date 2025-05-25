declare namespace Ext.form {
  class Hidden extends Ext.form.Field {

    private shouldLayout: boolean;

    public constructor(config: IHiddenConfig);

    public addListener<T extends IHiddenEvents = IHiddenEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public clearInvalid(): void;

    public fireEvent<T extends IHiddenEvents = IHiddenEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IHiddenEvents = IHiddenEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initEvents(): void;

    public markInvalid(): void;

    public on<T extends IHiddenEvents = IHiddenEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(): void;

    public removeListener<T extends IHiddenEvents = IHiddenEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setHeight(): Ext.BoxComponent;

    public setPagePosition(): this;

    public setPosition(): this;

    public setSize(): this;

    public setWidth(): Ext.BoxComponent;

    public un<T extends IHiddenEvents = IHiddenEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IHiddenConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoCreate?: string | object,
    autoScroll?: boolean,
    autoShow?: boolean,
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
    fieldClass?: string,
    fieldLabel?: string,
    flex?: number,
    focusClass?: string,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    inputType?: string,
    invalidClass?: string,
    invalidText?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    msgFx?: string,
    msgTarget?: string,
    name?: string,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    preventMark?: boolean,
    ptype?: string,
    readOnly?: boolean,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    submitValue?: boolean,
    tabIndex?: number,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    validateOnBlur?: boolean,
    validationDelay?: number,
    validationEvent?: string | boolean,
    value?: unknown,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IHiddenEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Hidden, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Hidden) => boolean | void;
    beforedestroy: (thisCmp: Hidden) => boolean | void;
    beforehide: (thisCmp: Hidden) => boolean | void;
    beforerender: (thisCmp: Hidden) => boolean | void;
    beforeshow: (thisCmp: Hidden) => boolean | void;
    beforestaterestore: (thisCmp: Hidden, state: object) => boolean | void;
    beforestatesave: (thisCmp: Hidden, state: object) => boolean | void;
    blur: (thisCmp: Hidden) => boolean | void;
    change: (thisCmp: Hidden, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: Hidden) => boolean | void;
    disable: (thisCmp: Hidden) => boolean | void;
    enable: (thisCmp: Hidden) => boolean | void;
    focus: (thisCmp: Hidden) => boolean | void;
    hide: (thisCmp: Hidden) => boolean | void;
    invalid: (thisCmp: Hidden, msg: string) => boolean | void;
    move: (thisCmp: Hidden, x: number, y: number) => boolean | void;
    removed: (thisCmp: Hidden, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Hidden) => boolean | void;
    resize: (thisCmp: Hidden, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Hidden) => boolean | void;
    specialkey: (thisCmp: Hidden, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: Hidden, state: object) => boolean | void;
    statesave: (thisCmp: Hidden, state: object) => boolean | void;
    valid: (thisCmp: Hidden) => boolean | void;
  }
}
