declare namespace Ext.chart {
  class BarChart extends Ext.chart.CartesianChart {

    private type: string;

    public constructor(config: IBarChartConfig);

    public addListener<T extends IBarChartEvents = IBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IBarChartEvents = IBarChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IBarChartEvents = IBarChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IBarChartEvents = IBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IBarChartEvents = IBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IBarChartEvents = IBarChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IBarChartConfig {
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

  interface IBarChartEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: BarChart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: BarChart) => boolean | void;
    beforedestroy: (thisCmp: BarChart) => boolean | void;
    beforehide: (thisCmp: BarChart) => boolean | void;
    beforerefresh: (thisCmp: BarChart) => boolean | void;
    beforerender: (thisCmp: BarChart) => boolean | void;
    beforeshow: (thisCmp: BarChart) => boolean | void;
    beforestaterestore: (thisCmp: BarChart, state: object) => boolean | void;
    beforestatesave: (thisCmp: BarChart, state: object) => boolean | void;
    destroy: (thisCmp: BarChart) => boolean | void;
    disable: (thisCmp: BarChart) => boolean | void;
    enable: (thisCmp: BarChart) => boolean | void;
    hide: (thisCmp: BarChart) => boolean | void;
    initialize: (thisCmp: BarChart) => boolean | void;
    move: (thisCmp: BarChart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: BarChart) => boolean | void;
    removed: (thisCmp: BarChart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: BarChart) => boolean | void;
    resize: (thisCmp: BarChart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: BarChart) => boolean | void;
    staterestore: (thisCmp: BarChart, state: object) => boolean | void;
    statesave: (thisCmp: BarChart, state: object) => boolean | void;
  }
}
