declare namespace Ext.grid {
  class BooleanColumn extends Ext.grid.Column {

    public constructor(config: IBooleanColumnConfig);

    public addListener<T extends IBooleanColumnEvents = IBooleanColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IBooleanColumnEvents = IBooleanColumnEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IBooleanColumnEvents = IBooleanColumnEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IBooleanColumnEvents = IBooleanColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IBooleanColumnEvents = IBooleanColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IBooleanColumnEvents = IBooleanColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IBooleanColumnConfig {
    align?: string,
    css?: string,
    dataIndex?: string,
    editable?: boolean,
    editor?: Ext.form.Field,
    emptyGroupText?: string,
    falseText?: string,
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
    trueText?: string,
    undefinedText?: string,
    width?: number,
    xtype?: string,
  }

  interface IBooleanColumnEvents extends Record<string, (...args: any[]) => boolean | void> {
    click: (thisCmp: BooleanColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: BooleanColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: BooleanColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    mousedown: (thisCmp: BooleanColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
  }
}
