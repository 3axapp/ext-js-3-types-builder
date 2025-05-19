declare namespace Ext.form {
  class TriggerField extends Ext.form.TextField {

    private actionMode: string;

    private defaultTriggerWidth: number;

    private deferHeight: boolean;

    private mimicing: boolean;

    private monitorTab: boolean;

    public constructor(config: ITriggerFieldConfig);

    public addListener<T extends ITriggerFieldEvents = ITriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private alignErrorIcon(): void;

    private beforeBlur(): void;

    private checkTab(me: object, e: object): void;

    public fireEvent<T extends ITriggerFieldEvents = ITriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getTriggerWidth(): void;

    public getWidth(): number;

    public hasListener<T extends ITriggerFieldEvents = ITriggerFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initTrigger(): void;

    private mimicBlur(e: object): void;

    public on<T extends ITriggerFieldEvents = ITriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onBlur(): void;

    private onDestroy(): void;

    private onFocus(): void;

    private onRender(ct: object, position: object): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    public onTriggerClick(e: EventObject): void;

    public removeListener<T extends ITriggerFieldEvents = ITriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setEditable(value: boolean): void;

    public setHideTrigger(hideTrigger: boolean): void;

    public setReadOnly(value: boolean): void;

    private triggerBlur(): void;

    public un<T extends ITriggerFieldEvents = ITriggerFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateEditState(): void;

    private validateBlur(e: object): void;
  }

  interface ITriggerFieldConfig {
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

  interface ITriggerFieldEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: TriggerField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TriggerField) => boolean | void;
    autosize: (thisCmp: TriggerField, width: number) => boolean | void;
    beforedestroy: (thisCmp: TriggerField) => boolean | void;
    beforehide: (thisCmp: TriggerField) => boolean | void;
    beforerender: (thisCmp: TriggerField) => boolean | void;
    beforeshow: (thisCmp: TriggerField) => boolean | void;
    beforestaterestore: (thisCmp: TriggerField, state: object) => boolean | void;
    beforestatesave: (thisCmp: TriggerField, state: object) => boolean | void;
    blur: (thisCmp: TriggerField) => boolean | void;
    change: (thisCmp: TriggerField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: TriggerField) => boolean | void;
    disable: (thisCmp: TriggerField) => boolean | void;
    enable: (thisCmp: TriggerField) => boolean | void;
    focus: (thisCmp: TriggerField) => boolean | void;
    hide: (thisCmp: TriggerField) => boolean | void;
    invalid: (thisCmp: TriggerField, msg: string) => boolean | void;
    keydown: (thisCmp: TriggerField, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: TriggerField, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: TriggerField, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: TriggerField, x: number, y: number) => boolean | void;
    removed: (thisCmp: TriggerField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TriggerField) => boolean | void;
    resize: (thisCmp: TriggerField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: TriggerField) => boolean | void;
    specialkey: (thisCmp: TriggerField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: TriggerField, state: object) => boolean | void;
    statesave: (thisCmp: TriggerField, state: object) => boolean | void;
    valid: (thisCmp: TriggerField) => boolean | void;
  }
}
