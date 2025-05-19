declare namespace Ext.layout.boxOverflow {
  class HorizontalScroller extends Ext.layout.boxOverflow.Scroller {

    public constructor(config: IHorizontalScrollerConfig);

    private atExtremeAfter(): boolean;

    private createInnerElements(): void;

    private getMaxScrollRight(): number;

    public getScrollPosition(): number;

    private handleOverflow(calculations: object, targetSize: object): void;

    private scrollTo(position: number, animate: boolean): void;
  }

  interface IHorizontalScrollerConfig {
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
