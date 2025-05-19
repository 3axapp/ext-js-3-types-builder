declare namespace Ext.layout {
  class CardLayout extends Ext.layout.FitLayout {

    private type: string;

    public constructor(config: ICardLayoutConfig);

    private renderAll(ct: object, target: object): void;

    public setActiveItem(item: string | number): void;
  }

  interface ICardLayoutConfig {
    deferredRender?: boolean,
    extraCls?: string,
    layoutOnCardChange?: boolean,
    renderHidden?: boolean,
  }
}
