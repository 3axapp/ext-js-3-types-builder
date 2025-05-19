declare namespace Ext.grid {
  class CellSelectionModel extends Ext.grid.AbstractSelectionModel {

    public constructor(config: ICellSelectionModelConfig);

    private acceptsNav(row: object, col: object, cm: object): void;

    public addListener<T extends ICellSelectionModelEvents = ICellSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeEdit(e: object): void;

    public clearSelections(preventNotify: boolean): void;

    public fireEvent<T extends ICellSelectionModelEvents = ICellSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getSelectedCell(): unknown[];

    public hasListener<T extends ICellSelectionModelEvents = ICellSelectionModelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hasSelection(): boolean;

    private isSelectable(rowIndex: object, colIndex: object, cm: object): void;

    public on<T extends ICellSelectionModelEvents = ICellSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onEditorKey(field: object, e: object): void;

    private onRowUpdated(v: object, index: object, r: object): void;

    private onViewChange(): void;

    public removeListener<T extends ICellSelectionModelEvents = ICellSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public select(rowIndex: number, colIndex: number, preventViewNotify?: boolean, preventFocus?: boolean, r?: Ext.data.Record): void;

    public un<T extends ICellSelectionModelEvents = ICellSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICellSelectionModelConfig {
    listeners?: object,
  }

  interface ICellSelectionModelEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforecellselect: (thisCmp: CellSelectionModel, rowIndex: number, colIndex: number) => boolean | void;
    cellselect: (thisCmp: CellSelectionModel, rowIndex: number, colIndex: number) => boolean | void;
    selectionchange: (thisCmp: CellSelectionModel, selection: object) => boolean | void;
  }
}
