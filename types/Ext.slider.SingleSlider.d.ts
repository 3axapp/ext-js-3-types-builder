declare namespace Ext.slider {
  class SingleSlider extends Ext.slider.MultiSlider {

    public constructor(config: ISingleSliderConfig);

    public addListener<T extends ISingleSliderEvents = ISingleSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ISingleSliderEvents = ISingleSliderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getNearest(local: object, prop: string): object;

    public getValue(): number;

    public hasListener<T extends ISingleSliderEvents = ISingleSliderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ISingleSliderEvents = ISingleSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends ISingleSliderEvents = ISingleSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setValue(value: number, animate: boolean): void;

    public syncThumb(): void;

    public un<T extends ISingleSliderEvents = ISingleSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ISingleSliderConfig {
    allowDomMove?: boolean,
    anchor?: string,
    animate?: boolean,
    applyTo?: unknown,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    clickToChange?: boolean,
    cls?: string,
    constrainThumbs?: boolean,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    decimalPrecision?: number | boolean,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
    flex?: number,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    increment?: number,
    itemCls?: string,
    itemId?: string,
    keyIncrement?: number,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    maxValue?: number,
    minValue?: number,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    value?: number,
    vertical?: boolean,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ISingleSliderEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: SingleSlider, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: SingleSlider) => boolean | void;
    beforechange: (slider: Ext.slider.MultiSlider, newValue: number, oldValue: number) => boolean | void;
    beforedestroy: (thisCmp: SingleSlider) => boolean | void;
    beforehide: (thisCmp: SingleSlider) => boolean | void;
    beforerender: (thisCmp: SingleSlider) => boolean | void;
    beforeshow: (thisCmp: SingleSlider) => boolean | void;
    beforestaterestore: (thisCmp: SingleSlider, state: object) => boolean | void;
    beforestatesave: (thisCmp: SingleSlider, state: object) => boolean | void;
    change: (slider: Ext.slider.MultiSlider, newValue: number, thumb: Ext.slider.Thumb) => boolean | void;
    changecomplete: (slider: Ext.slider.MultiSlider, newValue: number, thumb: Ext.slider.Thumb) => boolean | void;
    destroy: (thisCmp: SingleSlider) => boolean | void;
    disable: (thisCmp: SingleSlider) => boolean | void;
    drag: (slider: Ext.slider.MultiSlider, e: Ext.EventObject) => boolean | void;
    dragend: (slider: Ext.slider.MultiSlider, e: Ext.EventObject) => boolean | void;
    dragstart: (slider: Ext.slider.MultiSlider, e: Ext.EventObject) => boolean | void;
    enable: (thisCmp: SingleSlider) => boolean | void;
    hide: (thisCmp: SingleSlider) => boolean | void;
    move: (thisCmp: SingleSlider, x: number, y: number) => boolean | void;
    removed: (thisCmp: SingleSlider, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: SingleSlider) => boolean | void;
    resize: (thisCmp: SingleSlider, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: SingleSlider) => boolean | void;
    staterestore: (thisCmp: SingleSlider, state: object) => boolean | void;
    statesave: (thisCmp: SingleSlider, state: object) => boolean | void;
  }
}
