declare namespace Ext.slider {
  class MultiSlider extends Ext.BoxComponent {

    private clickRange: unknown[];

    public thumbs: unknown[];

    private topThumbZIndex: number;

    public values: unknown[];

    public constructor(config: IMultiSliderConfig);

    public addListener<T extends IMultiSliderEvents = IMultiSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public addThumb(value: number): void;

    private afterRender(): void;

    private beforeDestroy(): void;

    private doSnap(value: number): number;

    public fireEvent<T extends IMultiSliderEvents = IMultiSliderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public focus(): this;

    private getNearest(local: object, prop: string): object;

    private getRatio(): number;

    public getValue(index: number): number;

    public getValues(): unknown[];

    public hasListener<T extends IMultiSliderEvents = IMultiSliderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEvents(): void;

    private moveThumb(index: number): void;

    private normalizeValue(value: number): number;

    public on<T extends IMultiSliderEvents = IMultiSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onClickChange(local: object): void;

    private onDisable(): void;

    private onEnable(): void;

    private onKeyDown(e: Ext.EventObject): void;

    private onMouseDown(e: Ext.EventObject): void;

    private onRender(): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    private promoteThumb(topThumb: Ext.slider.Thumb): void;

    public removeListener<T extends IMultiSliderEvents = IMultiSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private reverseValue(pos: number): number;

    public setMaxValue(val: number): void;

    public setMinValue(val: number): void;

    public setValue(index: number, value: number, animate: boolean): void;

    public syncThumb(): void;

    private translateValue(v: object): void;

    public un<T extends IMultiSliderEvents = IMultiSliderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IMultiSliderConfig {
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

  interface IMultiSliderEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: MultiSlider, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: MultiSlider) => boolean | void;
    beforechange: (slider: Ext.slider.MultiSlider, newValue: number, oldValue: number) => boolean | void;
    beforedestroy: (thisCmp: MultiSlider) => boolean | void;
    beforehide: (thisCmp: MultiSlider) => boolean | void;
    beforerender: (thisCmp: MultiSlider) => boolean | void;
    beforeshow: (thisCmp: MultiSlider) => boolean | void;
    beforestaterestore: (thisCmp: MultiSlider, state: object) => boolean | void;
    beforestatesave: (thisCmp: MultiSlider, state: object) => boolean | void;
    change: (slider: Ext.slider.MultiSlider, newValue: number, thumb: Ext.slider.Thumb) => boolean | void;
    changecomplete: (slider: Ext.slider.MultiSlider, newValue: number, thumb: Ext.slider.Thumb) => boolean | void;
    destroy: (thisCmp: MultiSlider) => boolean | void;
    disable: (thisCmp: MultiSlider) => boolean | void;
    drag: (slider: Ext.slider.MultiSlider, e: Ext.EventObject) => boolean | void;
    dragend: (slider: Ext.slider.MultiSlider, e: Ext.EventObject) => boolean | void;
    dragstart: (slider: Ext.slider.MultiSlider, e: Ext.EventObject) => boolean | void;
    enable: (thisCmp: MultiSlider) => boolean | void;
    hide: (thisCmp: MultiSlider) => boolean | void;
    move: (thisCmp: MultiSlider, x: number, y: number) => boolean | void;
    removed: (thisCmp: MultiSlider, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: MultiSlider) => boolean | void;
    resize: (thisCmp: MultiSlider, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: MultiSlider) => boolean | void;
    staterestore: (thisCmp: MultiSlider, state: object) => boolean | void;
    statesave: (thisCmp: MultiSlider, state: object) => boolean | void;
  }
}
