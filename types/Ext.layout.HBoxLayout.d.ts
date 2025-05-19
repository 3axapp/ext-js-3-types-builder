declare namespace Ext.layout {
  class HBoxLayout extends Ext.layout.BoxLayout {

    private type: string;

    public constructor(config: IHBoxLayoutConfig);

    private calculateChildBoxes(visibleItems: unknown[], targetSize: object): object;
  }

  interface IHBoxLayoutConfig {
    align?: string,
    defaultMargins?: object,
    extraCls?: string,
    flex?: number,
    pack?: string,
    padding?: string,
    renderHidden?: boolean,
  }
}
