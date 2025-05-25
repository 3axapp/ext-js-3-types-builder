declare namespace Ext.grid {
  class PropertyColumnModel extends Ext.grid.ColumnModel {

    private dateFormat: string;

    private falseText: string;

    private nameText: string;

    private trueText: string;

    private valueText: string;

    public constructor(config: IPropertyColumnModelConfig);

    public addListener<T extends IPropertyColumnModelEvents = IPropertyColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public destroy(): void;

    private destroyEditors(editors: object): void;

    public fireEvent<T extends IPropertyColumnModelEvents = IPropertyColumnModelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getCellEditor(colIndex: object, rowIndex: object): Ext.Editor;

    private getPropertyName(name: object): void;

    public getRenderer(col: object): Function;

    public hasListener<T extends IPropertyColumnModelEvents = IPropertyColumnModelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isCellEditable(colIndex: object, rowIndex: object): boolean;

    public on<T extends IPropertyColumnModelEvents = IPropertyColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IPropertyColumnModelEvents = IPropertyColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private renderBool(bVal: object): void;

    private renderCell(val: object, meta: object, rec: object): void;

    private renderDate(dateVal: object): void;

    private renderProp(v: object): void;

    public un<T extends IPropertyColumnModelEvents = IPropertyColumnModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IPropertyColumnModelConfig {
    columns?: unknown[],
    defaultSortable?: boolean,
    defaultWidth?: number,
    defaults?: object,
    listeners?: object,
  }

  interface IPropertyColumnModelEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    columnmoved: (thisCmp: PropertyColumnModel, oldIndex: number, newIndex: number) => boolean | void;
    configchange: (thisCmp: PropertyColumnModel) => boolean | void;
    headerchange: (thisCmp: PropertyColumnModel, columnIndex: number, newText: string) => boolean | void;
    hiddenchange: (thisCmp: PropertyColumnModel, columnIndex: number, hidden: boolean) => boolean | void;
    widthchange: (thisCmp: PropertyColumnModel, columnIndex: number, newWidth: number) => boolean | void;
  }
}
