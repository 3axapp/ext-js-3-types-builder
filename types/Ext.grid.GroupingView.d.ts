declare namespace Ext.grid {
  class GroupingView extends Ext.grid.GridView {

    public constructor(config: IGroupingViewConfig);

    public addListener<T extends IGroupingViewEvents = IGroupingViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private afterRenderUI(): void;

    private beforeMenuShow(): void;

    private canGroup(): void;

    public collapseAllGroups(): void;

    private constructId(value: object, field: object, idx: object): void;

    private doGroupEnd(buf: object, g: object, cs: object, ds: object, colCount: object): void;

    private doGroupStart(buf: object, g: object, cs: object, ds: object, colCount: object): void;

    private doRender(columns: unknown[], records: unknown[], store: Ext.data.Store, startRow: number, colCount: number, stripe: boolean): string;

    public expandAllGroups(): void;

    private findGroup(el: object): void;

    public fireEvent<T extends IGroupingViewEvents = IGroupingViewEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getGroup(v: object, r: object, groupRenderer: object, rowIndex: object, colIndex: object, ds: object): void;

    private getGroupField(): void;

    public getGroupId(value: string): string;

    private getGroups(): void;

    private getPrefix(field: object): void;

    private getRows(): void;

    public hasListener<T extends IGroupingViewEvents = IGroupingViewEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initTemplates(): void;

    public on<T extends IGroupingViewEvents = IGroupingViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAdd(ds: object, records: object, index: object): void;

    private onAllColumnWidthsUpdated(ws: object, tw: object): void;

    private onBeforeRowSelect(sm: object, rowIndex: object): void;

    private onColumnHiddenUpdated(col: object, hidden: object, tw: object): void;

    private onColumnWidthUpdated(col: object, w: object, tw: object): void;

    private onGroupByClick(): void;

    private onLayout(): void;

    private onRemove(ds: object, record: object, index: object, isUpdate: object): void;

    private onShowGroupsClick(mi: object, checked: object): void;

    private processEvent(name: object, e: object): void;

    private refreshRow(record: object): void;

    public removeListener<T extends IGroupingViewEvents = IGroupingViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private renderRows(startRow: number, endRow: number): void;

    private renderUI(): void;

    public toggleAllGroups(expanded?: boolean): void;

    public toggleGroup(groupId: string, expanded?: boolean): void;

    public toggleRowIndex(rowIndex: number, expanded?: boolean): void;

    public un<T extends IGroupingViewEvents = IGroupingViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateGroupWidths(): void;
  }

  interface IGroupingViewConfig {
    autoFill?: boolean,
    cancelEditOnToggle?: boolean,
    cellSelector?: string,
    cellSelectorDepth?: number,
    columnsText?: string,
    deferEmptyText?: boolean,
    emptyGroupText?: string,
    emptyText?: string,
    enableGrouping?: boolean,
    enableGroupingMenu?: boolean,
    enableNoGroups?: boolean,
    enableRowBody?: boolean,
    forceFit?: boolean,
    groupByText?: string,
    groupMode?: string,
    groupRenderer?: Function,
    groupTextTpl?: string,
    headerMenuOpenCls?: string,
    headersDisabled?: boolean,
    hideGroupedColumn?: boolean,
    hideSortIcons?: boolean,
    ignoreAdd?: boolean,
    listeners?: object,
    markDirty?: boolean,
    rowBodySelector?: string,
    rowBodySelectorDepth?: number,
    rowOverCls?: string,
    rowSelector?: string,
    rowSelectorDepth?: number,
    scrollOffset?: number,
    selectedRowClass?: string,
    showGroupName?: boolean,
    showGroupsText?: string,
    sortAscText?: string,
    sortClasses?: unknown[],
    sortDescText?: string,
    startCollapsed?: boolean,
  }

  interface IGroupingViewEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforerefresh: (view: Ext.grid.GridView) => boolean | void;
    beforerowremoved: (view: Ext.grid.GridView, rowIndex: number, record: Ext.data.Record) => boolean | void;
    beforerowsinserted: (view: Ext.grid.GridView, firstRow: number, lastRow: number) => boolean | void;
    refresh: (view: Ext.grid.GridView) => boolean | void;
    rowremoved: (view: Ext.grid.GridView, rowIndex: number, record: Ext.data.Record) => boolean | void;
    rowsinserted: (view: Ext.grid.GridView, firstRow: number, lastRow: number) => boolean | void;
    rowupdated: (view: Ext.grid.GridView, firstRow: number, record: Ext.data.record) => boolean | void;
  }
}
