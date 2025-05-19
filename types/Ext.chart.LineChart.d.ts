declare namespace Ext.chart {
  class LineChart extends Ext.chart.CartesianChart {

    private type: string;

    public constructor(config: ILineChartConfig);

    public addListener<T extends ILineChartEvents = ILineChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ILineChartEvents = ILineChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ILineChartEvents = ILineChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ILineChartEvents = ILineChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends ILineChartEvents = ILineChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ILineChartEvents = ILineChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ILineChartConfig {
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

  interface ILineChartEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: LineChart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: LineChart) => boolean | void;
    beforedestroy: (thisCmp: LineChart) => boolean | void;
    beforehide: (thisCmp: LineChart) => boolean | void;
    beforerefresh: (thisCmp: LineChart) => boolean | void;
    beforerender: (thisCmp: LineChart) => boolean | void;
    beforeshow: (thisCmp: LineChart) => boolean | void;
    beforestaterestore: (thisCmp: LineChart, state: object) => boolean | void;
    beforestatesave: (thisCmp: LineChart, state: object) => boolean | void;
    destroy: (thisCmp: LineChart) => boolean | void;
    disable: (thisCmp: LineChart) => boolean | void;
    enable: (thisCmp: LineChart) => boolean | void;
    hide: (thisCmp: LineChart) => boolean | void;
    initialize: (thisCmp: LineChart) => boolean | void;
    move: (thisCmp: LineChart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: LineChart) => boolean | void;
    removed: (thisCmp: LineChart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: LineChart) => boolean | void;
    resize: (thisCmp: LineChart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: LineChart) => boolean | void;
    staterestore: (thisCmp: LineChart, state: object) => boolean | void;
    statesave: (thisCmp: LineChart, state: object) => boolean | void;
  }
}
