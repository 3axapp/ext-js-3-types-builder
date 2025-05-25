declare namespace Ext.form {
  class Radio extends Ext.form.Checkbox {

    public constructor(config: IRadioConfig);

    public addListener<T extends IRadioEvents = IRadioEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IRadioEvents = IRadioEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getCheckEl(): void;

    public getGroupValue(): string;

    public hasListener<T extends IRadioEvents = IRadioEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IRadioEvents = IRadioEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IRadioEvents = IRadioEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setValue(value: object): this;

    public un<T extends IRadioEvents = IRadioEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IRadioConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoCreate?: string | object,
    autoScroll?: boolean,
    autoShow?: boolean,
    boxLabel?: string,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    checked?: boolean,
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
    handler?: Function,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    inputType?: string,
    inputValue?: string,
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
    scope?: object,
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

  interface IRadioEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Radio, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Radio) => boolean | void;
    beforedestroy: (thisCmp: Radio) => boolean | void;
    beforehide: (thisCmp: Radio) => boolean | void;
    beforerender: (thisCmp: Radio) => boolean | void;
    beforeshow: (thisCmp: Radio) => boolean | void;
    beforestaterestore: (thisCmp: Radio, state: object) => boolean | void;
    beforestatesave: (thisCmp: Radio, state: object) => boolean | void;
    blur: (thisCmp: Radio) => boolean | void;
    change: (thisCmp: Radio, newValue: unknown, oldValue: unknown) => boolean | void;
    check: (thisCmp: Radio, checked: boolean) => boolean | void;
    destroy: (thisCmp: Radio) => boolean | void;
    disable: (thisCmp: Radio) => boolean | void;
    enable: (thisCmp: Radio) => boolean | void;
    focus: (thisCmp: Radio) => boolean | void;
    hide: (thisCmp: Radio) => boolean | void;
    invalid: (thisCmp: Radio, msg: string) => boolean | void;
    move: (thisCmp: Radio, x: number, y: number) => boolean | void;
    removed: (thisCmp: Radio, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Radio) => boolean | void;
    resize: (thisCmp: Radio, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Radio) => boolean | void;
    specialkey: (thisCmp: Radio, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: Radio, state: object) => boolean | void;
    statesave: (thisCmp: Radio, state: object) => boolean | void;
    valid: (thisCmp: Radio) => boolean | void;
  }
}
