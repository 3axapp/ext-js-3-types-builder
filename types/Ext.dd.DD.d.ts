declare namespace Ext.dd {
  class DD extends Ext.dd.DragDrop {

    public scroll: boolean;

    public alignElWithMouse(el: HTMLElement, iPageX: int, iPageY: int): void;

    public applyConfig(): void;

    public autoOffset(iPageX: int, iPageY: int): void;

    private autoScroll(x: int, y: int, h: int, w: int): void;

    public b4Drag(e: object): void;

    public b4MouseDown(e: object): void;

    public cachePosition(iPageX: object, iPageY: object): void;

    private getTargetCoord(iPageX: int, iPageY: int): object;

    public setDelta(iDeltaX: int, iDeltaY: int): void;

    public setDragElPos(iPageX: int, iPageY: int): void;
  }
}
