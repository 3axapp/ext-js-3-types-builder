declare namespace Ext.menu {
  class BaseItem extends Ext.Component {

    private actionMode: string;

    private ctype: string;

    public parentMenu: Ext.menu.Menu;

    public constructor(config: IBaseItemConfig);

    private activate(): void;

    public addListener<T extends IBaseItemEvents = IBaseItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeDestroy(): void;

    private deactivate(): void;

    private expandMenu(): void;

    public fireEvent<T extends IBaseItemEvents = IBaseItemEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private handleClick(e: object): void;

    public hasListener<T extends IBaseItemEvents = IBaseItemEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private hideMenu(): void;

    private initComponent(): void;

    public on<T extends IBaseItemEvents = IBaseItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onClick(e: object): void;

    private onRender(container: object, position: object): void;

    public removeListener<T extends IBaseItemEvents = IBaseItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setHandler(handler: Function, scope: object): void;

    private shouldDeactivate(e: object): void;

    public un<T extends IBaseItemEvents = IBaseItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IBaseItemConfig {
    activeClass?: string,
    allowDomMove?: boolean,
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
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    overCls?: string,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    renderTo?: unknown,
    scope?: object,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    xtype?: string,
  }

  interface IBaseItemEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (thisCmp: BaseItem) => boolean | void;
    added: (thisCmp: BaseItem, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: BaseItem) => boolean | void;
    beforedestroy: (thisCmp: BaseItem) => boolean | void;
    beforehide: (thisCmp: BaseItem) => boolean | void;
    beforerender: (thisCmp: BaseItem) => boolean | void;
    beforeshow: (thisCmp: BaseItem) => boolean | void;
    beforestaterestore: (thisCmp: BaseItem, state: object) => boolean | void;
    beforestatesave: (thisCmp: BaseItem, state: object) => boolean | void;
    click: (thisCmp: BaseItem, e: Ext.EventObject) => boolean | void;
    deactivate: (thisCmp: BaseItem) => boolean | void;
    destroy: (thisCmp: BaseItem) => boolean | void;
    disable: (thisCmp: BaseItem) => boolean | void;
    enable: (thisCmp: BaseItem) => boolean | void;
    hide: (thisCmp: BaseItem) => boolean | void;
    removed: (thisCmp: BaseItem, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: BaseItem) => boolean | void;
    show: (thisCmp: BaseItem) => boolean | void;
    staterestore: (thisCmp: BaseItem, state: object) => boolean | void;
    statesave: (thisCmp: BaseItem, state: object) => boolean | void;
  }
}
