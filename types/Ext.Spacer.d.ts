declare namespace Ext {
  class Spacer extends Ext.BoxComponent {

    public constructor(config: ISpacerConfig);

    public addListener<T extends ISpacerEvents = ISpacerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ISpacerEvents = ISpacerEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ISpacerEvents = ISpacerEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ISpacerEvents = ISpacerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends ISpacerEvents = ISpacerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ISpacerEvents = ISpacerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ISpacerConfig {
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

  interface ISpacerEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Spacer, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Spacer) => boolean | void;
    beforedestroy: (thisCmp: Spacer) => boolean | void;
    beforehide: (thisCmp: Spacer) => boolean | void;
    beforerender: (thisCmp: Spacer) => boolean | void;
    beforeshow: (thisCmp: Spacer) => boolean | void;
    beforestaterestore: (thisCmp: Spacer, state: object) => boolean | void;
    beforestatesave: (thisCmp: Spacer, state: object) => boolean | void;
    destroy: (thisCmp: Spacer) => boolean | void;
    disable: (thisCmp: Spacer) => boolean | void;
    enable: (thisCmp: Spacer) => boolean | void;
    hide: (thisCmp: Spacer) => boolean | void;
    move: (thisCmp: Spacer, x: number, y: number) => boolean | void;
    removed: (thisCmp: Spacer, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Spacer) => boolean | void;
    resize: (thisCmp: Spacer, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Spacer) => boolean | void;
    staterestore: (thisCmp: Spacer, state: object) => boolean | void;
    statesave: (thisCmp: Spacer, state: object) => boolean | void;
  }
}
