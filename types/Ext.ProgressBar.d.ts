declare namespace Ext {
  class ProgressBar extends Ext.BoxComponent {

    private waitTimer: object;

    public constructor(config: IProgressBarConfig);

    public addListener<T extends IProgressBarEvents = IProgressBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterRender(): void;

    private clearTimer(): void;

    public fireEvent<T extends IProgressBarEvents = IProgressBarEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends IProgressBarEvents = IProgressBarEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initComponent(): void;

    public isWaiting(): boolean;

    public on<T extends IProgressBarEvents = IProgressBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDestroy(): void;

    private onRender(ct: object, position: object): void;

    public removeListener<T extends IProgressBarEvents = IProgressBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public reset(hide?: boolean): this;

    public setSize(width: number, height: number): this;

    public syncProgressBar(): this;

    public un<T extends IProgressBarEvents = IProgressBarEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public updateProgress(value?: number, text?: string, animate?: boolean): this;

    public updateText(text?: string): this;

    public wait(config?: object): this;
  }

  interface IProgressBarConfig {
    allowDomMove?: boolean,
    anchor?: string,
    animate?: boolean,
    applyTo?: unknown,
    autoEl?: unknown,
    autoHeight?: boolean,
    autoScroll?: boolean,
    autoShow?: boolean,
    autoWidth?: boolean,
    baseCls?: string,
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
    text?: string,
    textEl?: unknown,
    tpl?: unknown,
    tplWriteMode?: string,
    value?: number,
    width?: number,
    x?: number,
    xtype?: string,
    y?: number,
  }

  interface IProgressBarEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: ProgressBar, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: ProgressBar) => boolean | void;
    beforedestroy: (thisCmp: ProgressBar) => boolean | void;
    beforehide: (thisCmp: ProgressBar) => boolean | void;
    beforerender: (thisCmp: ProgressBar) => boolean | void;
    beforeshow: (thisCmp: ProgressBar) => boolean | void;
    beforestaterestore: (thisCmp: ProgressBar, state: object) => boolean | void;
    beforestatesave: (thisCmp: ProgressBar, state: object) => boolean | void;
    destroy: (thisCmp: ProgressBar) => boolean | void;
    disable: (thisCmp: ProgressBar) => boolean | void;
    enable: (thisCmp: ProgressBar) => boolean | void;
    hide: (thisCmp: ProgressBar) => boolean | void;
    move: (thisCmp: ProgressBar, x: number, y: number) => boolean | void;
    removed: (thisCmp: ProgressBar, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: ProgressBar) => boolean | void;
    resize: (thisCmp: ProgressBar, adjWidth: number, adjHeight: number, rawWidth: number, rawHeight: number) => boolean | void;
    show: (thisCmp: ProgressBar) => boolean | void;
    staterestore: (thisCmp: ProgressBar, state: object) => boolean | void;
    statesave: (thisCmp: ProgressBar, state: object) => boolean | void;
    update: (thisCmp: ProgressBar, value: number, text: string) => boolean | void;
  }
}
