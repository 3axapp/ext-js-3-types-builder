declare namespace Ext.layout {
  class ColumnLayout extends Ext.layout.ContainerLayout {

    private monitorResize: boolean;

    private scrollOffset: number;

    private targetCls: string;

    private type: string;

    public constructor(config: IColumnLayoutConfig);

    private getLayoutTargetSize(): void;

    private isValidParent(c: object, target: object): void;

    private onLayout(ct: object, target: object): void;

    private renderAll(ct: object, target: object): void;
  }

  interface IColumnLayoutConfig {
    extraCls?: string,
    renderHidden?: boolean,
  }
}
