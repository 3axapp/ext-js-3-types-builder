declare namespace Ext.chart {
  class StackedBarChart extends Ext.chart.CartesianChart {

    private type: string;

    public constructor(config: IStackedBarChartConfig);

    public addListener<T extends IStackedBarChartEvents = IStackedBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IStackedBarChartEvents = IStackedBarChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IStackedBarChartEvents = IStackedBarChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IStackedBarChartEvents = IStackedBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IStackedBarChartEvents = IStackedBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IStackedBarChartEvents = IStackedBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IStackedBarChartConfig {
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

  interface IStackedBarChartEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: StackedBarChart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: StackedBarChart) => boolean | void;
    beforedestroy: (thisCmp: StackedBarChart) => boolean | void;
    beforehide: (thisCmp: StackedBarChart) => boolean | void;
    beforerefresh: (thisCmp: StackedBarChart) => boolean | void;
    beforerender: (thisCmp: StackedBarChart) => boolean | void;
    beforeshow: (thisCmp: StackedBarChart) => boolean | void;
    beforestaterestore: (thisCmp: StackedBarChart, state: object) => boolean | void;
    beforestatesave: (thisCmp: StackedBarChart, state: object) => boolean | void;
    destroy: (thisCmp: StackedBarChart) => boolean | void;
    disable: (thisCmp: StackedBarChart) => boolean | void;
    enable: (thisCmp: StackedBarChart) => boolean | void;
    hide: (thisCmp: StackedBarChart) => boolean | void;
    initialize: (thisCmp: StackedBarChart) => boolean | void;
    move: (thisCmp: StackedBarChart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: StackedBarChart) => boolean | void;
    removed: (thisCmp: StackedBarChart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: StackedBarChart) => boolean | void;
    resize: (thisCmp: StackedBarChart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: StackedBarChart) => boolean | void;
    staterestore: (thisCmp: StackedBarChart, state: object) => boolean | void;
    statesave: (thisCmp: StackedBarChart, state: object) => boolean | void;
  }
}
