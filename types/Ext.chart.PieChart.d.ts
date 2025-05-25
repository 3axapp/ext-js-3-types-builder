declare namespace Ext.chart {
  class PieChart extends Ext.chart.Chart {

    private type: string;

    public constructor(config: IPieChartConfig);

    public addListener<T extends IPieChartEvents = IPieChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IPieChartEvents = IPieChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IPieChartEvents = IPieChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IPieChartEvents = IPieChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onSwfReady(isReset: object): void;

    public removeListener<T extends IPieChartEvents = IPieChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setCategoryField(field: object): void;

    private setDataField(field: object): void;

    public un<T extends IPieChartEvents = IPieChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IPieChartConfig {
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

  interface IPieChartEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: PieChart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: PieChart) => boolean | void;
    beforedestroy: (thisCmp: PieChart) => boolean | void;
    beforehide: (thisCmp: PieChart) => boolean | void;
    beforerefresh: (thisCmp: PieChart) => boolean | void;
    beforerender: (thisCmp: PieChart) => boolean | void;
    beforeshow: (thisCmp: PieChart) => boolean | void;
    beforestaterestore: (thisCmp: PieChart, state: object) => boolean | void;
    beforestatesave: (thisCmp: PieChart, state: object) => boolean | void;
    destroy: (thisCmp: PieChart) => boolean | void;
    disable: (thisCmp: PieChart) => boolean | void;
    enable: (thisCmp: PieChart) => boolean | void;
    hide: (thisCmp: PieChart) => boolean | void;
    initialize: (thisCmp: PieChart) => boolean | void;
    move: (thisCmp: PieChart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: PieChart) => boolean | void;
    removed: (thisCmp: PieChart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: PieChart) => boolean | void;
    resize: (thisCmp: PieChart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: PieChart) => boolean | void;
    staterestore: (thisCmp: PieChart, state: object) => boolean | void;
    statesave: (thisCmp: PieChart, state: object) => boolean | void;
  }
}
