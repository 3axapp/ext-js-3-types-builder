declare namespace Ext.data {
  class Node extends Ext.util.Observable {

    public attributes: object;

    public childNodes: unknown[];

    public firstChild: Node;

    public id: string;

    public lastChild: Node;

    public nextSibling: Node;

    public parentNode: Node;

    public previousSibling: Node;

    public constructor(config: INodeConfig);

    public addListener<T extends INodeEvents = INodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public appendChild(node: Node | unknown[]): Node;

    public bubble(fn: Function, scope?: object, args?: unknown[]): void;

    public cascade(fn: Function, scope?: object, args?: unknown[]): void;

    private clear(destroy: object): void;

    public contains(node: Node): boolean;

    public destroy(silent: object): void;

    public eachChild(fn: Function, scope?: object, args?: unknown[]): void;

    public findChild(attribute: string, value: unknown, deep?: boolean): Node;

    public findChildBy(fn: Function, scope?: object, deep?: boolean): Node;

    public fireEvent<T extends INodeEvents = INodeEvents, E extends keyof T = keyof T>(evtName: object): boolean;

    public getDepth(): number;

    public getOwnerTree(): Tree;

    public getPath(attr?: string): string;

    public hasChildNodes(): boolean;

    public hasListener<T extends INodeEvents = INodeEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public indexOf(node: Node): number;

    public insertBefore(node: Node, refNode: Node): Node;

    public isAncestor(node: Node): boolean;

    public isExpandable(): boolean;

    public isFirst(): boolean;

    public isLast(): boolean;

    public isLeaf(): boolean;

    public item(index: number): Node;

    public on<T extends INodeEvents = INodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onIdChange(): void;

    public remove(destroy: boolean): this;

    public removeAll(destroy: boolean): this;

    public removeChild(node: Node, destroy: boolean): Node;

    public removeListener<T extends INodeEvents = INodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public replaceChild(newChild: Node, oldChild: Node): Node;

    private setFirstChild(node: object): void;

    public setId(id: string): void;

    private setLastChild(node: object): void;

    private setOwnerTree(tree: object, destroy: object): void;

    public sort(fn: Function, scope?: object): void;

    private toString(): void;

    public un<T extends INodeEvents = INodeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface INodeConfig {
    id?: string,
    leaf?: boolean,
    listeners?: object,
  }

  interface INodeEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    append: (tree: Tree, thisCmp: Node, node: Node, index: number) => boolean | void;
    beforeappend: (tree: Tree, thisCmp: Node, node: Node) => boolean | void;
    beforeinsert: (tree: Tree, thisCmp: Node, node: Node, refNode: Node) => boolean | void;
    beforemove: (tree: Tree, thisCmp: Node, oldParent: Node, newParent: Node, index: number) => boolean | void;
    beforeremove: (tree: Tree, thisCmp: Node, node: Node) => boolean | void;
    insert: (tree: Tree, thisCmp: Node, node: Node, refNode: Node) => boolean | void;
    move: (tree: Tree, thisCmp: Node, oldParent: Node, newParent: Node, index: number) => boolean | void;
    remove: (tree: Tree, thisCmp: Node, node: Node) => boolean | void;
  }
}
