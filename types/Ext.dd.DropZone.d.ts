declare namespace Ext.dd {
  class DropZone extends Ext.dd.DropTarget {

    public constructor(config: IDropZoneConfig);

    public getTargetFromEvent(e: Event): object;

    public notifyDrop(source: Ext.dd.DragSource, e: Event, data: object): boolean;

    public notifyEnter(source: Ext.dd.DragSource, e: Event, data: object): string;

    public notifyOut(source: Ext.dd.DragSource, e: Event, data: object): void;

    public notifyOver(source: Ext.dd.DragSource, e: Event, data: object): string;

    public onContainerDrop(source: Ext.dd.DragSource, e: Event, data: object): boolean;

    public onContainerOver(source: Ext.dd.DragSource, e: Event, data: object): string;

    public onNodeDrop(nodeData: object, source: Ext.dd.DragSource, e: Event, data: object): boolean;

    public onNodeEnter(nodeData: object, source: Ext.dd.DragSource, e: Event, data: object): void;

    public onNodeOut(nodeData: object, source: Ext.dd.DragSource, e: Event, data: object): void;

    public onNodeOver(nodeData: object, source: Ext.dd.DragSource, e: Event, data: object): string;
  }

  interface IDropZoneConfig {
    ddGroup?: string,
    dropAllowed?: string,
    dropNotAllowed?: string,
    overClass?: string,
  }
}
