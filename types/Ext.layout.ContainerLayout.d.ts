declare namespace Ext.layout {
  class ContainerLayout {

    private activeItem: object;

    public fieldTpl: Ext.Template;

    private getLayoutTargetSize: object;

    private monitorResize: boolean;

    private type: string;

    public constructor(config: IContainerLayoutConfig);

    private IEMeasureHack(target: object, viewFlag: object): void;

    private afterRemove(c: object): void;

    private configureItem(c: object): void;

    private destroy(): void;

    private getRenderedItems(ct: object): void;

    private isValidParent(c: object, target: object): void;

    private layout(): void;

    private onLayout(ct: object, target: object): void;

    private onRemove(c: object): void;

    private onResize(): void;

    public parseMargins(v: number | string): object;

    private renderAll(ct: object, target: object): void;

    private renderItem(c: Ext.Component, position: number, target: Ext.Element): void;

    private runLayout(): void;

    private setContainer(ct: object): void;
  }

  interface IContainerLayoutConfig {
    extraCls?: string,
    renderHidden?: boolean,
  }
}
