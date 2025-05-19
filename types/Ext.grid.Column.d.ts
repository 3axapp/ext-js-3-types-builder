declare namespace Ext.grid {
  class Column extends Ext.util.Observable {

    public renderer: Function;

    public constructor(config: IColumnConfig);

    public addListener<T extends IColumnEvents = IColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private destroy(): void;

    public fireEvent<T extends IColumnEvents = IColumnEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getCellEditor(rowIndex: number): Ext.Editor;

    private getEditor(rowIndex: object): void;

    public hasListener<T extends IColumnEvents = IColumnEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IColumnEvents = IColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private processEvent(name: object, e: object, grid: object, rowIndex: object, colIndex: object): void;

    public removeListener<T extends IColumnEvents = IColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setEditor(editor: Ext.Editor | Ext.form.Field): void;

    public un<T extends IColumnEvents = IColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IColumnConfig {
    align?: string,
    css?: string,
    dataIndex?: string,
    editable?: boolean,
    editor?: Ext.form.Field,
    emptyGroupText?: string,
    fixed?: boolean,
    groupName?: string,
    groupRenderer?: Function,
    groupable?: boolean,
    header?: string,
    hidden?: boolean,
    hideable?: boolean,
    id?: string,
    listeners?: object,
    menuDisabled?: boolean,
    renderer?: unknown,
    resizable?: boolean,
    scope?: object,
    sortable?: boolean,
    tooltip?: string,
    width?: number,
    xtype?: string,
  }

  interface IColumnEvents extends Record<string, (...args: any[]) => boolean | void> {
    click: (thisCmp: Column, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: Column, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: Column, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    mousedown: (thisCmp: Column, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
  }
}
