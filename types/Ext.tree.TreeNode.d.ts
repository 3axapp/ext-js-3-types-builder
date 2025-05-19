declare namespace Ext.tree {
  class TreeNode extends Ext.data.Node {

    public disabled: boolean;

    public hidden: boolean;

    private preventHScroll: boolean;

    public text: string;

    public ui: TreeNodeUI;

    public constructor(config: ITreeNodeConfig);

    public addListener<T extends ITreeNodeEvents = ITreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public appendChild(n: object): Node;

    private beginUpdate(): void;

    private cancelExpand(): void;

    public collapse(deep?: boolean, anim?: boolean, callback?: Function, scope?: object): void;

    public collapseChildNodes(deep?: boolean): void;

    private delayedExpand(delay: object): void;

    public destroy(silent: object): void;

    public disable(): void;

    public enable(): void;

    private endUpdate(): void;

    public ensureVisible(callback?: Function, scope?: object): void;

    public expand(deep?: boolean, anim?: boolean, callback?: Function, scope?: object): void;

    public expandChildNodes(deep?: boolean): void;

    public fireEvent<T extends ITreeNodeEvents = ITreeNodeEvents, E extends keyof T = keyof T>(evtName: object): boolean;

    private getLoader(): void;

    public getUI(): TreeNodeUI;

    public hasListener<T extends ITreeNodeEvents = ITreeNodeEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public insertBefore(node: object, refNode: object): Node;

    public isExpanded(): boolean;

    private isHiddenRoot(): void;

    public isSelected(): boolean;

    public on<T extends ITreeNodeEvents = ITreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onIdChange(id: object): void;

    public removeChild(node: object, destroy: object): Node;

    public removeListener<T extends ITreeNodeEvents = ITreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private render(bulkRender: object): void;

    private renderChildren(suppressEvent: object): void;

    private renderIndent(deep: object, refresh: object): void;

    private runCallback(cb: object, scope: object, args: object): void;

    public select(): void;

    public setCls(cls: string): void;

    private setFirstChild(node: object): void;

    public setHref(href: string, target?: string): void;

    public setIcon(icon: string): void;

    public setIconCls(cls: string): void;

    private setLastChild(node: object): void;

    public setText(text: string): void;

    public setTooltip(tip: string, title?: string): void;

    public sort(fn: object, scope: object): void;

    public toggle(): void;

    public un<T extends ITreeNodeEvents = ITreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unselect(silent?: boolean): void;
  }

  interface ITreeNodeConfig {
    allowChildren?: boolean,
    allowDrag?: boolean,
    allowDrop?: boolean,
    checked?: boolean,
    cls?: string,
    disabled?: boolean,
    draggable?: boolean,
    editable?: boolean,
    expandable?: boolean,
    expanded?: boolean,
    hidden?: boolean,
    href?: string,
    hrefTarget?: string,
    icon?: string,
    iconCls?: string,
    id?: string,
    isTarget?: boolean,
    leaf?: boolean,
    listeners?: object,
    qtip?: string,
    qtipCfg?: string,
    singleClickExpand?: boolean,
    text?: string,
    uiProvider?: Function,
  }

  interface ITreeNodeEvents extends Record<string, (...args: any[]) => boolean | void> {
    append: (tree: Tree, thisCmp: TreeNode, node: Node, index: number) => boolean | void;
    beforeappend: (tree: Tree, thisCmp: TreeNode, node: Node) => boolean | void;
    beforechildrenrendered: (thisCmp: TreeNode) => boolean | void;
    beforeclick: (thisCmp: TreeNode, e: Ext.EventObject) => boolean | void;
    beforecollapse: (thisCmp: TreeNode, deep: boolean, anim: boolean) => boolean | void;
    beforedblclick: (thisCmp: TreeNode, e: Ext.EventObject) => boolean | void;
    beforeexpand: (thisCmp: TreeNode, deep: boolean, anim: boolean) => boolean | void;
    beforeinsert: (tree: Tree, thisCmp: TreeNode, node: Node, refNode: Node) => boolean | void;
    beforemove: (tree: Tree, thisCmp: TreeNode, oldParent: Node, newParent: Node, index: number) => boolean | void;
    beforeremove: (tree: Tree, thisCmp: TreeNode, node: Node) => boolean | void;
    checkchange: (thisCmp: TreeNode, checked: boolean) => boolean | void;
    click: (thisCmp: TreeNode, e: Ext.EventObject) => boolean | void;
    collapse: (thisCmp: TreeNode) => boolean | void;
    contextmenu: (thisCmp: TreeNode, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: TreeNode, e: Ext.EventObject) => boolean | void;
    disabledchange: (thisCmp: TreeNode, disabled: boolean) => boolean | void;
    expand: (thisCmp: TreeNode) => boolean | void;
    insert: (tree: Tree, thisCmp: TreeNode, node: Node, refNode: Node) => boolean | void;
    move: (tree: Tree, thisCmp: TreeNode, oldParent: Node, newParent: Node, index: number) => boolean | void;
    remove: (tree: Tree, thisCmp: TreeNode, node: Node) => boolean | void;
    textchange: (thisCmp: TreeNode, text: string, oldText: string) => boolean | void;
  }
}
