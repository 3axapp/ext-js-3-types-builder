declare namespace Ext.grid {
  class RowSelectionModel extends Ext.grid.AbstractSelectionModel {

    public constructor(config: IRowSelectionModelConfig);

    private acceptsNav(row: object, col: object, cm: object): void;

    public addListener<T extends IRowSelectionModelEvents = IRowSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public clearSelections(fast?: boolean): void;

    public deselectRange(startRow: number, endRow: number): void;

    public deselectRow(row: number, preventViewNotify?: boolean): void;

    private destroy(): void;

    public each(fn: Function, scope?: object): boolean;

    public fireEvent<T extends IRowSelectionModelEvents = IRowSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getCount(): number;

    public getSelected(): Ext.data.Record<R>;

    public getSelections(): unknown[];

    private handleMouseDown(g: object, rowIndex: object, e: object): void;

    public hasListener<T extends IRowSelectionModelEvents = IRowSelectionModelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hasNext(): boolean;

    public hasPrevious(): boolean;

    public hasSelection(): boolean;

    private initEvents(): void;

    public isIdSelected(id: string): boolean;

    public isSelected(index: number | Ext.data.Record<R>): boolean;

    public on<T extends IRowSelectionModelEvents = IRowSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onEditorKey(field: object, e: object): void;

    private onEditorSelect(row: object, lastRow: object): void;

    private onKeyPress(e: object, name: object): void;

    private onRefresh(): void;

    private onRemove(v: object, index: object, r: object): void;

    private onRowUpdated(v: object, index: object, r: object): void;

    public removeListener<T extends IRowSelectionModelEvents = IRowSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public selectAll(): void;

    public selectFirstRow(): void;

    public selectLastRow(keepExisting?: boolean): void;

    public selectNext(keepExisting?: boolean): boolean;

    public selectPrevious(keepExisting?: boolean): boolean;

    public selectRange(startRow: number, endRow: number, keepExisting?: boolean): void;

    public selectRecords(records: unknown[], keepExisting?: boolean): void;

    public selectRow(row: number, keepExisting?: boolean, preventViewNotify?: boolean): void;

    public selectRows(rows: unknown[], keepExisting?: boolean): void;

    public un<T extends IRowSelectionModelEvents = IRowSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IRowSelectionModelConfig {
    listeners?: object,
    moveEditorOnEnter?: boolean,
    singleSelect?: boolean,
  }

  interface IRowSelectionModelEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforerowselect: (thisCmp: RowSelectionModel, rowIndex: number, keepExisting: boolean, record: Ext.data.Record<R>) => boolean | void;
    rowdeselect: (thisCmp: RowSelectionModel, rowIndex: number, record: Ext.data.Record<R>) => boolean | void;
    rowselect: (thisCmp: RowSelectionModel, rowIndex: number, r: Ext.data.Record) => boolean | void;
    selectionchange: (thisCmp: RowSelectionModel) => boolean | void;
  }
}
