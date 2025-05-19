declare namespace Ext.layout {
  class TableLayout extends Ext.layout.ContainerLayout {

    private monitorResize: boolean;

    private targetCls: string;

    private type: string;

    public constructor(config: ITableLayoutConfig);

    private destroy(): void;

    private getNextCell(c: object): void;

    private getNextNonSpan(colIndex: object, rowIndex: object): void;

    private getRow(index: object): void;

    private isValidParent(c: object, target: object): void;

    private onLayout(ct: object, target: object): void;

    private renderItem(c: Ext.Component, position: number, target: Ext.Element): void;

    private setContainer(ct: object): void;
  }

  interface ITableLayoutConfig {
    columns?: number,
    extraCls?: string,
    renderHidden?: boolean,
    tableAttrs?: object,
  }
}
