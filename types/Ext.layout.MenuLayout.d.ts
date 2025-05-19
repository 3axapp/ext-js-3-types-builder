declare namespace Ext.layout {
  class MenuLayout extends Ext.layout.ContainerLayout {

    private monitorResize: boolean;

    private type: string;

    public constructor(config: IMenuLayoutConfig);

    private doAutoSize(): void;

    private getItemArgs(c: object): void;

    private isValidParent(c: object, target: object): void;

    private onLayout(ct: object, target: object): void;

    private renderItem(c: Ext.Component, position: number, target: Ext.Element): void;

    private setContainer(ct: object): void;
  }

  interface IMenuLayoutConfig {
    extraCls?: string,
    renderHidden?: boolean,
  }
}
