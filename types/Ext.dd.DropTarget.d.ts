declare namespace Ext.dd {
  class DropTarget extends Ext.dd.DDTarget {

    private isNotifyTarget: boolean;

    public isTarget: boolean;

    public constructor(config: IDropTargetConfig);

    private destroy(): void;

    public notifyDrop(source: Ext.dd.DragSource, e: Event, data: object): boolean;

    public notifyEnter(source: Ext.dd.DragSource, e: Event, data: object): string;

    public notifyOut(source: Ext.dd.DragSource, e: Event, data: object): void;

    public notifyOver(source: Ext.dd.DragSource, e: Event, data: object): string;
  }

  interface IDropTargetConfig {
    ddGroup?: string,
    dropAllowed?: string,
    dropNotAllowed?: string,
    overClass?: string,
  }
}
