declare namespace Ext.chart {
  class CartesianChart extends Ext.chart.Chart {

    public constructor(config: ICartesianChartConfig);

    public addListener<T extends ICartesianChartEvents = ICartesianChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private createAxis(axis: object, value: object): void;

    public fireEvent<T extends ICartesianChartEvents = ICartesianChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ICartesianChartEvents = ICartesianChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ICartesianChartEvents = ICartesianChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onSwfReady(isReset: object): void;

    public removeListener<T extends ICartesianChartEvents = ICartesianChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setXAxes(value: object): void;

    private setXAxis(value: object): void;

    private setXField(value: object): void;

    private setYAxes(value: object): void;

    private setYAxis(value: object): void;

    private setYField(value: object): void;

    public un<T extends ICartesianChartEvents = ICartesianChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICartesianChartConfig {
    allowDomMove?: boolean,
    anchor?: string,
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
    chartStyle?: object,
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disableCaching?: boolean,
    disabled?: boolean,
    disabledClass?: string,
    expressInstall?: boolean,
    extraStyle?: object,
    fieldLabel?: string,
    flashParams?: object,
    flashVars?: object,
    flashVersion?: string,
    flex?: number,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    seriesStyles?: object,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    url?: string,
    width?: number,
    wmode?: string,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ICartesianChartEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: CartesianChart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: CartesianChart) => boolean | void;
    beforedestroy: (thisCmp: CartesianChart) => boolean | void;
    beforehide: (thisCmp: CartesianChart) => boolean | void;
    beforerefresh: (thisCmp: CartesianChart) => boolean | void;
    beforerender: (thisCmp: CartesianChart) => boolean | void;
    beforeshow: (thisCmp: CartesianChart) => boolean | void;
    beforestaterestore: (thisCmp: CartesianChart, state: object) => boolean | void;
    beforestatesave: (thisCmp: CartesianChart, state: object) => boolean | void;
    destroy: (thisCmp: CartesianChart) => boolean | void;
    disable: (thisCmp: CartesianChart) => boolean | void;
    enable: (thisCmp: CartesianChart) => boolean | void;
    hide: (thisCmp: CartesianChart) => boolean | void;
    initialize: (thisCmp: CartesianChart) => boolean | void;
    move: (thisCmp: CartesianChart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: CartesianChart) => boolean | void;
    removed: (thisCmp: CartesianChart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: CartesianChart) => boolean | void;
    resize: (thisCmp: CartesianChart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: CartesianChart) => boolean | void;
    staterestore: (thisCmp: CartesianChart, state: object) => boolean | void;
    statesave: (thisCmp: CartesianChart, state: object) => boolean | void;
  }
}
