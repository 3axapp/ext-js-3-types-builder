declare namespace Ext {
  class EventObject {

    public getCharCode(): number;

    public getKey(): number;

    public getPageX(): number;

    public getPageY(): number;

    public getRelatedTarget(): HTMLElement;

    public getTarget(selector?: string, maxDepth?: number | unknown, returnEl?: boolean): HTMLelement;

    public getWheelDelta(): number;

    public getXY(): unknown[];

    public preventDefault(): void;

    private setEvent(e: object): void;

    public stopEvent(): void;

    public stopPropagation(): void;

    public within(el: unknown, related?: boolean, allowEl?: boolean): boolean;
  }
}
