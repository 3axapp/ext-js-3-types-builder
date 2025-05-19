declare namespace Ext.dd {
  class DragDropMgr {

    public INTERSECT: int;

    public POINT: int;

    public clickPixelThresh: int;

    public clickTimeThresh: int;

    private clickTimeout: object;

    private deltaX: int;

    private deltaY: int;

    private dragCurrent: DragDrop;

    private dragOvers: unknown[];

    private dragThreshMet: boolean;

    private elementCache: object;

    private handleIds: String[];

    private ids: String[];

    private initialized: boolean;

    private locationCache: object;

    private locked: boolean;

    public mode: int;

    public notifyOccluded: boolean;

    public preventDefault: boolean;

    private startX: int;

    private startY: int;

    public stopPropagation: boolean;

    public useCache: boolean;

    private _execOnAll(sMethod: object, args: object): void;

    private _onLoad(): void;

    private _onResize(e: object): void;

    private _onUnload(e: object, me: object): void;

    private _remove(oDD: object): void;

    private byZIndex(d1: object, d2: object): void;

    private fireEvents(e: Event, isDrop: boolean): void;

    public getBestMatch(dds: DragDrop[]): DragDrop;

    public getCss(id: string): object;

    public getDDById(id: string): DragDrop;

    private getElWrapper(id: string): Ext.dd.DDM.ElementWrapper;

    public getElement(id: string): object;

    public getLocation(oDD: DragDrop): Ext.lib.Region;

    public getRelated(p_oDD: DragDrop, bTargetsOnly: boolean): DragDrop[];

    private getZIndex(element: object): number;

    private handleMouseDown(e: Event, oDD: object): void;

    private handleMouseMove(e: Event): void;

    private handleMouseUp(e: Event): void;

    private init(): void;

    public isDragDrop(id: string): boolean;

    public isHandle(id: string): boolean;

    public isLegalTarget(oDD: DragDrop, oTargetDD: DragDrop): boolean;

    public isLocked(): boolean;

    private isOverTarget(pt: Ext.lib.Point, oTarget: DragDrop): boolean;

    public isTypeOfDD(the: object): boolean;

    public lock(): void;

    public refreshCache(groups: object): void;

    public regDragDrop(oDD: DragDrop, sGroup: string): void;

    public regHandle(sDDId: string, sHandleId: string): void;

    private removeDDFromGroup(oDD: object, sGroup: object): void;

    public startDrag(x: object, y: object): void;

    private stopDrag(e: Event): void;

    public stopEvent(e: Event): void;

    public unlock(): void;

    private unregAll(): void;

    public verifyEl(el: HTMLElement): boolean;
  }
}
