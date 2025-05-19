declare namespace Ext.tree {
  class TreeDragZone extends Ext.dd.DragZone {

    public tree: Ext.tree.TreePanel;

    public constructor(config: ITreeDragZoneConfig);
  }

  interface ITreeDragZoneConfig {
    containerScroll?: boolean,
    ddGroup?: string,
    dropAllowed?: string,
    dropNotAllowed?: string,
    hlColor?: string,
  }
}
