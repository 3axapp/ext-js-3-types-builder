declare namespace Ext.dd.DragDropMgr {
  class ElementWrapper {

    private _timeoutCount: number;

    public css: object;

    public el: object;

    public id: object;

    private _addListeners(): void;

    public getPosX(el: object): int;

    public getPosY(el: object): int;

    private getScroll(): void;

    public getScrollLeft(): int;

    public getScrollTop(): int;

    public getStyle(el: HTMLElement, styleProp: string): string;

    public handleWasClicked(node: object): void;

    public moveToEl(moveEl: HTMLElement, targetEl: HTMLElement): void;

    public numericSort(a: object, b: object): void;

    public swapNode(n1: object, n2: object): void;
  }
}
