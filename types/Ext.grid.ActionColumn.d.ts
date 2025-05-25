declare namespace Ext.grid {
  class ActionColumn extends Ext.grid.Column {

    private actionIdRe: RegExp;

    public constructor(config: IActionColumnConfig);

    public addListener<T extends IActionColumnEvents = IActionColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private destroy(): void;

    public fireEvent<T extends IActionColumnEvents = IActionColumnEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IActionColumnEvents = IActionColumnEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IActionColumnEvents = IActionColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private processEvent(name: object, e: object, grid: object, rowIndex: object, colIndex: object): void;

    public removeListener<T extends IActionColumnEvents = IActionColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IActionColumnEvents = IActionColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IActionColumnConfig {
    align?: string,
    altText?: string,
    css?: string,
    dataIndex?: string,
    editable?: boolean,
    editor?: Ext.form.Field,
    emptyGroupText?: string,
    fixed?: boolean,
    getClass?: Function,
    groupName?: string,
    groupRenderer?: Function,
    groupable?: boolean,
    handler?: Function,
    header?: string,
    hidden?: boolean,
    hideable?: boolean,
    icon?: string,
    iconCls?: string,
    id?: string,
    items?: unknown[],
    listeners?: object,
    menuDisabled?: boolean,
    renderer?: unknown,
    resizable?: boolean,
    scope?: object,
    sortable?: boolean,
    stopSelection?: boolean,
    tooltip?: string,
    width?: number,
    xtype?: string,
  }

  interface IActionColumnEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    click: (thisCmp: ActionColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: ActionColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: ActionColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    mousedown: (thisCmp: ActionColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
  }
}
