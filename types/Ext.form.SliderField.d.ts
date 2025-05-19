declare namespace Ext.form {
  class SliderField extends Ext.form.Field {

    private actionMode: string;

    public constructor(config: ISliderFieldConfig);

    public addListener<T extends ISliderFieldEvents = ISliderFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private alignErrorIcon(): void;

    private beforeDestroy(): void;

    public fireEvent<T extends ISliderFieldEvents = ISliderFieldEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getValue(): number;

    public hasListener<T extends ISliderFieldEvents = ISliderFieldEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    public on<T extends ISliderFieldEvents = ISliderFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onChange(slider: object, v: object): void;

    private onDisable(): void;

    private onEnable(): void;

    private onRender(ct: object, position: object): void;

    private onResize(w: object, h: object, aw: object, ah: object): void;

    public removeListener<T extends ISliderFieldEvents = ISliderFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setMaxValue(v: number): this;

    public setMinValue(v: number): this;

    public setValue(v: number, animate?: boolean): this;

    public un<T extends ISliderFieldEvents = ISliderFieldEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ISliderFieldConfig {
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
    tipText?: Function,
    tpl?: unknown,
    tplWriteMode?: string,
    useTips?: boolean,
    validateOnBlur?: boolean,
    validationDelay?: number,
    validationEvent?: string | boolean,
    value?: unknown,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ISliderFieldEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: SliderField, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: SliderField) => boolean | void;
    beforedestroy: (thisCmp: SliderField) => boolean | void;
    beforehide: (thisCmp: SliderField) => boolean | void;
    beforerender: (thisCmp: SliderField) => boolean | void;
    beforeshow: (thisCmp: SliderField) => boolean | void;
    beforestaterestore: (thisCmp: SliderField, state: object) => boolean | void;
    beforestatesave: (thisCmp: SliderField, state: object) => boolean | void;
    blur: (thisCmp: SliderField) => boolean | void;
    change: (thisCmp: SliderField, newValue: unknown, oldValue: unknown) => boolean | void;
    destroy: (thisCmp: SliderField) => boolean | void;
    disable: (thisCmp: SliderField) => boolean | void;
    enable: (thisCmp: SliderField) => boolean | void;
    focus: (thisCmp: SliderField) => boolean | void;
    hide: (thisCmp: SliderField) => boolean | void;
    invalid: (thisCmp: SliderField, msg: string) => boolean | void;
    move: (thisCmp: SliderField, x: number, y: number) => boolean | void;
    removed: (thisCmp: SliderField, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: SliderField) => boolean | void;
    resize: (thisCmp: SliderField, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: SliderField) => boolean | void;
    specialkey: (thisCmp: SliderField, e: Ext.EventObject) => boolean | void;
    staterestore: (thisCmp: SliderField, state: object) => boolean | void;
    statesave: (thisCmp: SliderField, state: object) => boolean | void;
    valid: (thisCmp: SliderField) => boolean | void;
  }
}
