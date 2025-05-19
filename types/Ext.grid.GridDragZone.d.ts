declare namespace Ext.grid {
  class GridDragZone extends Ext.dd.DragZone {

    public constructor(config: IGridDragZoneConfig);

    public afterRepair(): void;

    public getDragData(e: object): void;

    public getRepairXY(e: EventObject): unknown[];

    public onInitDrag(e: object): void;
  }

  interface IGridDragZoneConfig {
    containerScroll?: boolean,
    ddGroup?: string,
    dropAllowed?: string,
    dropNotAllowed?: string,
    hlColor?: string,
  }
}
