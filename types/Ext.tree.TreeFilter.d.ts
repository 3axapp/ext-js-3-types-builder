declare namespace Ext.tree {
  class TreeFilter {

    public clear(): void;

    public filter(value: string | RegExp, attr?: string, startNode?: TreeNode): void;

    public filterBy(fn: Function, scope?: object): void;
  }
}
