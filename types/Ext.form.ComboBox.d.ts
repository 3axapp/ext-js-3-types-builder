declare namespace Ext.form {
  class ComboBox extends Ext.form.TriggerField {

    private defaultAutoCreate: object;

    public keyNav: Ext.KeyNav;

    public lastQuery: string;

    public view: Ext.DataView;

    public constructor(config: IComboBoxConfig);

    public addListener<T extends IComboBoxEvents = IComboBoxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private assertValue(): void;

    private beforeBlur(): void;

    private bindStore(store: object, initial: object): void;

    public clearValue(): void;

    public collapse(): void;

    private collapseIf(e: object): void;

    public doQuery(query: string, forceAll: boolean): void;

    private doResize(w: object): void;

    public expand(): void;

    private findRecord(prop: object, value: object): void;

    public fireEvent<T extends IComboBoxEvents = IComboBoxEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fireKey(e: object): void;

    public getListParent(): void;

    public getName(): string;

    private getParams(q: object): void;

    private getParentZIndex(): void;

    public getStore(): Ext.data.Store;

    public getValue(): string;

    private getZIndex(listParent: object): void;

    public hasListener<T extends IComboBoxEvents = IComboBoxEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    private initList(): void;

    private initQuery(): void;

    private initValue(): void;

    public isExpanded(): void;

    public on<T extends IComboBoxEvents = IComboBoxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onBeforeLoad(): void;

    private onDestroy(): void;

    private onDisable(): void;

    private onEnable(): void;

    private onKeyUp(e: object): void;

    private onLoad(): void;

    private onRender(ct: object, position: object): void;

    private onResize(w: object, h: object): void;

    private onSelect(record: object, index: object): void;

    public onTriggerClick(): void;

    private onTypeAhead(): void;

    private onViewClick(doFocus: object): void;

    private onViewMove(e: object, t: object): void;

    private onViewOver(e: object, t: object): void;

    private postBlur(): void;

    public removeListener<T extends IComboBoxEvents = IComboBoxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public reset(): void;

    private restrictHeight(): void;

    public select(index: number, scrollIntoView: boolean): void;

    public selectByValue(value: string, scrollIntoView: boolean): boolean;

    private selectNext(): void;

    private selectPrev(): void;

    public setValue(value: string): this;

    public un<T extends IComboBoxEvents = IComboBoxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private validateBlur(): void;
  }

  interface IComboBoxConfig {
    allQuery?: string,
    allowBlank?: boolean,
    allowDomMove?: boolean,
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
    minChars?: number,
    minHeight?: number,
    minLength?: number,
    minLengthText?: string,
    minListWidth?: number,
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
    store?: Ext.data.Store | unknown[],
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

  interface IComboBoxEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: ComboBox, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: ComboBox) => boolean | void;
    autosize: (thisCmp: ComboBox, width: number) => boolean | void;
    beforedestroy: (thisCmp: ComboBox) => boolean | void;
    beforehide: (thisCmp: ComboBox) => boolean | void;
    beforequery: (queryEvent: object) => boolean | void;
    beforerender: (thisCmp: ComboBox) => boolean | void;
    beforeselect: (combo: Ext.form.ComboBox, record: Ext.data.Record, index: number) => boolean | void;
    beforeshow: (thisCmp: ComboBox) => boolean | void;
    beforestaterestore: (thisCmp: ComboBox, state: object) => boolean | void;
    beforestatesave: (thisCmp: ComboBox, state: object) => boolean | void;
    blur: (thisCmp: ComboBox) => boolean | void;
    change: (thisCmp: ComboBox, newValue: unknown, oldValue: unknown) => boolean | void;
    collapse: (combo: Ext.form.ComboBox) => boolean | void;
    destroy: (thisCmp: ComboBox) => boolean | void;
    disable: (thisCmp: ComboBox) => boolean | void;
    enable: (thisCmp: ComboBox) => boolean | void;
    expand: (combo: Ext.form.ComboBox) => boolean | void;
    focus: (thisCmp: ComboBox) => boolean | void;
    hide: (thisCmp: ComboBox) => boolean | void;
    invalid: (thisCmp: ComboBox, msg: string) => boolean | void;
    keydown: (thisCmp: ComboBox, e: Ext.EventObject) => boolean | void;
    keypress: (thisCmp: ComboBox, e: Ext.EventObject) => boolean | void;
    keyup: (thisCmp: ComboBox, e: Ext.EventObject) => boolean | void;
    move: (thisCmp: ComboBox, x: number, y: number) => boolean | void;
    removed: (thisCmp: ComboBox, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ComboBox) => boolean | void;
    resize: (thisCmp: ComboBox, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    select: (combo: Ext.form.ComboBox, record: Ext.data.Record, index: number) => boolean | void;
    show: (thisCmp: ComboBox) => boolean | void;
    specialkey: (thisCmp: ComboBox, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: ComboBox, state: object) => boolean | void;
    statesave: (thisCmp: ComboBox, state: object) => boolean | void;
    valid: (thisCmp: ComboBox) => boolean | void;
  }
}
