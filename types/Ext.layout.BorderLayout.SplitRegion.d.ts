declare namespace Ext.layout.BorderLayout {
  class SplitRegion extends Ext.layout.BorderLayout.Region {

    public constructor(config: ISplitRegionConfig);

    public getSplitBar(): Ext.SplitBar;
  }

  interface ISplitRegionConfig {
    animFloat?: boolean,
    autoHide?: boolean,
    cmargins?: object,
    collapseMode?: string,
    collapsible?: boolean,
    collapsibleSplitTip?: string,
    floatable?: boolean,
    margins?: object,
    minHeight?: number,
    minWidth?: number,
    split?: boolean,
    splitTip?: string,
    tickSize?: number,
    useSplitTips?: boolean,
  }
}
