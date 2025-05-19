declare namespace Ext.chart {
  class ColumnChart extends Ext.chart.CartesianChart {

    private type: string;

    public constructor(config: IColumnChartConfig);

    public addListener<T extends IColumnChartEvents = IColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IColumnChartEvents = IColumnChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IColumnChartEvents = IColumnChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IColumnChartEvents = IColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IColumnChartEvents = IColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IColumnChartEvents = IColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IColumnChartConfig {
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

  interface IColumnChartEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: ColumnChart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: ColumnChart) => boolean | void;
    beforedestroy: (thisCmp: ColumnChart) => boolean | void;
    beforehide: (thisCmp: ColumnChart) => boolean | void;
    beforerefresh: (thisCmp: ColumnChart) => boolean | void;
    beforerender: (thisCmp: ColumnChart) => boolean | void;
    beforeshow: (thisCmp: ColumnChart) => boolean | void;
    beforestaterestore: (thisCmp: ColumnChart, state: object) => boolean | void;
    beforestatesave: (thisCmp: ColumnChart, state: object) => boolean | void;
    destroy: (thisCmp: ColumnChart) => boolean | void;
    disable: (thisCmp: ColumnChart) => boolean | void;
    enable: (thisCmp: ColumnChart) => boolean | void;
    hide: (thisCmp: ColumnChart) => boolean | void;
    initialize: (thisCmp: ColumnChart) => boolean | void;
    move: (thisCmp: ColumnChart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: ColumnChart) => boolean | void;
    removed: (thisCmp: ColumnChart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ColumnChart) => boolean | void;
    resize: (thisCmp: ColumnChart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: ColumnChart) => boolean | void;
    staterestore: (thisCmp: ColumnChart, state: object) => boolean | void;
    statesave: (thisCmp: ColumnChart, state: object) => boolean | void;
  }
}
