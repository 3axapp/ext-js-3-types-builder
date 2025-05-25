declare namespace Ext.tree {
  class MultiSelectionModel extends Ext.util.Observable {

    private onKeyDown: object;

    private selectNext: object;

    private selectPrevious: object;

    public constructor(config: IMultiSelectionModelConfig);

    public addListener<T extends IMultiSelectionModelEvents = IMultiSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public clearSelections(suppressEvent: object): void;

    public fireEvent<T extends IMultiSelectionModelEvents = IMultiSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getSelectedNodes(): unknown[];

    public hasListener<T extends IMultiSelectionModelEvents = IMultiSelectionModelEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private init(tree: object): void;

    public isSelected(node: TreeNode): boolean;

    public on<T extends IMultiSelectionModelEvents = IMultiSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onNodeClick(node: object, e: object): void;

    public removeListener<T extends IMultiSelectionModelEvents = IMultiSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public select(node: TreeNode, e?: EventObject, keepExisting?: boolean): TreeNode;

    public un<T extends IMultiSelectionModelEvents = IMultiSelectionModelEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public unselect(node: TreeNode): void;
  }

  interface IMultiSelectionModelConfig {
    listeners?: object,
  }

  interface IMultiSelectionModelEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    selectionchange: (thisCmp: MultiSelectionModel, nodes: unknown[]) => boolean | void;
  }
}
