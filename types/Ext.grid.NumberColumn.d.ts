declare namespace Ext.grid {
  class NumberColumn extends Ext.grid.Column {

    public constructor(config: INumberColumnConfig);

    public addListener<T extends INumberColumnEvents = INumberColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends INumberColumnEvents = INumberColumnEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends INumberColumnEvents = INumberColumnEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends INumberColumnEvents = INumberColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends INumberColumnEvents = INumberColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends INumberColumnEvents = INumberColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface INumberColumnConfig {
    align?: string,
    css?: string,
    dataIndex?: string,
    editable?: boolean,
    editor?: Ext.form.Field,
    emptyGroupText?: string,
    fixed?: boolean,
    format?: string,
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

  interface INumberColumnEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    click: (thisCmp: NumberColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: NumberColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: NumberColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    mousedown: (thisCmp: NumberColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
  }
}
