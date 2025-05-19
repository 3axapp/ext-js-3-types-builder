declare namespace Ext.tree {
  class AsyncTreeNode extends Ext.tree.TreeNode {

    public loader: TreeLoader;

    public constructor(config: IAsyncTreeNodeConfig);

    public addListener<T extends IAsyncTreeNodeEvents = IAsyncTreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IAsyncTreeNodeEvents = IAsyncTreeNodeEvents, E extends keyof T = keyof T>(evtName: object): boolean;

    public hasListener<T extends IAsyncTreeNodeEvents = IAsyncTreeNodeEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isLoaded(): boolean;

    public isLoading(): boolean;

    public on<T extends IAsyncTreeNodeEvents = IAsyncTreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public reload(callback: Function, scope?: object): void;

    public removeListener<T extends IAsyncTreeNodeEvents = IAsyncTreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends IAsyncTreeNodeEvents = IAsyncTreeNodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IAsyncTreeNodeConfig {
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
    loader?: TreeLoader,
    qtip?: string,
    qtipCfg?: string,
    singleClickExpand?: boolean,
    text?: string,
    uiProvider?: Function,
  }

  interface IAsyncTreeNodeEvents extends Record<string, (...args: any[]) => boolean | void> {
    append: (tree: Tree, thisCmp: AsyncTreeNode, node: Node, index: number) => boolean | void;
    beforeappend: (tree: Tree, thisCmp: AsyncTreeNode, node: Node) => boolean | void;
    beforechildrenrendered: (thisCmp: AsyncTreeNode) => boolean | void;
    beforeclick: (thisCmp: AsyncTreeNode, e: Ext.EventObject) => boolean | void;
    beforecollapse: (thisCmp: AsyncTreeNode, deep: boolean, anim: boolean) => boolean | void;
    beforedblclick: (thisCmp: AsyncTreeNode, e: Ext.EventObject) => boolean | void;
    beforeexpand: (thisCmp: AsyncTreeNode, deep: boolean, anim: boolean) => boolean | void;
    beforeinsert: (tree: Tree, thisCmp: AsyncTreeNode, node: Node, refNode: Node) => boolean | void;
    beforeload: (thisCmp: AsyncTreeNode) => boolean | void;
    beforemove: (tree: Tree, thisCmp: AsyncTreeNode, oldParent: Node, newParent: Node, index: number) => boolean | void;
    beforeremove: (tree: Tree, thisCmp: AsyncTreeNode, node: Node) => boolean | void;
    checkchange: (thisCmp: AsyncTreeNode, checked: boolean) => boolean | void;
    click: (thisCmp: AsyncTreeNode, e: Ext.EventObject) => boolean | void;
    collapse: (thisCmp: AsyncTreeNode) => boolean | void;
    contextmenu: (thisCmp: AsyncTreeNode, e: Ext.EventObject) => boolean | void;
    dblclick: (thisCmp: AsyncTreeNode, e: Ext.EventObject) => boolean | void;
    disabledchange: (thisCmp: AsyncTreeNode, disabled: boolean) => boolean | void;
    expand: (thisCmp: AsyncTreeNode) => boolean | void;
    insert: (tree: Tree, thisCmp: AsyncTreeNode, node: Node, refNode: Node) => boolean | void;
    load: (thisCmp: AsyncTreeNode) => boolean | void;
    move: (tree: Tree, thisCmp: AsyncTreeNode, oldParent: Node, newParent: Node, index: number) => boolean | void;
    remove: (tree: Tree, thisCmp: AsyncTreeNode, node: Node) => boolean | void;
    textchange: (thisCmp: AsyncTreeNode, text: string, oldText: string) => boolean | void;
  }
}
