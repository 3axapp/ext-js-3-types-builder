declare namespace Ext.layout {
  class FitLayout extends Ext.layout.ContainerLayout {

    private monitorResize: boolean;

    private type: string;

    public constructor(config: IFitLayoutConfig);

    private getLayoutTargetSize(): void;

    private onLayout(ct: object, target: object): void;

    private setItemSize(item: object, size: object): void;
  }

  interface IFitLayoutConfig {
    extraCls?: string,
    renderHidden?: boolean,
  }
}
