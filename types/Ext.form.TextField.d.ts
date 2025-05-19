declare namespace Ext.form {
  class TextField extends Ext.form.Field {

    public constructor(config: ITextFieldConfig);

    public addListener<T extends ITextFieldEvents = ITextFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private applyEmptyText(): void;

    public autoSize(): void;

    private doAutoSize(e: object): void;

    private filterKeys(e: object): void;

    private filterValidation(e: object): void;

    public fireEvent<T extends ITextFieldEvents = ITextFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getErrors(value: unknown, local?: boolean, eventName: string, preventMark: boolean, xtype: string | Ext.Component | typeof Ext.Component, shallow?: boolean, msg?: string, item: Ext.util.Observable | Element, ename: object | string, fn: Function, scope: object, opt: object, item: Ext.util.Observable | Element, ename: object | string, fn: Function, scope: object, eventName: string, handler: Function, scope?: object, options?: object, container: Ext.Container, pos: number, e: object, e: object, e: object, e: object, e: object, x: number, y: number, ct: object, position: object, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number, value: object, o: object, events: unknown[], cls: string, eventName: string, handler: Function, scope?: object, container?: Element | HTMLElement | string, position?: string | number, start?: number, end?: number, msg: string, suppressEvent: boolean, scroll: boolean, disabled: boolean, height: unknown, x: number, y: number, left: number, top: number, value: unknown, readOnly: boolean, width: unknown, height: unknown, v: object, visible: boolean, width: unknown, queueSuspended: boolean, eventName: string, handler: Function, scope?: object, suppressEvent: boolean, htmlOrData: unknown, loadScripts: boolean, callback: Function, box: object, The: unknown): unknown[] | number | string | string | string | object | unknown[] | unknown | Ext.Element | object | unknown | number | string | string | boolean | Ext.Component | boolean | boolean | boolean | boolean | object | object | Ext.Component | Ext.Component | Ext.BoxComponent | Ext.Component | Ext.BoxComponent | Ext.BoxComponent | Ext.BoxComponent | unknown | Ext.BoxComponent | Ext.form.Field | Ext.Component | Ext.BoxComponent | Ext.Component | Ext.BoxComponent | Ext.BoxComponent | boolean | boolean;

    public hasListener<T extends ITextFieldEvents = ITextFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initEvents(): void;

    public on<T extends ITextFieldEvents = ITextFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onDisable(): void;

    private onEnable(): void;

    private onKeyDown(e: object): void;

    private onKeyPress(e: object): void;

    private onKeyUp(e: object): void;

    private onKeyUpBuffered(e: object): void;

    private onMouseDown(e: object): void;

    private postBlur(): void;

    private preFocus(): void;

    public processValue(value: object): void;

    public removeListener<T extends ITextFieldEvents = ITextFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public reset(): void;

    public selectText(start?: number, end?: number): void;

    public setValue(v: object): this;

    public un<T extends ITextFieldEvents = ITextFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITextFieldConfig {
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

  interface ITextFieldEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: TextField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TextField) => boolean | void;
    autosize: (thisCmp: TextField, width: number) => boolean | void;
    beforedestroy: (thisCmp: TextField) => boolean | void;
    beforehide: (thisCmp: TextField) => boolean | void;
    beforerender: (thisCmp: TextField) => boolean | void;
    beforeshow: (thisCmp: TextField) => boolean | void;
    beforestaterestore: (thisCmp: TextField, state: object) => boolean | void;
    beforestatesave: (thisCmp: TextField, state: object) => boolean | void;
    blur: (thisCmp: TextField) => boolean | void;
    change: (thisCmp: TextField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: TextField) => boolean | void;
    disable: (thisCmp: TextField) => boolean | void;
    enable: (thisCmp: TextField) => boolean | void;
    focus: (thisCmp: TextField) => boolean | void;
    hide: (thisCmp: TextField) => boolean | void;
    invalid: (thisCmp: TextField, msg: string) => boolean | void;
    keydown: (thisCmp: TextField, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: TextField, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: TextField, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: TextField, x: number, y: number) => boolean | void;
    removed: (thisCmp: TextField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TextField) => boolean | void;
    resize: (thisCmp: TextField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: TextField) => boolean | void;
    specialkey: (thisCmp: TextField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: TextField, state: object) => boolean | void;
    statesave: (thisCmp: TextField, state: object) => boolean | void;
    valid: (thisCmp: TextField) => boolean | void;
  }
}
