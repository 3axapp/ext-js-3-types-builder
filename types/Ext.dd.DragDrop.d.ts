declare namespace Ext.dd {
  class DragDrop {

    private __ygDragDrop: boolean;

    private _domRef: object;

    public available: boolean;

    public config: object;

    private constrainX: boolean;

    private constrainY: boolean;

    public defaultPadding: object;

    private dragElId: string;

    public groups: object;

    private handleElId: string;

    public hasOuterHandles: boolean;

    public id: string;

    public ignoreSelf: boolean;

    public invalidHandleClasses: unknown[];

    public invalidHandleIds: object;

    public invalidHandleTypes: object;

    public isTarget: boolean;

    private locked: boolean;

    public maintainOffset: boolean;

    private maxX: int;

    private maxY: int;

    private minX: int;

    private minY: int;

    public moveOnly: boolean;

    public padding: int[];

    public primaryButtonOnly: boolean;

    private startPageX: int;

    private startPageY: int;

    public xTicks: int[];

    public yTicks: int[];

    public addInvalidHandleClass(cssClass: string): void;

    public addInvalidHandleId(id: string): void;

    public addInvalidHandleType(tagName: string): void;

    public addToGroup(sGroup: object): void;

    public applyConfig(): void;

    private b4Drag(e: object): void;

    private b4DragDrop(e: object): void;

    private b4DragOut(e: object): void;

    private b4DragOver(e: object): void;

    private b4EndDrag(e: object): void;

    private b4MouseDown(e: Event): void;

    private b4StartDrag(x: object, y: object): void;

    public clearConstraints(): void;

    public clearTicks(): void;

    public constrainTo(constrainTo: unknown, pad?: object | number, inContent?: boolean): void;

    public endDrag(e: Event): void;

    public getDragEl(): HTMLElement;

    public getEl(): HTMLElement;

    private getTick(val: int, tickArray: int[]): int;

    private handleMouseDown(e: Event, oDD: Ext.dd.DragDrop): void;

    private handleOnAvailable(): void;

    public init(id: object, sGroup: string, config: object): void;

    public initTarget(id: object, sGroup: string, config: object): void;

    public isLocked(): boolean;

    public isValidHandleChild(node: HTMLElement): boolean;

    public lock(): void;

    public onAvailable(): void;

    public onDrag(e: Event): void;

    public onDragDrop(e: Event, id: string | DragDrop[]): void;

    public onDragEnter(e: Event, id: string | DragDrop[]): void;

    public onDragOut(e: Event, id: string | DragDrop[]): void;

    public onDragOver(e: Event, id: string | DragDrop[]): void;

    public onInvalidDrop(e: Event): void;

    public onMouseDown(e: Event): void;

    public onMouseUp(e: Event): void;

    public removeFromGroup(sGroup: string): void;

    public removeInvalidHandleClass(cssClass: string): void;

    public removeInvalidHandleId(id: string): void;

    public removeInvalidHandleType(tagName: string): void;

    public resetConstraints(maintainOffset: boolean): void;

    public setDragElId(id: object): void;

    public setHandleElId(id: object): void;

    public setInitPosition(diffX: int, diffY: int): void;

    public setOuterHandleElId(id: object): void;

    public setPadding(iTop: int, iRight: int, iBot: int, iLeft: int): void;

    private setStartPosition(pos: object): void;

    public setXConstraint(iLeft: int, iRight: int, iTickSize: int): void;

    private setXTicks(iStartX: object, iTickSize: object): void;

    public setYConstraint(iUp: int, iDown: int, iTickSize: int): void;

    private setYTicks(iStartY: object, iTickSize: object): void;

    public startDrag(X: int, Y: int): void;

    public toString(): string;

    public unlock(): void;

    public unreg(): void;
  }
}
