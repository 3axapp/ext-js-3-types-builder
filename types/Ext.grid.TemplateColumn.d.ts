declare namespace Ext.grid {
  class TemplateColumn extends Ext.grid.Column {

    public constructor(config: ITemplateColumnConfig);

    public addListener<T extends ITemplateColumnEvents = ITemplateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ITemplateColumnEvents = ITemplateColumnEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ITemplateColumnEvents = ITemplateColumnEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ITemplateColumnEvents = ITemplateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends ITemplateColumnEvents = ITemplateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ITemplateColumnEvents = ITemplateColumnEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITemplateColumnConfig {
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
    tpl?: string | XTemplate,
    width?: number,
    xtype?: string,
  }

  interface ITemplateColumnEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    click: (thisCmp: TemplateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    contextmenu: (thisCmp: TemplateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: TemplateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
    mousedown: (thisCmp: TemplateColumn, The: Grid, rowIndex: number, e: Ext.EventObject) => boolean | void;
  }
}
