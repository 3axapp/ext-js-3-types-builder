declare namespace Ext.form {
  class HtmlEditor extends Ext.form.Field {

    private actionMode: string;

    private activated: boolean;

    public buttonTips: object;

    private defaultAutoCreate: object;

    private defaultFont: string;

    private deferHeight: boolean;

    private fixKeys: object;

    private iframePad: number;

    private initialized: boolean;

    private sourceEditMode: boolean;

    public constructor(config: IHtmlEditorConfig);

    public addListener<T extends IHtmlEditorEvents = IHtmlEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private adjustFont(btn: object): void;

    private applyCommand(e: object): void;

    private beforeDestroy(): void;

    private checkDesignMode(): void;

    public cleanHtml(html: string): string;

    private createFontOptions(): void;

    private createIFrame(): void;

    private createLink(): void;

    private createToolbar(editor: HtmlEditor): void;

    private deferFocus(): void;

    private disableItems(disabled: object): void;

    public execCmd(cmd: string, value?: string | boolean): void;

    public fireEvent<T extends IHtmlEditorEvents = IHtmlEditorEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public focus(): this;

    private getDesignMode(): void;

    private getDoc(): void;

    public getDocMarkup(): void;

    private getEditorBody(): void;

    public getToolbar(): Ext.Toolbar;

    public getValue(): unknown;

    private getWin(): void;

    public hasListener<T extends IHtmlEditorEvents = IHtmlEditorEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    private initEditor(): void;

    private initEvents(): void;

    private initFrame(): void;

    public insertAtCursor(text: string): void;

    public on<T extends IHtmlEditorEvents = IHtmlEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDisable(): void;

    private onEditorEvent(e: object): void;

    private onEnable(): void;

    private onFirstFocus(): void;

    private onFocus(): void;

    private onRender(ct: object, position: object): void;

    private onResize(adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number): void;

    public pushValue(): void;

    private relayBtnCmd(btn: object): void;

    public relayCmd(cmd: string, value?: string | boolean): void;

    public removeListener<T extends IHtmlEditorEvents = IHtmlEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private setDesignMode(mode: object): void;

    public setReadOnly(readOnly: object): void;

    public setValue(v: object): this;

    public syncValue(): void;

    public toggleSourceEdit(sourceEdit?: boolean): void;

    public un<T extends IHtmlEditorEvents = IHtmlEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public updateToolbar(): void;
  }

  interface IHtmlEditorConfig {
    anchor?: string,
    autoScroll?: boolean,
    autoShow?: boolean,
    boxMaxHeight?: number,
    boxMaxWidth?: number,
    boxMinHeight?: number,
    boxMinWidth?: number,
    bubbleEvents?: unknown[],
    clearCls?: string,
    contentEl?: string,
    createLinkText?: string,
    ctCls?: string,
    data?: unknown,
    defaultLinkValue?: string,
    defaultValue?: string,
    enableAlignments?: boolean,
    enableColors?: boolean,
    enableFont?: boolean,
    enableFontSize?: boolean,
    enableFormat?: boolean,
    enableLinks?: boolean,
    enableLists?: boolean,
    enableSourceEdit?: boolean,
    fieldLabel?: string,
    flex?: number,
    fontFamilies?: unknown[],
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
    name?: string,
    overCls?: string,
    pageX?: number,
    pageY?: number,
    plugins?: object | unknown[],
    preventMark?: boolean,
    ptype?: string,
    ref?: string,
    region?: string,
    renderTo?: unknown,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    submitValue?: boolean,
    tabTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    value?: unknown,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IHtmlEditorEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    activate: (thisCmp: HtmlEditor) => boolean | void;
    added: (thisCmp: HtmlEditor, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: HtmlEditor) => boolean | void;
    beforedestroy: (thisCmp: HtmlEditor) => boolean | void;
    beforehide: (thisCmp: HtmlEditor) => boolean | void;
    beforepush: (thisCmp: HtmlEditor, html: string) => boolean | void;
    beforerender: (thisCmp: HtmlEditor) => boolean | void;
    beforeshow: (thisCmp: HtmlEditor) => boolean | void;
    beforestaterestore: (thisCmp: HtmlEditor, state: object) => boolean | void;
    beforestatesave: (thisCmp: HtmlEditor, state: object) => boolean | void;
    beforesync: (thisCmp: HtmlEditor, html: string) => boolean | void;
    destroy: (thisCmp: HtmlEditor) => boolean | void;
    disable: (thisCmp: HtmlEditor) => boolean | void;
    editmodechange: (thisCmp: HtmlEditor, sourceEdit: boolean) => boolean | void;
    enable: (thisCmp: HtmlEditor) => boolean | void;
    hide: (thisCmp: HtmlEditor) => boolean | void;
    initialize: (thisCmp: HtmlEditor) => boolean | void;
    invalid: (thisCmp: HtmlEditor, msg: string) => boolean | void;
    move: (thisCmp: HtmlEditor, x: number, y: number) => boolean | void;
    push: (thisCmp: HtmlEditor, html: string) => boolean | void;
    removed: (thisCmp: HtmlEditor, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: HtmlEditor) => boolean | void;
    resize: (thisCmp: HtmlEditor, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: HtmlEditor) => boolean | void;
    staterestore: (thisCmp: HtmlEditor, state: object) => boolean | void;
    statesave: (thisCmp: HtmlEditor, state: object) => boolean | void;
    sync: (thisCmp: HtmlEditor, html: string) => boolean | void;
  }
}
