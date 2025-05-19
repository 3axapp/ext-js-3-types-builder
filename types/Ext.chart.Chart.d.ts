declare namespace Ext.chart {
  class Chart extends Ext.FlashComponent {

    private disableCacheParam: string;

    private refreshBuffer: number;

    public static CHART_URL: string;

    public constructor(config: IChartConfig);

    public addListener<T extends IChartEvents = IChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public bindStore(store: Store): void;

    private createFnProxy(fn: object): void;

    private delayRefresh(): void;

    public fireEvent<T extends IChartEvents = IChartEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getFunctionRef(val: object): void;

    public hasListener<T extends IChartEvents = IChartEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends IChartEvents = IChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onSwfReady(isReset: object): void;

    private refresh(): void;

    private removeFnProxy(fn: object): void;

    public removeListener<T extends IChartEvents = IChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setCategoryNames(names: object): void;

    private setLegendRenderer(fn: object, scope: object): void;

    private setSeries(series: object): void;

    public setSeriesStyles(styles: object): void;

    public setStyle(name: object, value: object): void;

    public setStyles(styles: object): void;

    private setTipRenderer(fn: object, scope: object): void;

    public un<T extends IChartEvents = IChartEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IChartConfig {
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

  interface IChartEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Chart, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Chart) => boolean | void;
    beforedestroy: (thisCmp: Chart) => boolean | void;
    beforehide: (thisCmp: Chart) => boolean | void;
    beforerefresh: (thisCmp: Chart) => boolean | void;
    beforerender: (thisCmp: Chart) => boolean | void;
    beforeshow: (thisCmp: Chart) => boolean | void;
    beforestaterestore: (thisCmp: Chart, state: object) => boolean | void;
    beforestatesave: (thisCmp: Chart, state: object) => boolean | void;
    destroy: (thisCmp: Chart) => boolean | void;
    disable: (thisCmp: Chart) => boolean | void;
    enable: (thisCmp: Chart) => boolean | void;
    hide: (thisCmp: Chart) => boolean | void;
    initialize: (thisCmp: Chart) => boolean | void;
    move: (thisCmp: Chart, x: number, y: number) => boolean | void;
    refresh: (thisCmp: Chart) => boolean | void;
    removed: (thisCmp: Chart, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Chart) => boolean | void;
    resize: (thisCmp: Chart, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Chart) => boolean | void;
    staterestore: (thisCmp: Chart, state: object) => boolean | void;
    statesave: (thisCmp: Chart, state: object) => boolean | void;
  }
}
