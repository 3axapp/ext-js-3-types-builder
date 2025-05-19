declare namespace Ext.menu {
  class Separator extends Ext.menu.BaseItem {

    public constructor(config: ISeparatorConfig);

    public addListener<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(li: object): void;

    public removeListener<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ISeparatorConfig {
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

  interface ISeparatorEvents extends Record<string, (...args: any[]) => boolean | void> {
    activate: (thisCmp: Separator) => boolean | void;
    added: (thisCmp: Separator, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Separator) => boolean | void;
    beforedestroy: (thisCmp: Separator) => boolean | void;
    beforehide: (thisCmp: Separator) => boolean | void;
    beforerender: (thisCmp: Separator) => boolean | void;
    beforeshow: (thisCmp: Separator) => boolean | void;
    beforestaterestore: (thisCmp: Separator, state: object) => boolean | void;
    beforestatesave: (thisCmp: Separator, state: object) => boolean | void;
    click: (thisCmp: Separator, e: Ext.EventObject) => boolean | void;
    deactivate: (thisCmp: Separator) => boolean | void;
    destroy: (thisCmp: Separator) => boolean | void;
    disable: (thisCmp: Separator) => boolean | void;
    enable: (thisCmp: Separator) => boolean | void;
    hide: (thisCmp: Separator) => boolean | void;
    removed: (thisCmp: Separator, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Separator) => boolean | void;
    show: (thisCmp: Separator) => boolean | void;
    staterestore: (thisCmp: Separator, state: object) => boolean | void;
    statesave: (thisCmp: Separator, state: object) => boolean | void;
  }
}
