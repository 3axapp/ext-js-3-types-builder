declare namespace Ext.tree {
  class TreeSorter {

    public constructor(config: ITreeSorterConfig);

    private doSort(node: object): void;

    private updateSort(tree: object, node: object): void;

    private updateSortParent(node: object): void;
  }

  interface ITreeSorterConfig {
    caseSensitive?: boolean,
    dir?: string,
    folderSort?: boolean,
    leafAttr?: string,
    property?: string,
    sortType?: Function,
  }
}
