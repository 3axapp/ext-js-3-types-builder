declare namespace Ext.form {
  class RadioGroup extends Ext.form.CheckboxGroup {

    private defaultType: string;

    private groupCls: string;

    public constructor(config: IRadioGroupConfig);

    public addListener<T extends IRadioGroupEvents = IRadioGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private bufferChecked(): void;

    private fireChecked(): void;

    public fireEvent<T extends IRadioGroupEvents = IRadioGroupEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getValue(): Ext.form.Radio;

    public hasListener<T extends IRadioGroupEvents = IRadioGroupEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IRadioGroupEvents = IRadioGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    public onSetValue(id: string | Ext.form.Radio, value: boolean): this;

    public removeListener<T extends IRadioGroupEvents = IRadioGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setValueForItem(val: object): void;

    public un<T extends IRadioGroupEvents = IRadioGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IRadioGroupConfig {
    allowBlank?: boolean,
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoCreate?: string | object,
    autoScroll?: boolean,
    autoShow?: boolean,
    blankText?: string,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    cls?: string,
    columns?: string | number | unknown[],
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
    items?: unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    msgFx?: string,
    msgTarget?: string,
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
    vertical?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IRadioGroupEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: RadioGroup, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: RadioGroup) => boolean | void;
    beforedestroy: (thisCmp: RadioGroup) => boolean | void;
    beforehide: (thisCmp: RadioGroup) => boolean | void;
    beforerender: (thisCmp: RadioGroup) => boolean | void;
    beforeshow: (thisCmp: RadioGroup) => boolean | void;
    beforestaterestore: (thisCmp: RadioGroup, state: object) => boolean | void;
    beforestatesave: (thisCmp: RadioGroup, state: object) => boolean | void;
    blur: (thisCmp: RadioGroup) => boolean | void;
    change: (thisCmp: RadioGroup, checked: Ext.form.Radio) => boolean | void;
    destroy: (thisCmp: RadioGroup) => boolean | void;
    disable: (thisCmp: RadioGroup) => boolean | void;
    enable: (thisCmp: RadioGroup) => boolean | void;
    focus: (thisCmp: RadioGroup) => boolean | void;
    hide: (thisCmp: RadioGroup) => boolean | void;
    invalid: (thisCmp: RadioGroup, msg: string) => boolean | void;
    move: (thisCmp: RadioGroup, x: number, y: number) => boolean | void;
    removed: (thisCmp: RadioGroup, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: RadioGroup) => boolean | void;
    resize: (thisCmp: RadioGroup, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: RadioGroup) => boolean | void;
    specialkey: (thisCmp: RadioGroup, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: RadioGroup, state: object) => boolean | void;
    statesave: (thisCmp: RadioGroup, state: object) => boolean | void;
    valid: (thisCmp: RadioGroup) => boolean | void;
  }
}
