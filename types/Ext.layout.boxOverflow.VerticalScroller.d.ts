declare namespace Ext.layout.boxOverflow {
  class VerticalScroller extends Ext.layout.boxOverflow.Scroller {

    public constructor(config: IVerticalScrollerConfig);

    private atExtremeAfter(): boolean;

    private createInnerElements(): void;

    private getMaxScrollBottom(): number;

    public getScrollPosition(): number;

    private handleOverflow(calculations: object, targetSize: object): void;

    private scrollTo(position: number, animate: boolean): void;
  }

  interface IVerticalScrollerConfig {
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
