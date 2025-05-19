declare namespace Ext.grid {
  class DateColumn extends Ext.grid.Column {

    public constructor(config: IDateColumnConfig);

    public addListener<T extends IDateColumnEvents = IDateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IDateColumnEvents = IDateColumnEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IDateColumnEvents = IDateColumnEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IDateColumnEvents = IDateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IDateColumnEvents = IDateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IDateColumnEvents = IDateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IDateColumnConfig {
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

  interface IDateColumnEvents extends Record<string, (...args: any[]) => boolean | void> {
    click: (thisCmp: DateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: DateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: DateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    mousedown: (thisCmp: DateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
  }
}
