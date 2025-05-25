declare namespace Ext.form {
  class Field extends Ext.BoxComponent {

    private hasFocus: boolean;

    private isFormField: boolean;

    public label: Ext.Element;

    private msgDisplay: string;

    public originalValue: mixed;

    public startValue: mixed;

    public constructor(config: IFieldConfig);

    public addListener<T extends IFieldEvents = IFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private alignErrorEl(): void;

    private alignErrorIcon(): void;

    private append(v: object): void;

    private beforeBlur(): void;

    public clearInvalid(): void;

    public fireEvent<T extends IFieldEvents = IFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fireKey(e: object): void;

    public getActiveError(): string;

    private getErrorCt(): void;

    public getErrors(): unknown[];

    private getItemCt(): void;

    private getMessageHandler(): void;

    public getName(): string;

    public getRawValue(): unknown;

    public getValue(): unknown;

    public hasListener<T extends IFieldEvents = IFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    private initValue(): void;

    public isDirty(): boolean;

    public isValid(preventMark: boolean): boolean;

    public markInvalid(msg?: string): void;

    public on<T extends IFieldEvents = IFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onBlur(): void;

    private onFocus(): void;

    private onRender(ct: object, position: object): void;

    private postBlur(): void;

    private preFocus(): void;

    public processValue(value: unknown): void;

    public removeListener<T extends IFieldEvents = IFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public reset(): void;

    public setActiveError(msg: string, suppressEvent: boolean): void;

    public setRawValue(value: unknown): unknown;

    public setReadOnly(readOnly: boolean): void;

    public setValue(value: unknown): this;

    public un<T extends IFieldEvents = IFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unsetActiveError(suppressEvent: boolean): void;

    public validate(): boolean;

    public validateValue(The: unknown): boolean;
  }

  interface IFieldConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoCreate?: string | object,
    autoScroll?: boolean,
    autoShow?: boolean,
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

  interface IFieldEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Field, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Field) => boolean | void;
    beforedestroy: (thisCmp: Field) => boolean | void;
    beforehide: (thisCmp: Field) => boolean | void;
    beforerender: (thisCmp: Field) => boolean | void;
    beforeshow: (thisCmp: Field) => boolean | void;
    beforestaterestore: (thisCmp: Field, state: object) => boolean | void;
    beforestatesave: (thisCmp: Field, state: object) => boolean | void;
    blur: (thisCmp: Field) => boolean | void;
    change: (thisCmp: Field, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: Field) => boolean | void;
    disable: (thisCmp: Field) => boolean | void;
    enable: (thisCmp: Field) => boolean | void;
    focus: (thisCmp: Field) => boolean | void;
    hide: (thisCmp: Field) => boolean | void;
    invalid: (thisCmp: Field, msg: string) => boolean | void;
    move: (thisCmp: Field, x: number, y: number) => boolean | void;
    removed: (thisCmp: Field, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Field) => boolean | void;
    resize: (thisCmp: Field, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Field) => boolean | void;
    specialkey: (thisCmp: Field, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: Field, state: object) => boolean | void;
    statesave: (thisCmp: Field, state: object) => boolean | void;
    valid: (thisCmp: Field) => boolean | void;
  }
}
