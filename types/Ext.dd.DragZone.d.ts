declare namespace Ext.dd {
  class DragZone extends Ext.dd.DragSource {

    public dragData: object;

    public constructor(config: IDragZoneConfig);

    public afterRepair(): void;

    private destroy(): void;

    public getDragData(e: EventObject): object;

    public getRepairXY(e: EventObject): unknown[];

    public onInitDrag(x: number, y: number): boolean;
  }

  interface IDragZoneConfig {
    containerScroll?: boolean,
    ddGroup?: string,
    dropAllowed?: string,
    dropNotAllowed?: string,
    hlColor?: string,
  }
}
