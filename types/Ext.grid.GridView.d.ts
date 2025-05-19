declare namespace Ext.grid {
  class GridView extends Ext.util.Observable {

    public Ext: masterTpl;

    public bodyTpl: Ext.Template;

    private borderWidth: number;

    public cellTpl: Ext.Template;

    public dragZone: Ext.grid.GridDragZone;

    private firstRowCls: string;

    private hdCls: string;

    public headerTpl: Ext.Template;

    private lastRowCls: string;

    public mainBody: Ext.Element;

    private rowClsRe: RegExp;

    private tdClass: string;

    public constructor(config: IGridViewConfig);

    public addListener<T extends IGridViewEvents = IGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private addRowClass(rowId: object, cls: object): void;

    private afterMove(colIndex: object): void;

    private afterRender(): void;

    private afterRenderUI(): void;

    private applyEmptyText(): void;

    private autoExpand(preventUpdate: boolean): void;

    private beforeColMenuShow(): void;

    private beforeUpdate(): void;

    private bind(d: object, c: object): void;

    private clearHeaderSortState(): void;

    private deleteRows(dm: object, firstRow: object, lastRow: object): void;

    private destroy(): void;

    private doRender(columns: unknown[], records: unknown[], store: Ext.data.Store, startRow: number, colCount: number, stripe: boolean): string;

    private ensureVisible(row: object, col: object, hscroll: object): void;

    private findCell(el: object): void;

    public findCellIndex(el: HTMLElement): number;

    private findHeaderCell(el: object): void;

    private findHeaderIndex(el: object): void;

    public findRow(el: HTMLElement): HTMLElement;

    public findRowBody(el: HTMLElement): HTMLElement;

    public findRowIndex(el: HTMLElement): number;

    public fireEvent<T extends IGridViewEvents = IGridViewEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private fitColumns(preventRefresh: boolean, onlyExpand: null, omitColumn: number): boolean;

    private fly(el: object): void;

    public focusCell(row: number, col: number): void;

    public focusRow(row: number): void;

    public getCell(row: number, col: number): HTMLElement;

    private getCellIndex(el: object): void;

    private getColumnData(): unknown[];

    private getColumnId(index: object): void;

    private getColumnStyle(colIndex: number, isHeader: boolean): string;

    private getColumnTooltip(i: object): void;

    private getColumnWidth(column: object): number;

    private getEditorParent(): void;

    public getGridInnerWidth(): number;

    public getHeaderCell(index: number): HTMLElement;

    private getOffsetWidth(): void;

    private getPreviousVisible(index: number): number | undefined;

    private getResolvedXY(resolved: object): unknown[];

    public getRow(index: number): HTMLElement;

    public getRowClass(record: Ext.data.Record, index: number, rowParams: object, store: Store): string;

    private getRows(): void;

    private getScrollOffset(): void;

    private getScrollState(): void;

    private getTotalWidth(): string;

    private handleHdDown(e: object, target: object): void;

    private handleHdMenuClick(item: object): void;

    public handleHdMenuClickDefault(item: Ext.menu.BaseItem): void;

    private handleHdMove(e: object): void;

    private handleHdOut(e: object, target: object): void;

    private handleHdOver(e: object, target: object): void;

    private handleWheel(e: object): void;

    public hasListener<T extends IGridViewEvents = IGridViewEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private hasRows(): boolean;

    private init(grid: object): void;

    private initData(newStore: Ext.data.Store, newColModel: Ext.grid.ColumnModel): void;

    private initElements(): void;

    private initEvents(): void;

    private initTemplates(): void;

    private initUI(grid: object): void;

    private insertRows(dm: object, firstRow: object, lastRow: object, isUpdate: object): void;

    private isHideableColumn(c: object): void;

    private isMenuDisabled(cellIndex: number, el: Ext.Element): void;

    private layout(initial: object): void;

    public on<T extends IGridViewEvents = IGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAdd(store: object, records: object, index: object): void;

    private onAllColumnWidthsUpdated(ws: object, tw: object): void;

    private onCellDeselect(row: object, col: object): void;

    private onCellSelect(row: object, col: object): void;

    private onClear(): void;

    private onColConfigChange(): void;

    private onColWidthChange(cm: object, col: object, width: object): void;

    private onColumnHiddenUpdated(col: object, hidden: object, tw: object): void;

    private onColumnMove(cm: object, oldIndex: object, newIndex: object): void;

    private onColumnSplitterMoved(cellIndex: object, width: object): void;

    private onColumnWidthUpdated(col: object, w: object, tw: object): void;

    private onDataChange(): void;

    private onDenyColumnHide(): void;

    private onHeaderChange(cm: object, col: object, text: object): void;

    private onHeaderClick(g: object, index: object): void;

    private onHiddenChange(cm: object, col: object, hidden: object): void;

    private onLayout(vw: object, vh: object): void;

    private onLoad(): void;

    private onRemove(store: object, record: object, index: object, isUpdate: object): void;

    private onRowDeselect(row: object): void;

    private onRowOut(e: object, target: object): void;

    private onRowOver(e: object, target: object): void;

    private onRowSelect(row: object): void;

    private onUpdate(store: object, record: object): void;

    private processEvent(name: object, e: object): void;

    private processRows(startRow: number): void;

    public refresh(headersToo?: boolean): void;

    private refreshRow(record: object): void;

    public removeListener<T extends IGridViewEvents = IGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private removeRow(row: object): void;

    private removeRowClass(row: object, cls: object): void;

    private removeRows(firstRow: object, lastRow: object): void;

    private render(): void;

    private renderBody(): void;

    private renderHeaders(): string;

    private renderRows(startRow: number, endRow: number): void;

    private renderUI(): void;

    private resolveCell(row: object, col: object, hscroll: object): void;

    private restoreScroll(state: object): void;

    public scrollToTop(): void;

    private syncFocusEl(row: object, col: object, hscroll: object): void;

    private syncHeaderScroll(): void;

    private syncScroll(): void;

    public un<T extends IGridViewEvents = IGridViewEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private updateAllColumnWidths(): void;

    private updateColumnHidden(col: number, hidden: boolean): void;

    private updateColumnText(col: object, text: object): void;

    private updateColumnWidth(column: number): void;

    private updateHeaderSortState(): void;

    private updateHeaderWidth(updateMain: boolean): void;

    private updateHeaders(): void;

    private updateSortIcon(col: object, dir: object): void;
  }

  interface IGridViewConfig {
    autoFill?: boolean,
    cellSelector?: string,
    cellSelectorDepth?: number,
    columnsText?: string,
    deferEmptyText?: boolean,
    emptyText?: string,
    enableRowBody?: boolean,
    forceFit?: boolean,
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
  }

  interface IGridViewEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforerefresh: (view: Ext.grid.GridView) => boolean | void;
    beforerowremoved: (view: Ext.grid.GridView, rowIndex: number, record: Ext.data.Record) => boolean | void;
    beforerowsinserted: (view: Ext.grid.GridView, firstRow: number, lastRow: number) => boolean | void;
    refresh: (view: Ext.grid.GridView) => boolean | void;
    rowremoved: (view: Ext.grid.GridView, rowIndex: number, record: Ext.data.Record) => boolean | void;
    rowsinserted: (view: Ext.grid.GridView, firstRow: number, lastRow: number) => boolean | void;
    rowupdated: (view: Ext.grid.GridView, firstRow: number, record: Ext.data.record) => boolean | void;
  }
}
