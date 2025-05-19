declare namespace Ext.menu {
  class Item extends Ext.menu.BaseItem {

    private ctype: string;

    private hideDelay: number;

    public menu: Ext.menu.Menu;

    public constructor(config: IItemConfig);

    private activate(autoExpand: object): void;

    public addListener<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeDestroy(): void;

    private deactivate(): void;

    private deferExpand(autoActivate: object): void;

    private deferHide(): void;

    private expandMenu(autoActivate: object): void;

    public fireEvent<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getTemplateArgs(): void;

    private handleClick(e: object): void;

    public hasListener<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private hideMenu(): void;

    private initComponent(): void;

    public on<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(container: object, position: object): void;

    public removeListener<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setIconClass(cls: string): void;

    public setText(text: string): void;

    private shouldDeactivate(e: object): void;

    public un<T extends IItemEvents = IItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IItemConfig {
    activeClass?: string,
    allowDomMove?: boolean,
    altText?: string,
    applyTo?: unknown,
    autoEl?: unknown,
    autoShow?: boolean,
    bubbleEvents?: unknown[],
    canActivate?: boolean,
    clearCls?: string,
    clickHideDelay?: number,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
    handler?: Function,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideOnClick?: boolean,
    hideParent?: boolean,
    href?: string,
    hrefTarget?: string,
    html?: string | object,
    icon?: string,
    iconCls?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    menu?: unknown,
    overCls?: string,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    renderTo?: unknown,
    scope?: object,
    showDelay?: number,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    text?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    xtype?: string,
  }

  interface IItemEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (thisCmp: Item) => boolean | void;
    added: (thisCmp: Item, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Item) => boolean | void;
    beforedestroy: (thisCmp: Item) => boolean | void;
    beforehide: (thisCmp: Item) => boolean | void;
    beforerender: (thisCmp: Item) => boolean | void;
    beforeshow: (thisCmp: Item) => boolean | void;
    beforestaterestore: (thisCmp: Item, state: object) => boolean | void;
    beforestatesave: (thisCmp: Item, state: object) => boolean | void;
    click: (thisCmp: Item, e: Ext.EventObject) => boolean | void;
    deactivate: (thisCmp: Item) => boolean | void;
    destroy: (thisCmp: Item) => boolean | void;
    disable: (thisCmp: Item) => boolean | void;
    enable: (thisCmp: Item) => boolean | void;
    hide: (thisCmp: Item) => boolean | void;
    removed: (thisCmp: Item, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Item) => boolean | void;
    show: (thisCmp: Item) => boolean | void;
    staterestore: (thisCmp: Item, state: object) => boolean | void;
    statesave: (thisCmp: Item, state: object) => boolean | void;
  }
}
