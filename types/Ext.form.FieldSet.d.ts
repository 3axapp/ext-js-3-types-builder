declare namespace Ext.form {
  class FieldSet extends Ext.Panel {

    public constructor(config: IFieldSetConfig);

    public addListener<T extends IFieldSetEvents = IFieldSetEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IFieldSetEvents = IFieldSetEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IFieldSetEvents = IFieldSetEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IFieldSetEvents = IFieldSetEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public onCheckClick(): void;

    private onCollapse(doAnim: object, animArg: object): void;

    private onExpand(doAnim: object, animArg: object): void;

    private onRender(ct: object, position: object): void;

    public removeListener<T extends IFieldSetEvents = IFieldSetEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IFieldSetEvents = IFieldSetEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IFieldSetConfig {
    allowDomMove?: boolean,
    anchor?: string,
    animCollapse?: boolean,
    autoDestroy?: boolean,
    autoHeight?: boolean,
    autoLoad?: object | string | Function,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    baseCls?: string,
    bbar?: object | unknown[],
    bbarCfg?: object,
    bodyCfg?: object,
    bodyCssClass?: string | object | Function,
    bodyStyle?: string | object | Function,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    buttonAlign?: string,
    buttons?: unknown[],
    bwrapCfg?: object,
    checkboxName?: string,
    checkboxToggle?: unknown,
    clearCls?: string,
    closable?: boolean,
    cls?: string,
    collapsed?: boolean,
    collapsedCls?: string,
    collapsible?: boolean,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    defaults?: Object|Function,
    disabled?: boolean,
    draggable?: boolean | object,
    fbar?: object | unknown[],
    fieldLabel?: string,
    flex?: number,
    footerCfg?: object,
    forceLayout?: boolean,
    headerCfg?: object,
    height?: number,
    hidden?: boolean,
    hideBorders?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    items?: object | unknown[],
    keys?: object | unknown[],
    labelSeparator?: string,
    labelStyle?: string,
    labelWidth?: number,
    layout?: string,
    layoutConfig?: object,
    listeners?: object,
    margins?: object,
    maskDisabled?: boolean,
    minButtonWidth?: number,
    monitorResize?: boolean,
    overCls?: string,
    padding?: number | string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    preventBodyReset?: boolean,
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    resizeEvent?: string,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    tabTip?: string,
    tbarCfg?: object,
    title?: string,
    titleCollapse?: boolean,
    tpl?: unknown,
    tplWriteMode?: string,
    unstyled?: boolean,
    width?: number,
    x?: number,
    y?: number,
  }

  interface IFieldSetEvents extends Record<string, (...args: any[]) => boolean | void> {
    add: (thisCmp: FieldSet, component: Ext.Component, index: number) => boolean | void;
    added: (thisCmp: FieldSet, ownerCt: Ext.Container, index: number) => boolean | void;
    afterlayout: (thisCmp: FieldSet, layout: Ext.layout.ContainerLayout) => boolean | void;
    afterrender: (thisCmp: FieldSet) => boolean | void;
    beforeadd: (thisCmp: FieldSet, component: Ext.Component, index: number) => boolean | void;
    beforecollapse: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforedestroy: (thisCmp: FieldSet) => boolean | void;
    beforeexpand: (p: Ext.Panel, animate: boolean) => boolean | void;
    beforehide: (thisCmp: FieldSet) => boolean | void;
    beforeremove: (thisCmp: FieldSet, component: Ext.Component) => boolean | void;
    beforerender: (thisCmp: FieldSet) => boolean | void;
    beforeshow: (thisCmp: FieldSet) => boolean | void;
    beforestaterestore: (thisCmp: FieldSet, state: object) => boolean | void;
    beforestatesave: (thisCmp: FieldSet, state: object) => boolean | void;
    collapse: (p: Ext.Panel) => boolean | void;
    destroy: (thisCmp: FieldSet) => boolean | void;
    disable: (thisCmp: FieldSet) => boolean | void;
    enable: (thisCmp: FieldSet) => boolean | void;
    expand: (p: Ext.Panel) => boolean | void;
    hide: (thisCmp: FieldSet) => boolean | void;
    iconchange: (p: Ext.Panel, newIcon: string, oldIcon: string) => boolean | void;
    move: (thisCmp: FieldSet, x: number, y: number) => boolean | void;
    remove: (thisCmp: FieldSet, component: Ext.Component) => boolean | void;
    removed: (thisCmp: FieldSet, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: FieldSet) => boolean | void;
    resize: (thisCmp: FieldSet, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: FieldSet) => boolean | void;
    staterestore: (thisCmp: FieldSet, state: object) => boolean | void;
    statesave: (thisCmp: FieldSet, state: object) => boolean | void;
    titlechange: (p: Ext.Panel, The: string) => boolean | void;
  }
}
