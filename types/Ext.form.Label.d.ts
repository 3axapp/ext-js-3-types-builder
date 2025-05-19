declare namespace Ext.form {
  class Label extends Ext.BoxComponent {

    public constructor(config: ILabelConfig);

    public addListener<T extends ILabelEvents = ILabelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ILabelEvents = ILabelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ILabelEvents = ILabelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ILabelEvents = ILabelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(ct: object, position: object): void;

    public removeListener<T extends ILabelEvents = ILabelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setText(text: string, encode?: boolean): this;

    public un<T extends ILabelEvents = ILabelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ILabelConfig {
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
    forId?: string,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    overCls?: string,
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

  interface ILabelEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Label, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Label) => boolean | void;
    beforedestroy: (thisCmp: Label) => boolean | void;
    beforehide: (thisCmp: Label) => boolean | void;
    beforerender: (thisCmp: Label) => boolean | void;
    beforeshow: (thisCmp: Label) => boolean | void;
    beforestaterestore: (thisCmp: Label, state: object) => boolean | void;
    beforestatesave: (thisCmp: Label, state: object) => boolean | void;
    destroy: (thisCmp: Label) => boolean | void;
    disable: (thisCmp: Label) => boolean | void;
    enable: (thisCmp: Label) => boolean | void;
    hide: (thisCmp: Label) => boolean | void;
    move: (thisCmp: Label, x: number, y: number) => boolean | void;
    removed: (thisCmp: Label, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Label) => boolean | void;
    resize: (thisCmp: Label, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Label) => boolean | void;
    staterestore: (thisCmp: Label, state: object) => boolean | void;
    statesave: (thisCmp: Label, state: object) => boolean | void;
  }
}
