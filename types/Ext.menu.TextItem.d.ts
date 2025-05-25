declare namespace Ext.menu {
  class TextItem extends Ext.menu.BaseItem {

    public constructor(config: ITextItemConfig);

    public addListener<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(): void;

    public removeListener<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITextItemConfig {
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
    text?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    xtype?: string,
  }

  interface ITextItemEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (thisCmp: TextItem) => boolean | void;
    added: (thisCmp: TextItem, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TextItem) => boolean | void;
    beforedestroy: (thisCmp: TextItem) => boolean | void;
    beforehide: (thisCmp: TextItem) => boolean | void;
    beforerender: (thisCmp: TextItem) => boolean | void;
    beforeshow: (thisCmp: TextItem) => boolean | void;
    beforestaterestore: (thisCmp: TextItem, state: object) => boolean | void;
    beforestatesave: (thisCmp: TextItem, state: object) => boolean | void;
    click: (thisCmp: TextItem, e: Ext.EventObject) => boolean | void;
    deactivate: (thisCmp: TextItem) => boolean | void;
    destroy: (thisCmp: TextItem) => boolean | void;
    disable: (thisCmp: TextItem) => boolean | void;
    enable: (thisCmp: TextItem) => boolean | void;
    hide: (thisCmp: TextItem) => boolean | void;
    removed: (thisCmp: TextItem, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TextItem) => boolean | void;
    show: (thisCmp: TextItem) => boolean | void;
    staterestore: (thisCmp: TextItem, state: object) => boolean | void;
    statesave: (thisCmp: TextItem, state: object) => boolean | void;
  }
}
