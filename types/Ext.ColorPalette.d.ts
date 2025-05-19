declare namespace Ext {
  class ColorPalette extends Ext.Component {

    public colors: unknown[];

    private ctype: string;

    public constructor(config: IColorPaletteConfig);

    public addListener<T extends IColorPaletteEvents = IColorPaletteEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    public fireEvent<T extends IColorPaletteEvents = IColorPaletteEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private handleClick(e: object, t: object): void;

    public hasListener<T extends IColorPaletteEvents = IColorPaletteEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public on<T extends IColorPaletteEvents = IColorPaletteEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onRender(container: object, position: object): void;

    public removeListener<T extends IColorPaletteEvents = IColorPaletteEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public select(color: string, suppressEvent?: boolean): void;

    public un<T extends IColorPaletteEvents = IColorPaletteEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IColorPaletteConfig {
    allowDomMove?: boolean,
    allowReselect?: boolean,
    applyTo?: unknown,
    autoShow?: boolean,
    bubbleEvents?: unknown[],
    clearCls?: string,
    clickEvent?: string,
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
    tpl?: string,
    tplWriteMode?: string,
    value?: string,
    xtype?: string,
  }

  interface IColorPaletteEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: ColorPalette, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: ColorPalette) => boolean | void;
    beforedestroy: (thisCmp: ColorPalette) => boolean | void;
    beforehide: (thisCmp: ColorPalette) => boolean | void;
    beforerender: (thisCmp: ColorPalette) => boolean | void;
    beforeshow: (thisCmp: ColorPalette) => boolean | void;
    beforestaterestore: (thisCmp: ColorPalette, state: object) => boolean | void;
    beforestatesave: (thisCmp: ColorPalette, state: object) => boolean | void;
    destroy: (thisCmp: ColorPalette) => boolean | void;
    disable: (thisCmp: ColorPalette) => boolean | void;
    enable: (thisCmp: ColorPalette) => boolean | void;
    hide: (thisCmp: ColorPalette) => boolean | void;
    removed: (thisCmp: ColorPalette, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ColorPalette) => boolean | void;
    select: (thisCmp: ColorPalette, color: string) => boolean | void;
    show: (thisCmp: ColorPalette) => boolean | void;
    staterestore: (thisCmp: ColorPalette, state: object) => boolean | void;
    statesave: (thisCmp: ColorPalette, state: object) => boolean | void;
  }
}
