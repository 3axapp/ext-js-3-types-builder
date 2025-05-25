declare namespace Ext.menu {
  class CheckItem extends Ext.menu.Item {

    private ctype: string;

    public constructor(config: ICheckItemConfig);

    public addListener<T extends ICheckItemEvents = ICheckItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public checkHandler(thisCmp: CheckItem, checked: boolean): void;

    public destroy(): void;

    public fireEvent<T extends ICheckItemEvents = ICheckItemEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private handleClick(e: object): void;

    public hasListener<T extends ICheckItemEvents = ICheckItemEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends ICheckItemEvents = ICheckItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(c: object): void;

    public removeListener<T extends ICheckItemEvents = ICheckItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setChecked(checked: boolean, suppressEvent?: boolean): void;

    public un<T extends ICheckItemEvents = ICheckItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICheckItemConfig {
    activeClass?: string,
    allowDomMove?: boolean,
    altText?: string,
    applyTo?: unknown,
    autoEl?: unknown,
    autoShow?: boolean,
    bubbleEvents?: unknown[],
    canActivate?: boolean,
    checked?: boolean,
    clearCls?: string,
    clickHideDelay?: number,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
    group?: string,
    groupClass?: string,
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

  interface ICheckItemEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (thisCmp: CheckItem) => boolean | void;
    added: (thisCmp: CheckItem, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: CheckItem) => boolean | void;
    beforecheckchange: (thisCmp: CheckItem, checked: boolean) => boolean | void;
    beforedestroy: (thisCmp: CheckItem) => boolean | void;
    beforehide: (thisCmp: CheckItem) => boolean | void;
    beforerender: (thisCmp: CheckItem) => boolean | void;
    beforeshow: (thisCmp: CheckItem) => boolean | void;
    beforestaterestore: (thisCmp: CheckItem, state: object) => boolean | void;
    beforestatesave: (thisCmp: CheckItem, state: object) => boolean | void;
    checkchange: (thisCmp: CheckItem, checked: boolean) => boolean | void;
    click: (thisCmp: CheckItem, e: Ext.EventObject) => boolean | void;
    deactivate: (thisCmp: CheckItem) => boolean | void;
    destroy: (thisCmp: CheckItem) => boolean | void;
    disable: (thisCmp: CheckItem) => boolean | void;
    enable: (thisCmp: CheckItem) => boolean | void;
    hide: (thisCmp: CheckItem) => boolean | void;
    removed: (thisCmp: CheckItem, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: CheckItem) => boolean | void;
    show: (thisCmp: CheckItem) => boolean | void;
    staterestore: (thisCmp: CheckItem, state: object) => boolean | void;
    statesave: (thisCmp: CheckItem, state: object) => boolean | void;
  }
}
