declare namespace Ext {
  class Component extends Ext.util.Observable {

    public disabled: boolean;

    public el: Ext.Element;

    public hidden: boolean;

    public initialConfig: object;

    public ownerCt: Ext.Container;

    public refOwner: Ext.Container;

    public rendered: boolean;

    public constructor(config: IComponentConfig);

    public addClass(cls: string): this;

    public addListener<T extends IComponentEvents = IComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public applyToMarkup(el: string | HTMLElement): void;

    public bubble(fn: Function, scope?: object, args?: unknown[]): this;

    public cloneConfig(overrides: object): Ext.Component;

    public destroy(): void;

    public disable(silent: object): this;

    public enable(): this;

    public findParentBy(fn: Function): Ext.Container;

    public findParentByType(xtype: string | Ext.Component | typeof Ext.Component, shallow?: boolean): Ext.Container;

    public fireEvent<T extends IComponentEvents = IComponentEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public focus(selectText?: boolean, delay?: boolean | number): this;

    public getBubbleTarget(): Ext.Container;

    public getEl(): Ext.Element;

    public getId(): string;

    public getItemId(): string;

    public getXType(): string;

    public getXTypes(): string;

    public hasListener<T extends IComponentEvents = IComponentEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public hide(): this;

    private initRef(): void;

    public isVisible(): boolean;

    public isXType(xtype: string | Ext.Component | typeof Ext.Component, shallow?: boolean): boolean;

    public mon(item: Ext.util.Observable | Element, ename: object | string, fn: Function, scope: object, opt: object): void;

    public mun(item: Ext.util.Observable | Element, ename: object | string, fn: Function, scope: object): void;

    public nextSibling(): object;

    public on<T extends IComponentEvents = IComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onAdded(container: Ext.Container, pos: number): void;

    private onRemoved(): void;

    public previousSibling(): object;

    public removeClass(cls: string): this;

    public removeListener<T extends IComponentEvents = IComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public render(container?: Element | HTMLElement | string, position?: string | number): this;

    public setDisabled(disabled: boolean): this;

    public setVisible(visible: boolean): this;

    public show(): this;

    public un<T extends IComponentEvents = IComponentEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public update(htmlOrData: unknown, loadScripts: boolean, callback: Function): void;
  }

  interface IComponentConfig {
    allowDomMove?: boolean,
    applyTo?: unknown,
    autoEl?: unknown,
    autoShow?: boolean,
    bubbleEvents?: unknown[],
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    fieldLabel?: string,
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
    overCls?: string,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    xtype?: string,
  }

  interface IComponentEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Component, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Component) => boolean | void;
    beforedestroy: (thisCmp: Component) => boolean | void;
    beforehide: (thisCmp: Component) => boolean | void;
    beforerender: (thisCmp: Component) => boolean | void;
    beforeshow: (thisCmp: Component) => boolean | void;
    beforestaterestore: (thisCmp: Component, state: object) => boolean | void;
    beforestatesave: (thisCmp: Component, state: object) => boolean | void;
    destroy: (thisCmp: Component) => boolean | void;
    disable: (thisCmp: Component) => boolean | void;
    enable: (thisCmp: Component) => boolean | void;
    hide: (thisCmp: Component) => boolean | void;
    removed: (thisCmp: Component, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Component) => boolean | void;
    show: (thisCmp: Component) => boolean | void;
    staterestore: (thisCmp: Component, state: object) => boolean | void;
    statesave: (thisCmp: Component, state: object) => boolean | void;
  }
}
