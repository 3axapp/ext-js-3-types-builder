declare namespace Ext {
  class Editor extends Ext.Component {

    public constructor(config: IEditorConfig);

    public addListener<T extends IEditorEvents = IEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public cancelEdit(remainVisible: boolean): void;

    public completeEdit(remainVisible: boolean): void;

    public fireEvent<T extends IEditorEvents = IEditorEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getValue(): unknown;

    public hasListener<T extends IEditorEvents = IEditorEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IEditorEvents = IEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public realign(autoSize?: boolean): void;

    public removeListener<T extends IEditorEvents = IEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setSize(width: number, height: number): void;

    public setValue(value: unknown): void;

    public startEdit(el: unknown, value?: string): void;

    public un<T extends IEditorEvents = IEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IEditorConfig {
    alignment?: string,
    allowBlur?: boolean,
    allowDomMove?: boolean,
    applyTo?: unknown,
    autoEl?: unknown,
    autoShow?: boolean,
    autoSize?: boolean | string,
    bubbleEvents?: unknown[],
    cancelOnEsc?: boolean,
    clearCls?: string,
    cls?: string,
    completeOnEnter?: boolean,
    constrain?: boolean,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    disabled?: boolean,
    disabledClass?: string,
    field?: Ext.form.Field,
    fieldLabel?: string,
    hidden?: boolean,
    hideEl?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    ignoreNoChange?: boolean,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    offsets?: unknown[],
    overCls?: string,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    renderTo?: unknown,
    revertInvalid?: boolean,
    shadow?: boolean | string,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    swallowKeys?: boolean,
    tpl?: unknown,
    tplWriteMode?: string,
    updateEl?: boolean,
    value?: unknown,
    xtype?: string,
  }

  interface IEditorEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: Editor, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: Editor) => boolean | void;
    beforecomplete: (thisCmp: Editor, value: unknown, startValue: unknown) => boolean | void;
    beforedestroy: (thisCmp: Editor) => boolean | void;
    beforehide: (thisCmp: Editor) => boolean | void;
    beforerender: (thisCmp: Editor) => boolean | void;
    beforeshow: (thisCmp: Editor) => boolean | void;
    beforestartedit: (thisCmp: Editor, boundEl: Ext.Element, value: unknown) => boolean | void;
    beforestaterestore: (thisCmp: Editor, state: object) => boolean | void;
    beforestatesave: (thisCmp: Editor, state: object) => boolean | void;
    canceledit: (thisCmp: Editor, value: unknown, startValue: unknown) => boolean | void;
    complete: (thisCmp: Editor, value: unknown, startValue: unknown) => boolean | void;
    destroy: (thisCmp: Editor) => boolean | void;
    disable: (thisCmp: Editor) => boolean | void;
    enable: (thisCmp: Editor) => boolean | void;
    hide: (thisCmp: Editor) => boolean | void;
    removed: (thisCmp: Editor, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: Editor) => boolean | void;
    show: (thisCmp: Editor) => boolean | void;
    specialkey: (thisCmp: Editor, e: Ext.EventObject) => boolean | void;
    startedit: (boundEl: Ext.Element, value: unknown) => boolean | void;
    staterestore: (thisCmp: Editor, state: object) => boolean | void;
    statesave: (thisCmp: Editor, state: object) => boolean | void;
  }
}
