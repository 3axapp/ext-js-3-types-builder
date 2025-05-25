declare namespace Ext.form {
  class CompositeField extends Ext.form.Field {

    public combineErrors: boolean;

    public defaultMargins: string;

    public fieldErrors: Ext.util.MixedCollection;

    public innerCt: Ext.Container;

    public isComposite: boolean;

    public items: Ext.util.MixedCollection;

    public skipLastItemMargin: boolean;

    public constructor(config: ICompositeFieldConfig);

    public addListener<T extends ICompositeFieldEvents = ICompositeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeDestroy(): void;

    public buildCombinedErrorMessage(errors: unknown[]): string;

    public buildLabel(segments: unknown[]): string;

    public clearInvalidChildren(): void;

    private doLayout(shallow: object, force: object): void;

    private eachItem(fn: Function, scope: object): void;

    public fireEvent<T extends ICompositeFieldEvents = ICompositeFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ICompositeFieldEvents = ICompositeFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public isDirty(): boolean;

    public on<T extends ICompositeFieldEvents = ICompositeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDisable(): void;

    private onEnable(): void;

    public onFieldClearInvalid(field: Ext.form.Field): void;

    public onFieldMarkInvalid(field: Ext.form.Field, message: string): void;

    private onRender(ct: object, position: object): void;

    private onResize(adjWidth: object, adjHeight: object, rawWidth: object, rawHeight: object): void;

    private onShow(): void;

    public removeListener<T extends ICompositeFieldEvents = ICompositeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public reset(): void;

    public setReadOnly(readOnly: object): void;

    public sortErrors(): void;

    public un<T extends ICompositeFieldEvents = ICompositeFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateInvalidMark(): void;

    public validateValue(value: object, preventMark: object): boolean;
  }

  interface ICompositeFieldConfig {
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
    defaults?: object,
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
    labelConnector?: string,
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

  interface ICompositeFieldEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: CompositeField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: CompositeField) => boolean | void;
    beforedestroy: (thisCmp: CompositeField) => boolean | void;
    beforehide: (thisCmp: CompositeField) => boolean | void;
    beforerender: (thisCmp: CompositeField) => boolean | void;
    beforeshow: (thisCmp: CompositeField) => boolean | void;
    beforestaterestore: (thisCmp: CompositeField, state: object) => boolean | void;
    beforestatesave: (thisCmp: CompositeField, state: object) => boolean | void;
    blur: (thisCmp: CompositeField) => boolean | void;
    change: (thisCmp: CompositeField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: CompositeField) => boolean | void;
    disable: (thisCmp: CompositeField) => boolean | void;
    enable: (thisCmp: CompositeField) => boolean | void;
    focus: (thisCmp: CompositeField) => boolean | void;
    hide: (thisCmp: CompositeField) => boolean | void;
    invalid: (thisCmp: CompositeField, msg: string) => boolean | void;
    move: (thisCmp: CompositeField, x: number, y: number) => boolean | void;
    removed: (thisCmp: CompositeField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: CompositeField) => boolean | void;
    resize: (thisCmp: CompositeField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: CompositeField) => boolean | void;
    specialkey: (thisCmp: CompositeField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: CompositeField, state: object) => boolean | void;
    statesave: (thisCmp: CompositeField, state: object) => boolean | void;
    valid: (thisCmp: CompositeField) => boolean | void;
  }
}
