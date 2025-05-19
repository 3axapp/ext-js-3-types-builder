declare namespace Ext.form {
  class DisplayField extends Ext.form.Field {

    private defaultAutoCreate: object;

    public constructor(config: IDisplayFieldConfig);

    public addListener<T extends IDisplayFieldEvents = IDisplayFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IDisplayFieldEvents = IDisplayFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getName(): string;

    public getRawValue(): unknown;

    public getValue(): unknown;

    public hasListener<T extends IDisplayFieldEvents = IDisplayFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initEvents(): void;

    public isValid(): boolean;

    public on<T extends IDisplayFieldEvents = IDisplayFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IDisplayFieldEvents = IDisplayFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setRawValue(v: object): unknown;

    public setValue(v: object): this;

    public un<T extends IDisplayFieldEvents = IDisplayFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public validate(): boolean;
  }

  interface IDisplayFieldConfig {
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
    htmlEncode?: boolean,
    id?: string,
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
    value?: unknown,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IDisplayFieldEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: DisplayField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: DisplayField) => boolean | void;
    beforedestroy: (thisCmp: DisplayField) => boolean | void;
    beforehide: (thisCmp: DisplayField) => boolean | void;
    beforerender: (thisCmp: DisplayField) => boolean | void;
    beforeshow: (thisCmp: DisplayField) => boolean | void;
    beforestaterestore: (thisCmp: DisplayField, state: object) => boolean | void;
    beforestatesave: (thisCmp: DisplayField, state: object) => boolean | void;
    blur: (thisCmp: DisplayField) => boolean | void;
    change: (thisCmp: DisplayField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: DisplayField) => boolean | void;
    disable: (thisCmp: DisplayField) => boolean | void;
    enable: (thisCmp: DisplayField) => boolean | void;
    focus: (thisCmp: DisplayField) => boolean | void;
    hide: (thisCmp: DisplayField) => boolean | void;
    invalid: (thisCmp: DisplayField, msg: string) => boolean | void;
    move: (thisCmp: DisplayField, x: number, y: number) => boolean | void;
    removed: (thisCmp: DisplayField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: DisplayField) => boolean | void;
    resize: (thisCmp: DisplayField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: DisplayField) => boolean | void;
    specialkey: (thisCmp: DisplayField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: DisplayField, state: object) => boolean | void;
    statesave: (thisCmp: DisplayField, state: object) => boolean | void;
    valid: (thisCmp: DisplayField) => boolean | void;
  }
}
