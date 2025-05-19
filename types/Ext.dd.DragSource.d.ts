declare namespace Ext.dd {
  class DragSource extends Ext.dd.DDProxy {

    public constructor(config: IDragSourceConfig);

    public afterDragDrop(target: Ext.dd.DragDrop, e: Event, id: string): void;

    public afterDragEnter(target: Ext.dd.DragDrop, e: Event, id: string): void;

    public afterDragOut(target: Ext.dd.DragDrop, e: Event, id: string): void;

    public afterDragOver(target: Ext.dd.DragDrop, e: Event, id: string): void;

    public afterInvalidDrop(e: Event, id: string): void;

    public afterValidDrop(target: object, e: Event, id: string): void;

    public beforeDragDrop(target: Ext.dd.DragDrop, e: Event, id: string): boolean;

    public beforeDragEnter(target: Ext.dd.DragDrop, e: Event, id: string): boolean;

    public beforeDragOut(target: Ext.dd.DragDrop, e: Event, id: string): boolean;

    public beforeDragOver(target: Ext.dd.DragDrop, e: Event, id: string): boolean;

    public beforeInvalidDrop(target: Ext.dd.DragDrop, e: Event, id: string): boolean;

    public getDragData(e: object): object;

    public getProxy(): Ext.dd.StatusProxy;

    public hideProxy(): void;

    public onBeforeDrag(data: object, e: Event): boolean;

    public onStartDrag(x: number, y: number): void;
  }

  interface IDragSourceConfig {
    ddGroup?: string,
    dropAllowed?: string,
    dropNotAllowed?: string,
  }
}
