declare namespace Ext.layout {
  class AutoLayout extends Ext.layout.ContainerLayout {

    private monitorResize: boolean;

    private type: string;

    public constructor(config: IAutoLayoutConfig);

    private onLayout(ct: object, target: object): void;
  }

  interface IAutoLayoutConfig {
    extraCls?: string,
    renderHidden?: boolean,
  }
}
