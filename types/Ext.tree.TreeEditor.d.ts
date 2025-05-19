declare namespace Ext.tree {
  class TreeEditor extends Ext.Editor {

    public editNode: Ext.tree.TreeNode;

    public constructor(config: ITreeEditorConfig);

    public addListener<T extends ITreeEditorEvents = ITreeEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ITreeEditorEvents = ITreeEditorEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ITreeEditorEvents = ITreeEditorEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ITreeEditorEvents = ITreeEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends ITreeEditorEvents = ITreeEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public triggerEdit(node: object): void;

    public un<T extends ITreeEditorEvents = ITreeEditorEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITreeEditorConfig {
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
    editDelay?: number,
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
    maxWidth?: number,
    offsets?: unknown[],
    overCls?: string,
    plugins?: object | unknown[],
    ptype?: string,
    ref?: string,
    renderTo?: unknown,
    revertInvalid?: boolean,
    shadow?: boolean | string,
    shim?: boolean,
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

  interface ITreeEditorEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: TreeEditor, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: TreeEditor) => boolean | void;
    beforecomplete: (thisCmp: TreeEditor, value: unknown, startValue: unknown) => boolean | void;
    beforedestroy: (thisCmp: TreeEditor) => boolean | void;
    beforehide: (thisCmp: TreeEditor) => boolean | void;
    beforerender: (thisCmp: TreeEditor) => boolean | void;
    beforeshow: (thisCmp: TreeEditor) => boolean | void;
    beforestartedit: (thisCmp: TreeEditor, boundEl: Ext.Element, value: unknown) => boolean | void;
    beforestaterestore: (thisCmp: TreeEditor, state: object) => boolean | void;
    beforestatesave: (thisCmp: TreeEditor, state: object) => boolean | void;
    canceledit: (thisCmp: TreeEditor, value: unknown, startValue: unknown) => boolean | void;
    complete: (thisCmp: TreeEditor, value: unknown, startValue: unknown) => boolean | void;
    destroy: (thisCmp: TreeEditor) => boolean | void;
    disable: (thisCmp: TreeEditor) => boolean | void;
    enable: (thisCmp: TreeEditor) => boolean | void;
    hide: (thisCmp: TreeEditor) => boolean | void;
    removed: (thisCmp: TreeEditor, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: TreeEditor) => boolean | void;
    show: (thisCmp: TreeEditor) => boolean | void;
    specialkey: (thisCmp: TreeEditor, e: Ext.EventObject) => boolean | void;
    startedit: (boundEl: Ext.Element, value: unknown) => boolean | void;
    staterestore: (thisCmp: TreeEditor, state: object) => boolean | void;
    statesave: (thisCmp: TreeEditor, state: object) => boolean | void;
  }
}
