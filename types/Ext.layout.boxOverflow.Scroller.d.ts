declare namespace Ext.layout.boxOverflow {
  class Scroller extends Ext.layout.boxOverflow.None {

    public afterScroller: Ext.Element;

    public beforeScroller: Ext.Element;

    public constructor(config: IScrollerConfig);

    private atExtremeBefore(): boolean;

    private clearOverflow(): void;

    private createScrollers(): void;

    private createWheelListener(): void;

    private destroy(): void;

    private getItem(item: Ext.Component | string | number): Ext.Component;

    private getItemVisibility(item: Ext.Component): object;

    private getScrollAnim(): object;

    private handleOverflow(calculations: object, targetSize: object): void;

    private hideScrollers(): void;

    private scrollBy(delta: number): void;

    private scrollLeft(animate: object): void;

    private scrollRight(animate: object): void;

    public scrollToItem(item: string | number | Ext.Component, animate: boolean): void;

    private showScrollers(): void;

    private updateScrollButtons(): void;
  }

  interface IScrollerConfig {
    afterCls?: string,
    afterScrollerCls?: string,
    animateScroll?: boolean,
    beforeCls?: string,
    beforeScrollerCls?: string,
    scrollDuration?: number,
    scrollIncrement?: number,
    scrollRepeatInterval?: number,
    scrollerCls?: string,
    wheelIncrement?: number,
  }
}
