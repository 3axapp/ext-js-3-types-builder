declare namespace Ext.form {
  class TwinTriggerField extends Ext.form.TriggerField {

    public constructor(config: ITwinTriggerFieldConfig);

    public addListener<T extends ITwinTriggerFieldEvents = ITwinTriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    public fireEvent<T extends ITwinTriggerFieldEvents = ITwinTriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getTrigger(index: object): void;

    private getTriggerWidth(): void;

    public hasListener<T extends ITwinTriggerFieldEvents = ITwinTriggerFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initTrigger(): void;

    public on<T extends ITwinTriggerFieldEvents = ITwinTriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    public onTrigger1Click(e: EventObject): void;

    public onTrigger2Click(e: EventObject): void;

    public removeListener<T extends ITwinTriggerFieldEvents = ITwinTriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ITwinTriggerFieldEvents = ITwinTriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITwinTriggerFieldConfig {
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
    editable?: boolean,
    emptyClass?: string,
    emptyText?: string,
    enableKeyEvents?: boolean,
    fieldClass?: string,
    fieldLabel?: string,
    flex?: number,
    focusClass?: string,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    hideTrigger?: boolean,
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
    trigger1Class?: string,
    trigger2Class?: string,
    triggerClass?: string,
    triggerConfig?: unknown,
    validateOnBlur?: boolean,
    validationDelay?: number,
    validationEvent?: string | boolean,
    validator?: Function,
    value?: unknown,
    vtype?: string,
    vtypeText?: string,
    width?: number,
    wrapFocusClass?: string,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ITwinTriggerFieldEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: TwinTriggerField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TwinTriggerField) => boolean | void;
    autosize: (thisCmp: TwinTriggerField, width: number) => boolean | void;
    beforedestroy: (thisCmp: TwinTriggerField) => boolean | void;
    beforehide: (thisCmp: TwinTriggerField) => boolean | void;
    beforerender: (thisCmp: TwinTriggerField) => boolean | void;
    beforeshow: (thisCmp: TwinTriggerField) => boolean | void;
    beforestaterestore: (thisCmp: TwinTriggerField, state: object) => boolean | void;
    beforestatesave: (thisCmp: TwinTriggerField, state: object) => boolean | void;
    blur: (thisCmp: TwinTriggerField) => boolean | void;
    change: (thisCmp: TwinTriggerField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: TwinTriggerField) => boolean | void;
    disable: (thisCmp: TwinTriggerField) => boolean | void;
    enable: (thisCmp: TwinTriggerField) => boolean | void;
    focus: (thisCmp: TwinTriggerField) => boolean | void;
    hide: (thisCmp: TwinTriggerField) => boolean | void;
    invalid: (thisCmp: TwinTriggerField, msg: string) => boolean | void;
    keydown: (thisCmp: TwinTriggerField, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: TwinTriggerField, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: TwinTriggerField, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: TwinTriggerField, x: number, y: number) => boolean | void;
    removed: (thisCmp: TwinTriggerField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TwinTriggerField) => boolean | void;
    resize: (thisCmp: TwinTriggerField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: TwinTriggerField) => boolean | void;
    specialkey: (thisCmp: TwinTriggerField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: TwinTriggerField, state: object) => boolean | void;
    statesave: (thisCmp: TwinTriggerField, state: object) => boolean | void;
    valid: (thisCmp: TwinTriggerField) => boolean | void;
  }
}
