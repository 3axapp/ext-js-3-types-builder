declare namespace Ext {
  class CycleButton extends Ext.SplitButton {

    public menu: Ext.menu.Menu;

    public constructor(config: ICycleButtonConfig);

    public addListener<T extends ICycleButtonEvents = ICycleButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private checkHandler(item: object, pressed: object): void;

    public fireEvent<T extends ICycleButtonEvents = ICycleButtonEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getActiveItem(): Ext.menu.CheckItem;

    private getItemText(item: object): void;

    public hasListener<T extends ICycleButtonEvents = ICycleButtonEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends ICycleButtonEvents = ICycleButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends ICycleButtonEvents = ICycleButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setActiveItem(item: Ext.menu.CheckItem, suppressEvent: boolean): void;

    public toggleSelected(): void;

    public un<T extends ICycleButtonEvents = ICycleButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ICycleButtonConfig {
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
    changeHandler?: Function,
    clearCls?: string,
    clickEvent?: string,
    cls?: string,
    ctCls?: string,
    disabled?: boolean,
    disabledClass?: string,
    enableToggle?: boolean,
    fieldLabel?: string,
    flex?: number,
    forceIcon?: string,
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
    items?: unknown[],
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
    prependText?: string,
    pressed?: boolean,
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    repeat?: boolean | object,
    scale?: string,
    scope?: object,
    showText?: boolean,
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

  interface ICycleButtonEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: CycleButton, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: CycleButton) => boolean | void;
    arrowclick: (thisCmp: CycleButton, e: EventObject) => boolean | void;
    beforedestroy: (thisCmp: CycleButton) => boolean | void;
    beforehide: (thisCmp: CycleButton) => boolean | void;
    beforerender: (thisCmp: CycleButton) => boolean | void;
    beforeshow: (thisCmp: CycleButton) => boolean | void;
    beforestaterestore: (thisCmp: CycleButton, state: object) => boolean | void;
    beforestatesave: (thisCmp: CycleButton, state: object) => boolean | void;
    change: (thisCmp: CycleButton, item: Ext.menu.CheckItem) => boolean | void;
    click: (thisCmp: CycleButton, e: EventObject) => boolean | void;
    destroy: (thisCmp: CycleButton) => boolean | void;
    disable: (thisCmp: CycleButton) => boolean | void;
    enable: (thisCmp: CycleButton) => boolean | void;
    hide: (thisCmp: CycleButton) => boolean | void;
    menuhide: (thisCmp: CycleButton, menu: Ext.menu.Menu) => boolean | void;
    menushow: (thisCmp: CycleButton, menu: Ext.menu.Menu) => boolean | void;
    menutriggerout: (thisCmp: CycleButton, menu: Ext.menu.Menu, e: EventObject) => boolean | void;
    menutriggerover: (thisCmp: CycleButton, menu: Ext.menu.Menu, e: EventObject) => boolean | void;
    mouseout: (thisCmp: CycleButton, e: Event) => boolean | void;
    mouseover: (thisCmp: CycleButton, e: Event) => boolean | void;
    move: (thisCmp: CycleButton, x: number, y: number) => boolean | void;
    removed: (thisCmp: CycleButton, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: CycleButton) => boolean | void;
    resize: (thisCmp: CycleButton, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: CycleButton) => boolean | void;
    staterestore: (thisCmp: CycleButton, state: object) => boolean | void;
    statesave: (thisCmp: CycleButton, state: object) => boolean | void;
    toggle: (thisCmp: CycleButton, pressed: boolean) => boolean | void;
  }
}
