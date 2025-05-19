declare namespace Ext.layout {
  class BorderLayout extends Ext.layout.ContainerLayout {

    private monitorResize: boolean;

    private rendered: boolean;

    private targetCls: string;

    private type: string;

    public constructor(config: IBorderLayoutConfig);

    private destroy(): void;

    private getLayoutTargetSize(): void;

    private onLayout(ct: object, target: object): void;
  }

  interface IBorderLayoutConfig {
    extraCls?: string,
    renderHidden?: boolean,
  }
}
