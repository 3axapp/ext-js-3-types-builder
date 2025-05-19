declare namespace Ext.form {
  class DateField extends Ext.form.TriggerField {

    private defaultAutoCreate: object;

    private initTime: string;

    private initTimeFormat: string;

    public constructor(config: IDateFieldConfig);

    public addListener<T extends IDateFieldEvents = IDateFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeBlur(): void;

    public fireEvent<T extends IDateFieldEvents = IDateFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private formatDate(date: object): void;

    public getErrors(value: unknown): unknown[];

    public getValue(): Date;

    public hasListener<T extends IDateFieldEvents = IDateFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initDisabledDays(): void;

    private initEvents(): void;

    private menuEvents(method: object): void;

    public on<T extends IDateFieldEvents = IDateFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onMenuHide(): void;

    private onSelect(m: object, d: object): void;

    public onTriggerClick(): void;

    private parseDate(value: object): void;

    public removeListener<T extends IDateFieldEvents = IDateFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private safeParse(value: object, format: object): void;

    public setDisabledDates(disabledDates: unknown[]): void;

    public setDisabledDays(disabledDays: unknown[]): void;

    public setMaxValue(value: Date): void;

    public setMinValue(value: Date): void;

    public setValue(date: string | Date): Ext.form.Field;

    public un<T extends IDateFieldEvents = IDateFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private validateBlur(): void;
  }

  interface IDateFieldConfig {
    allowBlank?: boolean,
    allowDomMove?: boolean,
    altFormats?: string,
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
    disabledDates?: unknown[],
    disabledDatesText?: string,
    disabledDays?: unknown[],
    disabledDaysText?: string,
    editable?: boolean,
    emptyClass?: string,
    emptyText?: string,
    enableKeyEvents?: boolean,
    fieldClass?: string,
    fieldLabel?: string,
    flex?: number,
    focusClass?: string,
    format?: string,
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
    maxText?: string,
    maxValue?: Date | string,
    minLength?: number,
    minLengthText?: string,
    minText?: string,
    minValue?: Date | string,
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
    showToday?: boolean,
    startDay?: number,
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

  interface IDateFieldEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: DateField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: DateField) => boolean | void;
    autosize: (thisCmp: DateField, width: number) => boolean | void;
    beforedestroy: (thisCmp: DateField) => boolean | void;
    beforehide: (thisCmp: DateField) => boolean | void;
    beforerender: (thisCmp: DateField) => boolean | void;
    beforeshow: (thisCmp: DateField) => boolean | void;
    beforestaterestore: (thisCmp: DateField, state: object) => boolean | void;
    beforestatesave: (thisCmp: DateField, state: object) => boolean | void;
    blur: (thisCmp: DateField) => boolean | void;
    change: (thisCmp: DateField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: DateField) => boolean | void;
    disable: (thisCmp: DateField) => boolean | void;
    enable: (thisCmp: DateField) => boolean | void;
    focus: (thisCmp: DateField) => boolean | void;
    hide: (thisCmp: DateField) => boolean | void;
    invalid: (thisCmp: DateField, msg: string) => boolean | void;
    keydown: (thisCmp: DateField, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: DateField, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: DateField, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: DateField, x: number, y: number) => boolean | void;
    removed: (thisCmp: DateField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: DateField) => boolean | void;
    resize: (thisCmp: DateField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    select: (thisCmp: DateField, date: Date) => boolean | void;
    show: (thisCmp: DateField) => boolean | void;
    specialkey: (thisCmp: DateField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: DateField, state: object) => boolean | void;
    statesave: (thisCmp: DateField, state: object) => boolean | void;
    valid: (thisCmp: DateField) => boolean | void;
  }
}
