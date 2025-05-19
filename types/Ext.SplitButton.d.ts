declare namespace Ext {
  class SplitButton extends Ext.Button {

    private arrowSelector: string;

    private split: boolean;

    public constructor(config: ISplitButtonConfig);

    public addListener<T extends ISplitButtonEvents = ISplitButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ISplitButtonEvents = ISplitButtonEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getMenuClass(): void;

    public hasListener<T extends ISplitButtonEvents = ISplitButtonEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private isClickOnArrow(e: object): void;

    private isMenuTriggerOut(e: object, internal: object): void;

    private isMenuTriggerOver(e: object): void;

    public on<T extends ISplitButtonEvents = ISplitButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onClick(e: object, t: object): void;

    private onRender(): void;

    public removeListener<T extends ISplitButtonEvents = ISplitButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setArrowHandler(handler: Function, scope?: object): void;

    public un<T extends ISplitButtonEvents = ISplitButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ISplitButtonConfig {
    allowDepress?: boolean,
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    arrowAlign?: string,
    arrowHandler?: Function,
    arrowTooltip?: string,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    buttonSelector?: string,
    clearCls?: string,
    clickEvent?: string,
    cls?: string,
    ctCls?: string,
    disabled?: boolean,
    disabledClass?: string,
    enableToggle?: boolean,
    fieldLabel?: string,
    flex?: number,
    handleMouseEvents?: boolean,
    handler?: Function,
    height?: number,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    icon?: string,
    iconAlign?: string,
    iconCls?: string,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    margins?: object,
    menu?: unknown,
    menuAlign?: string,
    minWidth?: number,
    overCls?: string,
    overflowText?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    pressed?: boolean,
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    repeat?: boolean | object,
    scale?: string,
    scope?: object,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabIndex?: number,
    tabTip?: string,
    template?: Ext.Template,
    text?: string,
    toggleGroup?: string,
    toggleHandler?: Function,
    tooltip?: string | object,
    tooltipType?: string,
    type?: string,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface ISplitButtonEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: SplitButton, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: SplitButton) => boolean | void;
    arrowclick: (thisCmp: SplitButton, e: EventObject) => boolean | void;
    beforedestroy: (thisCmp: SplitButton) => boolean | void;
    beforehide: (thisCmp: SplitButton) => boolean | void;
    beforerender: (thisCmp: SplitButton) => boolean | void;
    beforeshow: (thisCmp: SplitButton) => boolean | void;
    beforestaterestore: (thisCmp: SplitButton, state: object) => boolean | void;
    beforestatesave: (thisCmp: SplitButton, state: object) => boolean | void;
    click: (thisCmp: SplitButton, e: EventObject) => boolean | void;
    destroy: (thisCmp: SplitButton) => boolean | void;
    disable: (thisCmp: SplitButton) => boolean | void;
    enable: (thisCmp: SplitButton) => boolean | void;
    hide: (thisCmp: SplitButton) => boolean | void;
    menuhide: (thisCmp: SplitButton, menu: Ext.menu.Menu) => boolean | void;
    menushow: (thisCmp: SplitButton, menu: Ext.menu.Menu) => boolean | void;
    menutriggerout: (thisCmp: SplitButton, menu: Ext.menu.Menu, e: EventObject) => boolean | void;
    menutriggerover: (thisCmp: SplitButton, menu: Ext.menu.Menu, e: EventObject) => boolean | void;
    mouseout: (thisCmp: SplitButton, e: Event) => boolean | void;
    mouseover: (thisCmp: SplitButton, e: Event) => boolean | void;
    move: (thisCmp: SplitButton, x: number, y: number) => boolean | void;
    removed: (thisCmp: SplitButton, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: SplitButton) => boolean | void;
    resize: (thisCmp: SplitButton, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: SplitButton) => boolean | void;
    staterestore: (thisCmp: SplitButton, state: object) => boolean | void;
    statesave: (thisCmp: SplitButton, state: object) => boolean | void;
    toggle: (thisCmp: SplitButton, pressed: boolean) => boolean | void;
  }
}
