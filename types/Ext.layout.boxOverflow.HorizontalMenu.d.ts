declare namespace Ext.layout.boxOverflow {
  class HorizontalMenu extends Ext.layout.boxOverflow.Menu {

    public constructor(config: IHorizontalMenuConfig);

    private handleOverflow(calculations: object, targetSize: object): void;
  }

  interface IHorizontalMenuConfig {
    afterCls?: string,
  }
}
