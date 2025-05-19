declare namespace Ext.grid {
  class CheckboxSelectionModel extends Ext.grid.RowSelectionModel {

    private dataIndex: string;

    private fixed: boolean;

    private hideable: boolean;

    private id: string;

    private isColumn: boolean;

    private menuDisabled: boolean;

    public constructor(config: ICheckboxSelectionModelConfig);

    public addListener<T extends ICheckboxSelectionModelEvents = ICheckboxSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ICheckboxSelectionModelEvents = ICheckboxSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ICheckboxSelectionModelEvents = ICheckboxSelectionModelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initEvents(): void;

    public on<T extends ICheckboxSelectionModelEvents = ICheckboxSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onEditorSelect(row: object, lastRow: object): void;

    private onHdMouseDown(e: object, t: object): void;

    private onMouseDown(e: object, t: object): void;

    private processEvent(name: object, e: object, grid: object, rowIndex: object, colIndex: object): void;

    public removeListener<T extends ICheckboxSelectionModelEvents = ICheckboxSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private renderer(v: object, p: object, record: object): void;

    public un<T extends ICheckboxSelectionModelEvents = ICheckboxSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICheckboxSelectionModelConfig {
    checkOnly?: boolean,
    header?: string,
    listeners?: object,
    moveEditorOnEnter?: boolean,
    singleSelect?: boolean,
    sortable?: boolean,
    width?: number,
  }

  interface ICheckboxSelectionModelEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforerowselect: (thisCmp: CheckboxSelectionModel, rowIndex: number, keepExisting: boolean, record: Ext.data.Record) => boolean | void;
    rowdeselect: (thisCmp: CheckboxSelectionModel, rowIndex: number, record: Ext.data.Record) => boolean | void;
    rowselect: (thisCmp: CheckboxSelectionModel, rowIndex: number, r: Ext.data.Record) => boolean | void;
    selectionchange: (thisCmp: CheckboxSelectionModel) => boolean | void;
  }
}
