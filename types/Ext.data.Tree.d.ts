declare namespace Ext.data {
  class Tree extends Ext.util.Observable {

    public root: Node;

    public constructor(config: ITreeConfig);

    public addListener<T extends ITreeEvents = ITreeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends ITreeEvents = ITreeEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getNodeById(id: string): Node;

    public getRootNode(): Node;

    public hasListener<T extends ITreeEvents = ITreeEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends ITreeEvents = ITreeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private proxyNodeEvent(): void;

    private registerNode(node: object): void;

    public removeListener<T extends ITreeEvents = ITreeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setRootNode(node: Node): Node;

    private toString(): void;

    public un<T extends ITreeEvents = ITreeEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private unregisterNode(node: object): void;
  }

  interface ITreeConfig {
    listeners?: object,
    pathSeparator?: string,
  }

  interface ITreeEvents extends Record<string, (...args: any[]) => boolean | void> {
    append: (tree: Tree, parent: Node, node: Node, index: number) => boolean | void;
    beforeappend: (tree: Tree, parent: Node, node: Node) => boolean | void;
    beforeinsert: (tree: Tree, parent: Node, node: Node, refNode: Node) => boolean | void;
    beforemove: (tree: Tree, node: Node, oldParent: Node, newParent: Node, index: number) => boolean | void;
    beforeremove: (tree: Tree, parent: Node, node: Node) => boolean | void;
    insert: (tree: Tree, parent: Node, node: Node, refNode: Node) => boolean | void;
    move: (tree: Tree, node: Node, oldParent: Node, newParent: Node, index: number) => boolean | void;
    remove: (tree: Tree, parent: Node, node: Node) => boolean | void;
  }
}
