declare namespace Ext.layout {
  class ToolbarLayout extends Ext.layout.ContainerLayout {

    public hiddenItems: unknown[];

    private lastOverflow: boolean;

    private monitorResize: boolean;

    private more: Ext.Button;

    private moreMenu: Ext.menu.Menu;

    public noItemsMenuText: string;

    private tableHTML: string;

    public triggerWidth: number;

    private type: string;

    public constructor(config: IToolbarLayoutConfig);

    private addComponentToMenu(menu: Ext.menu.Menu, component: Ext.Component): void;

    private beforeMoreShow(m: Ext.menu.Menu): void;

    private cleanup(el: Ext.Element): void;

    private clearMenu(): void;

    private createMenuConfig(component: Ext.Component, hideOnClick: boolean): void;

    private destroy(): void;

    private fitToSize(target: Ext.Element): void;

    private getItemWidth(c: Ext.Component): number;

    private hideItem(item: Ext.Component): void;

    private initMore(): void;

    private insertCell(c: Ext.Component, target: Ext.Element, position: number): void;

    private onLayout(ct: object, target: object): void;

    private unhideItem(item: Ext.Component): void;
  }

  interface IToolbarLayoutConfig {
    extraCls?: string,
    renderHidden?: boolean,
  }
}
