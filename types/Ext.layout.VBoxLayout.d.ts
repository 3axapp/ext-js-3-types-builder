declare namespace Ext.layout {
  class VBoxLayout extends Ext.layout.BoxLayout {

    private type: string;

    public constructor(config: IVBoxLayoutConfig);

    private calculateChildBoxes(visibleItems: unknown[], targetSize: object): object;
  }

  interface IVBoxLayoutConfig {
    align?: string,
    defaultMargins?: object,
    extraCls?: string,
    flex?: number,
    pack?: string,
    padding?: string,
    renderHidden?: boolean,
  }
}
