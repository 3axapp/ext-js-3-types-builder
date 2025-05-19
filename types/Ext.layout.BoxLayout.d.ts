declare namespace Ext.layout {
  class BoxLayout extends Ext.layout.ContainerLayout {

    private childBoxCache: unknown[];

    private innerCls: string;

    private layoutTargetLastSize: object;

    private monitorResize: boolean;

    private pack: string;

    private scrollOffset: number;

    private targetCls: string;

    private type: string;

    public constructor(config: IBoxLayoutConfig);

    private destroy(): void;

    private getLayoutTargetSize(): void;

    private getVisibleItems(ct: object): unknown[];

    private handleTargetOverflow(previousTargetSize: object, container: Ext.Container, target: Ext.Element): void;

    private isValidParent(c: object, target: object): void;

    private onLayout(container: object, target: object): void;

    private renderAll(ct: object, target: object): void;

    private renderItem(c: Ext.Component, position: number, target: Ext.Element): void;

    public updateChildBoxes(boxes: unknown[]): void;

    private updateInnerCtSize(currentSize: object, calculations: unknown[]): void;
  }

  interface IBoxLayoutConfig {
    defaultMargins?: object,
    extraCls?: string,
    padding?: string,
    renderHidden?: boolean,
  }
}
