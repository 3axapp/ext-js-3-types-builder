declare namespace Ext.form {
  class TextArea extends Ext.form.TextField {

    private enterIsSpecial: boolean;

    private growAppend: string;

    public constructor(config: ITextAreaConfig);

    public addListener<T extends ITextAreaEvents = ITextAreaEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public autoSize(): void;

    private doAutoSize(e: object): void;

    private filterValidation(e: object): void;

    public fireEvent<T extends ITextAreaEvents = ITextAreaEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fireKey(e: object): void;

    public hasListener<T extends ITextAreaEvents = ITextAreaEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ITextAreaEvents = ITextAreaEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onRender(ct: object, position: object): void;

    public removeListener<T extends ITextAreaEvents = ITextAreaEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ITextAreaEvents = ITextAreaEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITextAreaConfig {
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
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
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
    maskRe?: RegExp,
    maxLength?: number,
    maxLengthText?: string,
    minLength?: number,
    minLengthText?: string,
    msgFx?: string,
    msgTarget?: string,
    name?: string,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    preventMark?: boolean,
    preventScrollbars?: boolean,
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
    stripCharsRe?: RegExp,
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

  interface ITextAreaEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: TextArea, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TextArea) => boolean | void;
    autosize: (thisCmp: TextArea, width: number) => boolean | void;
    beforedestroy: (thisCmp: TextArea) => boolean | void;
    beforehide: (thisCmp: TextArea) => boolean | void;
    beforerender: (thisCmp: TextArea) => boolean | void;
    beforeshow: (thisCmp: TextArea) => boolean | void;
    beforestaterestore: (thisCmp: TextArea, state: object) => boolean | void;
    beforestatesave: (thisCmp: TextArea, state: object) => boolean | void;
    blur: (thisCmp: TextArea) => boolean | void;
    change: (thisCmp: TextArea, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: TextArea) => boolean | void;
    disable: (thisCmp: TextArea) => boolean | void;
    enable: (thisCmp: TextArea) => boolean | void;
    focus: (thisCmp: TextArea) => boolean | void;
    hide: (thisCmp: TextArea) => boolean | void;
    invalid: (thisCmp: TextArea, msg: string) => boolean | void;
    keydown: (thisCmp: TextArea, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: TextArea, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: TextArea, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: TextArea, x: number, y: number) => boolean | void;
    removed: (thisCmp: TextArea, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TextArea) => boolean | void;
    resize: (thisCmp: TextArea, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: TextArea) => boolean | void;
    specialkey: (thisCmp: TextArea, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: TextArea, state: object) => boolean | void;
    statesave: (thisCmp: TextArea, state: object) => boolean | void;
    valid: (thisCmp: TextArea) => boolean | void;
  }
}
