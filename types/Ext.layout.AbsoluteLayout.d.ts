declare namespace Ext.layout {
  class AbsoluteLayout extends Ext.layout.AnchorLayout {

    private type: string;

    public constructor(config: IAbsoluteLayoutConfig);

    private adjustHeightAnchor(value: object, comp: object): void;

    private adjustWidthAnchor(value: object, comp: object): void;

    private onLayout(ct: object, target: object): void;
  }

  interface IAbsoluteLayoutConfig {
    anchor?: string,
    defaultAnchor?: string,
    extraCls?: string,
    renderHidden?: boolean,
  }
}
