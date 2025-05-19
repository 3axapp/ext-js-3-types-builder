declare namespace Ext.grid {
  class ColumnModel extends Ext.util.Observable {

    public config: unknown[];

    public constructor(config: IColumnModelConfig);

    public addListener<T extends IColumnModelEvents = IColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public destroy(): void;

    public findColumnIndex(col: string): number;

    public fireEvent<T extends IColumnModelEvents = IColumnModelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getCellEditor(colIndex: number, rowIndex: number): Ext.Editor;

    private getColumnAt(index: object): void;

    public getColumnById(id: string): object;

    public getColumnCount(visibleOnly: boolean): number;

    public getColumnHeader(col: number): string;

    public getColumnId(index: number): string;

    public getColumnTooltip(col: number): string;

    public getColumnWidth(col: number): number;

    public getColumnsBy(fn: Function, scope?: object): unknown[];

    public getDataIndex(col: number): string;

    public getIndexById(id: string): number;

    public getRenderer(col: number): Function;

    private getRendererScope(col: object): void;

    public getTotalWidth(includeHidden: boolean): number;

    public hasListener<T extends IColumnModelEvents = IColumnModelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isCellEditable(colIndex: number, rowIndex: number): boolean;

    public isFixed(colIndex: number): boolean;

    public isHidden(colIndex: number): boolean;

    public isMenuDisabled(col: number): boolean;

    public isResizable(colIndex: object): boolean;

    public isSortable(col: number): boolean;

    public moveColumn(oldIndex: number, newIndex: number): void;

    public on<T extends IColumnModelEvents = IColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IColumnModelEvents = IColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setColumnHeader(col: number, header: string): void;

    public setColumnTooltip(col: number, tooltip: string): void;

    public setColumnWidth(col: number, width: number, suppressEvent: boolean): void;

    public setConfig(config: unknown[], initial: boolean): void;

    public setDataIndex(col: number, dataIndex: string): void;

    public setEditable(col: number, editable: boolean): void;

    public setEditor(col: number, editor: object): void;

    public setHidden(colIndex: number, hidden: boolean): void;

    public setRenderer(col: number, fn: Function): void;

    private setState(col: object, state: object): void;

    public un<T extends IColumnModelEvents = IColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IColumnModelConfig {
    columns?: unknown[],
    defaultSortable?: boolean,
    defaultWidth?: number,
    defaults?: object,
    listeners?: object,
  }

  interface IColumnModelEvents extends Record<string, (...args: any[]) => boolean | void> {
    columnmoved: (thisCmp: ColumnModel, oldIndex: number, newIndex: number) => boolean | void;
    configchange: (thisCmp: ColumnModel) => boolean | void;
    headerchange: (thisCmp: ColumnModel, columnIndex: number, newText: string) => boolean | void;
    hiddenchange: (thisCmp: ColumnModel, columnIndex: number, hidden: boolean) => boolean | void;
    widthchange: (thisCmp: ColumnModel, columnIndex: number, newWidth: number) => boolean | void;
  }
}
