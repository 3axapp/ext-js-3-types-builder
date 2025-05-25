declare namespace Ext.grid {
  class PivotGridView extends Ext.grid.GridView {

    public Ext: masterTpl;

    public colHeaderCellCls: string;

    public headerTitleEl: Ext.Element;

    public rowHeadersEl: Ext.Element;

    public constructor(config: IPivotGridViewConfig);

    public addListener<T extends IPivotGridViewEvents = IPivotGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IPivotGridViewEvents = IPivotGridViewEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fitColumns(): void;

    private getCellIndex(el: HTMLElement): void;

    public getColumnHeaders(): unknown[];

    private getGridInnerWidth(): void;

    public getRowHeaders(): unknown[];

    private getTotalColumnHeaderHeight(): number;

    public getTotalRowHeaderWidth(): number;

    public hasListener<T extends IPivotGridViewEvents = IPivotGridViewEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initElements(): void;

    private initTemplates(): void;

    private isMenuDisabled(cellIndex: object, el: object): void;

    public on<T extends IPivotGridViewEvents = IPivotGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onLayout(width: object, height: object): void;

    public refresh(headersToo?: boolean): void;

    public removeListener<T extends IPivotGridViewEvents = IPivotGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private renderGroupColumnHeaders(): void;

    private renderGroupRowHeaders(): void;

    private renderHeaders(): void;

    private renderRows(startRow: number, endRow: number): void;

    private renderUI(): void;

    private resizeAllRows(width: number): void;

    private resizeColumnHeaders(width: number): void;

    private resizeRowHeaders(): void;

    public setTitle(title: string): void;

    public un<T extends IPivotGridViewEvents = IPivotGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateHeaders(): void;
  }

  interface IPivotGridViewConfig {
    autoFill?: boolean,
    cellSelector?: string,
    cellSelectorDepth?: number,
    columnsText?: string,
    deferEmptyText?: boolean,
    emptyText?: string,
    enableRowBody?: boolean,
    forceFit?: boolean,
    getCellCls?: Function,
    headerMenuOpenCls?: string,
    headersDisabled?: boolean,
    hideSortIcons?: boolean,
    listeners?: object,
    markDirty?: boolean,
    rowBodySelector?: string,
    rowBodySelectorDepth?: number,
    rowOverCls?: string,
    rowSelector?: string,
    rowSelectorDepth?: number,
    scrollOffset?: number,
    selectedRowClass?: string,
    sortAscText?: string,
    sortClasses?: unknown[],
    sortDescText?: string,
    title?: string,
  }

  interface IPivotGridViewEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforerefresh: (view: Ext.grid.GridView) => boolean | void;
    beforerowremoved: (view: Ext.grid.GridView, rowIndex: number, record: Ext.data.Record) => boolean | void;
    beforerowsinserted: (view: Ext.grid.GridView, firstRow: number, lastRow: number) => boolean | void;
    refresh: (view: Ext.grid.GridView) => boolean | void;
    rowremoved: (view: Ext.grid.GridView, rowIndex: number, record: Ext.data.Record) => boolean | void;
    rowsinserted: (view: Ext.grid.GridView, firstRow: number, lastRow: number) => boolean | void;
    rowupdated: (view: Ext.grid.GridView, firstRow: number, record: Ext.data.record) => boolean | void;
  }
}
