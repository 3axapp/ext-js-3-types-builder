declare namespace Ext.Toolbar {
  class TextItem extends Ext.Toolbar.Item {

    public constructor(config: ITextItemConfig);

    public addListener<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(ct: object, position: object): void;

    public removeListener<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setText(t: string): void;

    public un<T extends ITextItemEvents = ITextItemEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITextItemConfig {
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
    text?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ITextItemEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: TextItem, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TextItem) => boolean | void;
    beforedestroy: (thisCmp: TextItem) => boolean | void;
    beforehide: (thisCmp: TextItem) => boolean | void;
    beforerender: (thisCmp: TextItem) => boolean | void;
    beforeshow: (thisCmp: TextItem) => boolean | void;
    beforestaterestore: (thisCmp: TextItem, state: object) => boolean | void;
    beforestatesave: (thisCmp: TextItem, state: object) => boolean | void;
    destroy: (thisCmp: TextItem) => boolean | void;
    disable: (thisCmp: TextItem) => boolean | void;
    enable: (thisCmp: TextItem) => boolean | void;
    hide: (thisCmp: TextItem) => boolean | void;
    move: (thisCmp: TextItem, x: number, y: number) => boolean | void;
    removed: (thisCmp: TextItem, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TextItem) => boolean | void;
    resize: (thisCmp: TextItem, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: TextItem) => boolean | void;
    staterestore: (thisCmp: TextItem, state: object) => boolean | void;
    statesave: (thisCmp: TextItem, state: object) => boolean | void;
  }
}
