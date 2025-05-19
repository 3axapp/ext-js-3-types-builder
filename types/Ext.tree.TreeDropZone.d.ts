declare namespace Ext.tree {
  class TreeDropZone extends Ext.dd.DropZone {

    public dragOverData: Ext.tree.TreePanel;

    public tree: Ext.tree.TreePanel;

    public constructor(config: ITreeDropZoneConfig);
  }

  interface ITreeDropZoneConfig {
    allowContainerDrop?: string,
    allowParentInsert?: boolean,
    appendOnly?: string,
    ddGroup?: string,
    dropAllowed?: string,
    dropNotAllowed?: string,
    expandDelay?: string,
    overClass?: string,
  }
}
