declare namespace Ext.form {
  class TimeField extends Ext.form.ComboBox {

    private formatDate: object;

    private initDate: string;

    private initDateFormat: string;

    private validateValue: object;

    public constructor(config: ITimeFieldConfig);

    public addListener<T extends ITimeFieldEvents = ITimeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ITimeFieldEvents = ITimeFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private generateStore(initial: object): void;

    public getValue(): string;

    public hasListener<T extends ITimeFieldEvents = ITimeFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends ITimeFieldEvents = ITimeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private parseDate(value: object): void;

    public removeListener<T extends ITimeFieldEvents = ITimeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setLimit(value: object, isMin: object, initial: object): void;

    public setMaxValue(value: Date | string): this;

    public setMinValue(value: Date | string): this;

    public setValue(value: object): this;

    public un<T extends ITimeFieldEvents = ITimeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITimeFieldConfig {
    allQuery?: string,
    allowBlank?: boolean,
    allowDomMove?: boolean,
    altFormats?: string,
    anchor?: string,
    applyTo?: unknown,
    autoCreate?: string | object,
    autoScroll?: boolean,
    autoSelect?: boolean,
    autoShow?: boolean,
    blankText?: string,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    clearFilterOnReset?: boolean,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disableKeyFilter?: boolean,
    disabled?: boolean,
    disabledClass?: string,
    displayField?: string,
    editable?: boolean,
    emptyClass?: string,
    emptyText?: string,
    enableKeyEvents?: boolean,
    fieldClass?: string,
    fieldLabel?: string,
    flex?: number,
    focusClass?: string,
    forceSelection?: boolean,
    format?: string,
    handleHeight?: number,
    height?: number,
    hidden?: boolean,
    hiddenId?: string,
    hiddenName?: string,
    hiddenValue?: string,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    hideTrigger?: boolean,
    html?: string | object,
    id?: string,
    increment?: number,
    inputType?: string,
    invalidClass?: string,
    invalidText?: string,
    itemCls?: string,
    itemId?: string,
    itemSelector?: string,
    labelSeparator?: string,
    labelStyle?: string,
    lazyInit?: boolean,
    lazyRender?: boolean,
    listAlign?: string | unknown[],
    listClass?: string,
    listEmptyText?: string,
    listWidth?: number,
    listeners?: object,
    loadingText?: string,
    margins?: object,
    maskRe?: RegExp,
    maxHeight?: number,
    maxLength?: number,
    maxLengthText?: string,
    maxText?: string,
    maxValue?: Date | string,
    minChars?: number,
    minHeight?: number,
    minLength?: number,
    minLengthText?: string,
    minListWidth?: number,
    minText?: string,
    minValue?: Date | string,
    mode?: string,
    msgFx?: string,
    msgTarget?: string,
    name?: string,
    overCls?: string,
    pageSize?: number,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    preventMark?: boolean,
    ptype?: string,
    queryDelay?: number,
    queryParam?: string,
    readOnly?: boolean,
    ref?: string,
    regex?: RegExp,
    regexText?: string,
    region?: string,
    renderTo?: unknown,
    resizable?: boolean,
    selectOnFocus?: boolean,
    selectedClass?: string,
    shadow?: boolean | string,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    store?: Ext.data.Store<R> | unknown[],
    stripCharsRe?: RegExp,
    style?: string,
    submitValue?: boolean,
    tabIndex?: number,
    tabTip?: string,
    title?: string,
    tpl?: string | Ext.XTemplate,
    tplWriteMode?: string,
    transform?: unknown,
    triggerAction?: string,
    triggerClass?: string,
    triggerConfig?: unknown,
    typeAhead?: boolean,
    typeAheadDelay?: number,
    validateOnBlur?: boolean,
    validationDelay?: number,
    validationEvent?: string | boolean,
    validator?: Function,
    value?: unknown,
    valueField?: string,
    valueNotFoundText?: string,
    vtype?: string,
    vtypeText?: string,
    width?: number,
    wrapFocusClass?: string,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ITimeFieldEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: TimeField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TimeField) => boolean | void;
    autosize: (thisCmp: TimeField, width: number) => boolean | void;
    beforedestroy: (thisCmp: TimeField) => boolean | void;
    beforehide: (thisCmp: TimeField) => boolean | void;
    beforequery: (queryEvent: object) => boolean | void;
    beforerender: (thisCmp: TimeField) => boolean | void;
    beforeselect: (combo: Ext.form.ComboBox, record: Ext.data.Record, index: number) => boolean | void;
    beforeshow: (thisCmp: TimeField) => boolean | void;
    beforestaterestore: (thisCmp: TimeField, state: object) => boolean | void;
    beforestatesave: (thisCmp: TimeField, state: object) => boolean | void;
    blur: (thisCmp: TimeField) => boolean | void;
    change: (thisCmp: TimeField, newValue: unknown, oldValue: unknown) => boolean | void;
    collapse: (combo: Ext.form.ComboBox) => boolean | void;
    destroy: (thisCmp: TimeField) => boolean | void;
    disable: (thisCmp: TimeField) => boolean | void;
    enable: (thisCmp: TimeField) => boolean | void;
    expand: (combo: Ext.form.ComboBox) => boolean | void;
    focus: (thisCmp: TimeField) => boolean | void;
    hide: (thisCmp: TimeField) => boolean | void;
    invalid: (thisCmp: TimeField, msg: string) => boolean | void;
    keydown: (thisCmp: TimeField, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: TimeField, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: TimeField, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: TimeField, x: number, y: number) => boolean | void;
    removed: (thisCmp: TimeField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TimeField) => boolean | void;
    resize: (thisCmp: TimeField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    select: (combo: Ext.form.ComboBox, record: Ext.data.Record, index: number) => boolean | void;
    show: (thisCmp: TimeField) => boolean | void;
    specialkey: (thisCmp: TimeField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: TimeField, state: object) => boolean | void;
    statesave: (thisCmp: TimeField, state: object) => boolean | void;
    valid: (thisCmp: TimeField) => boolean | void;
  }
}
