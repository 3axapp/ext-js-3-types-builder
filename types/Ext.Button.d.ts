declare namespace Ext {
  class Button extends Ext.BoxComponent {

    public btnEl: Ext.Element;

    public disabled: boolean;

    public hidden: boolean;

    public menu: Ext.menu.Menu;

    private menuClassTarget: string;

    public pressed: boolean;

    public constructor(config: IButtonConfig);

    public addListener<T extends IButtonEvents = IButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private beforeDestroy(): void;

    private blur(): void;

    private clearTip(): void;

    private doAutoWidth(): void;

    private doToggle(): void;

    public fireEvent<T extends IButtonEvents = IButtonEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public focus(): this;

    private getClickEl(e: object, isUp: object): void;

    private getMenuClass(): void;

    public getPressed(group: string): object;

    public getTemplateArgs(): unknown[];

    public getText(): string;

    public hasListener<T extends IButtonEvents = IButtonEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hasVisibleMenu(): boolean;

    public hideMenu(): this;

    private initButtonEl(btn: object, btnEl: object): void;

    private isMenuTriggerOut(e: object, internal: object): void;

    private isMenuTriggerOver(e: object, internal: object): void;

    private monitorMouseOver(e: object): void;

    public on<T extends IButtonEvents = IButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onBlur(e: object): void;

    private onClick(e: object): void;

    private onDestroy(): void;

    private onDisable(): void;

    private onDisableChange(disabled: object): void;

    private onEnable(): void;

    private onFocus(e: object): void;

    private onMenuHide(e: object): void;

    private onMenuShow(e: object): void;

    private onMouseDown(e: object): void;

    private onMouseOut(e: object): void;

    private onMouseOver(e: object): void;

    private onMouseUp(e: object): void;

    private onRender(ct: object, position: object): void;

    private onRepeatClick(repeat: object, e: object): void;

    public removeListener<T extends IButtonEvents = IButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private restoreClick(): void;

    private setButtonClass(): void;

    public setHandler(handler: Function, scope?: object): this;

    public setIcon(icon: string): this;

    public setIconClass(cls: string): this;

    public setText(text: string): this;

    public setTooltip(tooltip: string | object): this;

    public showMenu(): this;

    public toggle(state?: boolean, supressEvent?: boolean): this;

    public un<T extends IButtonEvents = IButtonEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IButtonConfig {
    allowDepress?: boolean,
    allowDomMove?: boolean,
    anchor?: string,
    applyTo?: unknown,
    arrowAlign?: string,
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

  interface IButtonEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Button, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Button) => boolean | void;
    beforedestroy: (thisCmp: Button) => boolean | void;
    beforehide: (thisCmp: Button) => boolean | void;
    beforerender: (thisCmp: Button) => boolean | void;
    beforeshow: (thisCmp: Button) => boolean | void;
    beforestaterestore: (thisCmp: Button, state: object) => boolean | void;
    beforestatesave: (thisCmp: Button, state: object) => boolean | void;
    click: (thisCmp: Button, e: EventObject) => boolean | void;
    destroy: (thisCmp: Button) => boolean | void;
    disable: (thisCmp: Button) => boolean | void;
    enable: (thisCmp: Button) => boolean | void;
    hide: (thisCmp: Button) => boolean | void;
    menuhide: (thisCmp: Button, menu: Ext.menu.Menu) => boolean | void;
    menushow: (thisCmp: Button, menu: Ext.menu.Menu) => boolean | void;
    menutriggerout: (thisCmp: Button, menu: Ext.menu.Menu, e: EventObject) => boolean | void;
    menutriggerover: (thisCmp: Button, menu: Ext.menu.Menu, e: EventObject) => boolean | void;
    mouseout: (thisCmp: Button, e: Event) => boolean | void;
    mouseover: (thisCmp: Button, e: Event) => boolean | void;
    move: (thisCmp: Button, x: number, y: number) => boolean | void;
    removed: (thisCmp: Button, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Button) => boolean | void;
    resize: (thisCmp: Button, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: Button) => boolean | void;
    staterestore: (thisCmp: Button, state: object) => boolean | void;
    statesave: (thisCmp: Button, state: object) => boolean | void;
    toggle: (thisCmp: Button, pressed: boolean) => boolean | void;
  }
}
