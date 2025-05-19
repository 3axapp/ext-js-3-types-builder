declare namespace Ext.form {
  class Checkbox extends Ext.form.Field {

    private actionMode: string;

    public constructor(config: ICheckboxConfig);

    public addListener<T extends ICheckboxEvents = ICheckboxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ICheckboxEvents = ICheckboxEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getValue(): boolean;

    public hasListener<T extends ICheckboxEvents = ICheckboxEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    private initValue(): void;

    public on<T extends ICheckboxEvents = ICheckboxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onClick(): void;

    private onDestroy(): void;

    private onRender(ct: object, position: object): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    public removeListener<T extends ICheckboxEvents = ICheckboxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setValue(checked: boolean | string): this;

    public un<T extends ICheckboxEvents = ICheckboxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICheckboxConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoCreate?: string | object,
    autoScroll?: boolean,
    autoShow?: boolean,
    boxLabel?: string,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    checked?: boolean,
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    fieldClass?: string,
    fieldLabel?: string,
    flex?: number,
    focusClass?: string,
    handler?: Function,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    inputType?: string,
    inputValue?: string,
    invalidClass?: string,
    invalidText?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
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
    region?: string,
    renderTo?: unknown,
    scope?: object,
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
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ICheckboxEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Checkbox, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Checkbox) => boolean | void;
    beforedestroy: (thisCmp: Checkbox) => boolean | void;
    beforehide: (thisCmp: Checkbox) => boolean | void;
    beforerender: (thisCmp: Checkbox) => boolean | void;
    beforeshow: (thisCmp: Checkbox) => boolean | void;
    beforestaterestore: (thisCmp: Checkbox, state: object) => boolean | void;
    beforestatesave: (thisCmp: Checkbox, state: object) => boolean | void;
    blur: (thisCmp: Checkbox) => boolean | void;
    change: (thisCmp: Checkbox, newValue: unknown, oldValue: unknown) => boolean | void;
    check: (thisCmp: Checkbox, checked: boolean) => boolean | void;
    destroy: (thisCmp: Checkbox) => boolean | void;
    disable: (thisCmp: Checkbox) => boolean | void;
    enable: (thisCmp: Checkbox) => boolean | void;
    focus: (thisCmp: Checkbox) => boolean | void;
    hide: (thisCmp: Checkbox) => boolean | void;
    invalid: (thisCmp: Checkbox, msg: string) => boolean | void;
    move: (thisCmp: Checkbox, x: number, y: number) => boolean | void;
    removed: (thisCmp: Checkbox, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Checkbox) => boolean | void;
    resize: (thisCmp: Checkbox, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Checkbox) => boolean | void;
    specialkey: (thisCmp: Checkbox, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: Checkbox, state: object) => boolean | void;
    statesave: (thisCmp: Checkbox, state: object) => boolean | void;
    valid: (thisCmp: Checkbox) => boolean | void;
  }
}
