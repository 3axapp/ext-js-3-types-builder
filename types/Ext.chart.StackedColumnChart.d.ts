declare namespace Ext.chart {
  class StackedColumnChart extends Ext.chart.CartesianChart {

    private type: string;

    public constructor(config: IStackedColumnChartConfig);

    public addListener<T extends IStackedColumnChartEvents = IStackedColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IStackedColumnChartEvents = IStackedColumnChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IStackedColumnChartEvents = IStackedColumnChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IStackedColumnChartEvents = IStackedColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IStackedColumnChartEvents = IStackedColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IStackedColumnChartEvents = IStackedColumnChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IStackedColumnChartConfig {
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

  interface IStackedColumnChartEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: StackedColumnChart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: StackedColumnChart) => boolean | void;
    beforedestroy: (thisCmp: StackedColumnChart) => boolean | void;
    beforehide: (thisCmp: StackedColumnChart) => boolean | void;
    beforerefresh: (thisCmp: StackedColumnChart) => boolean | void;
    beforerender: (thisCmp: StackedColumnChart) => boolean | void;
    beforeshow: (thisCmp: StackedColumnChart) => boolean | void;
    beforestaterestore: (thisCmp: StackedColumnChart, state: object) => boolean | void;
    beforestatesave: (thisCmp: StackedColumnChart, state: object) => boolean | void;
    destroy: (thisCmp: StackedColumnChart) => boolean | void;
    disable: (thisCmp: StackedColumnChart) => boolean | void;
    enable: (thisCmp: StackedColumnChart) => boolean | void;
    hide: (thisCmp: StackedColumnChart) => boolean | void;
    initialize: (thisCmp: StackedColumnChart) => boolean | void;
    move: (thisCmp: StackedColumnChart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: StackedColumnChart) => boolean | void;
    removed: (thisCmp: StackedColumnChart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: StackedColumnChart) => boolean | void;
    resize: (thisCmp: StackedColumnChart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: StackedColumnChart) => boolean | void;
    staterestore: (thisCmp: StackedColumnChart, state: object) => boolean | void;
    statesave: (thisCmp: StackedColumnChart, state: object) => boolean | void;
  }
}
