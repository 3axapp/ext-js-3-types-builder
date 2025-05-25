declare namespace Ext.grid {
  class PivotAxis extends Ext.Component {

    public constructor(config: IPivotAxisConfig);

    public addListener<T extends IPivotAxisEvents = IPivotAxisEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private buildHeaders(): unknown[];

    public fireEvent<T extends IPivotAxisEvents = IPivotAxisEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getRecordInfo(record: object): void;

    private getTuples(): unknown[];

    public hasListener<T extends IPivotAxisEvents = IPivotAxisEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IPivotAxisEvents = IPivotAxisEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(ct: object, position: object): void;

    public removeListener<T extends IPivotAxisEvents = IPivotAxisEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private renderHorizontalRows(): object;

    private renderVerticalRows(): object;

    public setDimensions(dimensions: unknown[]): void;

    public un<T extends IPivotAxisEvents = IPivotAxisEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IPivotAxisConfig {
    allowDomMove?: boolean,
    applyTo?: unknown,
    autoEl?: unknown,
    autoShow?: boolean,
    bubbleEvents?: unknown[],
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaultHeaderWidth?: number,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
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
    orientation?: string,
    overCls?: string,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    xtype?: string,
  }

  interface IPivotAxisEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: PivotAxis, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: PivotAxis) => boolean | void;
    beforedestroy: (thisCmp: PivotAxis) => boolean | void;
    beforehide: (thisCmp: PivotAxis) => boolean | void;
    beforerender: (thisCmp: PivotAxis) => boolean | void;
    beforeshow: (thisCmp: PivotAxis) => boolean | void;
    beforestaterestore: (thisCmp: PivotAxis, state: object) => boolean | void;
    beforestatesave: (thisCmp: PivotAxis, state: object) => boolean | void;
    destroy: (thisCmp: PivotAxis) => boolean | void;
    disable: (thisCmp: PivotAxis) => boolean | void;
    enable: (thisCmp: PivotAxis) => boolean | void;
    hide: (thisCmp: PivotAxis) => boolean | void;
    removed: (thisCmp: PivotAxis, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: PivotAxis) => boolean | void;
    show: (thisCmp: PivotAxis) => boolean | void;
    staterestore: (thisCmp: PivotAxis, state: object) => boolean | void;
    statesave: (thisCmp: PivotAxis, state: object) => boolean | void;
  }
}
