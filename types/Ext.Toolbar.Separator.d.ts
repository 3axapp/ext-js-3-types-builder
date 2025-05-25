declare namespace Ext.Toolbar {
  class Separator extends Ext.Toolbar.Item {

    public constructor(config: ISeparatorConfig);

    public addListener<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(ct: object, position: object): void;

    public removeListener<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ISeparatorEvents = ISeparatorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ISeparatorConfig {
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
    flex?: number,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    overCls?: string,
    overflowText?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ISeparatorEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Separator, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Separator) => boolean | void;
    beforedestroy: (thisCmp: Separator) => boolean | void;
    beforehide: (thisCmp: Separator) => boolean | void;
    beforerender: (thisCmp: Separator) => boolean | void;
    beforeshow: (thisCmp: Separator) => boolean | void;
    beforestaterestore: (thisCmp: Separator, state: object) => boolean | void;
    beforestatesave: (thisCmp: Separator, state: object) => boolean | void;
    destroy: (thisCmp: Separator) => boolean | void;
    disable: (thisCmp: Separator) => boolean | void;
    enable: (thisCmp: Separator) => boolean | void;
    hide: (thisCmp: Separator) => boolean | void;
    move: (thisCmp: Separator, x: number, y: number) => boolean | void;
    removed: (thisCmp: Separator, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Separator) => boolean | void;
    resize: (thisCmp: Separator, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Separator) => boolean | void;
    staterestore: (thisCmp: Separator, state: object) => boolean | void;
    statesave: (thisCmp: Separator, state: object) => boolean | void;
  }
}
