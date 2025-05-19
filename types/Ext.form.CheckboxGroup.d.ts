declare namespace Ext.form {
  class CheckboxGroup extends Ext.form.Field {

    private defaultType: string;

    private groupCls: string;

    public constructor(config: ICheckboxGroupConfig);

    public addListener<T extends ICheckboxGroupEvents = ICheckboxGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private beforeDestroy(): void;

    private doLayout(): void;

    private eachItem(fn: Function, scope: object): void;

    private fireChecked(): void;

    public fireEvent<T extends ICheckboxGroupEvents = ICheckboxGroupEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getBox(id: object): object;

    public getErrors(): unknown[];

    public getValue(): unknown[];

    public hasListener<T extends ICheckboxGroupEvents = ICheckboxGroupEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initValue(): void;

    public isDirty(): boolean;

    public on<T extends ICheckboxGroupEvents = ICheckboxGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDisable(): void;

    private onEnable(): void;

    private onRender(ct: object, position: object): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    private onSetValue(id: string | unknown[] | object, value: string): void;

    public removeListener<T extends ICheckboxGroupEvents = ICheckboxGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public reset(): void;

    public setReadOnly(readOnly: object): void;

    public setValue(id: unknown, value?: boolean): this;

    private setValueForItem(val: object): void;

    public un<T extends ICheckboxGroupEvents = ICheckboxGroupEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICheckboxGroupConfig {
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

  interface ICheckboxGroupEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: CheckboxGroup, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: CheckboxGroup) => boolean | void;
    beforedestroy: (thisCmp: CheckboxGroup) => boolean | void;
    beforehide: (thisCmp: CheckboxGroup) => boolean | void;
    beforerender: (thisCmp: CheckboxGroup) => boolean | void;
    beforeshow: (thisCmp: CheckboxGroup) => boolean | void;
    beforestaterestore: (thisCmp: CheckboxGroup, state: object) => boolean | void;
    beforestatesave: (thisCmp: CheckboxGroup, state: object) => boolean | void;
    blur: (thisCmp: CheckboxGroup) => boolean | void;
    change: (thisCmp: CheckboxGroup, checked: unknown[]) => boolean | void;
    destroy: (thisCmp: CheckboxGroup) => boolean | void;
    disable: (thisCmp: CheckboxGroup) => boolean | void;
    enable: (thisCmp: CheckboxGroup) => boolean | void;
    focus: (thisCmp: CheckboxGroup) => boolean | void;
    hide: (thisCmp: CheckboxGroup) => boolean | void;
    invalid: (thisCmp: CheckboxGroup, msg: string) => boolean | void;
    move: (thisCmp: CheckboxGroup, x: number, y: number) => boolean | void;
    removed: (thisCmp: CheckboxGroup, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: CheckboxGroup) => boolean | void;
    resize: (thisCmp: CheckboxGroup, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: CheckboxGroup) => boolean | void;
    specialkey: (thisCmp: CheckboxGroup, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: CheckboxGroup, state: object) => boolean | void;
    statesave: (thisCmp: CheckboxGroup, state: object) => boolean | void;
    valid: (thisCmp: CheckboxGroup) => boolean | void;
  }
}
