declare namespace Ext.tree {
  class DefaultSelectionModel extends Ext.util.Observable {

    public constructor(config: IDefaultSelectionModelConfig);

    public addListener<T extends IDefaultSelectionModelEvents = IDefaultSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public clearSelections(silent: boolean): void;

    public fireEvent<T extends IDefaultSelectionModelEvents = IDefaultSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getSelectedNode(): TreeNode;

    public hasListener<T extends IDefaultSelectionModelEvents = IDefaultSelectionModelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private init(tree: object): void;

    public isSelected(node: TreeNode): boolean;

    public on<T extends IDefaultSelectionModelEvents = IDefaultSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onKeyDown(e: object): void;

    private onNodeClick(node: object, e: object): void;

    public removeListener<T extends IDefaultSelectionModelEvents = IDefaultSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public select(node: TreeNode): TreeNode;

    public selectNext(s: object): object;

    public selectPrevious(s: object): object;

    public un<T extends IDefaultSelectionModelEvents = IDefaultSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unselect(node: TreeNode, silent: boolean): void;
  }

  interface IDefaultSelectionModelConfig {
    listeners?: object,
  }

  interface IDefaultSelectionModelEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeselect: (thisCmp: DefaultSelectionModel, newNode: TreeNode, oldNode: TreeNode) => boolean | void;
    selectionchange: (thisCmp: DefaultSelectionModel, node: TreeNode) => boolean | void;
  }
}
