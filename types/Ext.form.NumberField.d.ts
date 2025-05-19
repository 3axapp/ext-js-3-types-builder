declare namespace Ext.form {
  class NumberField extends Ext.form.TextField {

    public constructor(config: INumberFieldConfig);

    public addListener<T extends INumberFieldEvents = INumberFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeBlur(): void;

    public fireEvent<T extends INumberFieldEvents = INumberFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fixPrecision(value: object): void;

    public getErrors(value: unknown): unknown[];

    public getValue(): unknown;

    public hasListener<T extends INumberFieldEvents = INumberFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initEvents(): void;

    public on<T extends INumberFieldEvents = INumberFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private parseValue(value: object): void;

    public removeListener<T extends INumberFieldEvents = INumberFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setMaxValue(value: number): void;

    public setMinValue(value: number): void;

    public setValue(v: object): this;

    public un<T extends INumberFieldEvents = INumberFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface INumberFieldConfig {
    allowBlank?: boolean,
    allowDecimals?: boolean,
    allowDomMove?: boolean,
    allowNegative?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoCreate?: string | object,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoStripChars?: boolean,
    baseChars?: string,
    blankText?: string,
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
    decimalPrecision?: number,
    decimalSeparator?: string,
    disableKeyFilter?: boolean,
    disabled?: boolean,
    disabledClass?: string,
    emptyClass?: string,
    emptyText?: string,
    enableKeyEvents?: boolean,
    fieldClass?: string,
    fieldLabel?: string,
    flex?: number,
    focusClass?: string,
    grow?: boolean,
    growMax?: number,
    growMin?: number,
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
    maxLength?: number,
    maxLengthText?: string,
    maxText?: string,
    maxValue?: number,
    minLength?: number,
    minLengthText?: string,
    minText?: string,
    minValue?: number,
    msgFx?: string,
    msgTarget?: string,
    name?: string,
    nanText?: string,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    preventMark?: boolean,
    ptype?: string,
    readOnly?: boolean,
    ref?: string,
    regex?: RegExp,
    regexText?: string,
    region?: string,
    renderTo?: unknown,
    selectOnFocus?: boolean,
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
    validator?: Function,
    value?: unknown,
    vtype?: string,
    vtypeText?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface INumberFieldEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: NumberField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: NumberField) => boolean | void;
    autosize: (thisCmp: NumberField, width: number) => boolean | void;
    beforedestroy: (thisCmp: NumberField) => boolean | void;
    beforehide: (thisCmp: NumberField) => boolean | void;
    beforerender: (thisCmp: NumberField) => boolean | void;
    beforeshow: (thisCmp: NumberField) => boolean | void;
    beforestaterestore: (thisCmp: NumberField, state: object) => boolean | void;
    beforestatesave: (thisCmp: NumberField, state: object) => boolean | void;
    blur: (thisCmp: NumberField) => boolean | void;
    change: (thisCmp: NumberField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: NumberField) => boolean | void;
    disable: (thisCmp: NumberField) => boolean | void;
    enable: (thisCmp: NumberField) => boolean | void;
    focus: (thisCmp: NumberField) => boolean | void;
    hide: (thisCmp: NumberField) => boolean | void;
    invalid: (thisCmp: NumberField, msg: string) => boolean | void;
    keydown: (thisCmp: NumberField, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: NumberField, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: NumberField, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: NumberField, x: number, y: number) => boolean | void;
    removed: (thisCmp: NumberField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: NumberField) => boolean | void;
    resize: (thisCmp: NumberField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: NumberField) => boolean | void;
    specialkey: (thisCmp: NumberField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: NumberField, state: object) => boolean | void;
    statesave: (thisCmp: NumberField, state: object) => boolean | void;
    valid: (thisCmp: NumberField) => boolean | void;
  }
}
