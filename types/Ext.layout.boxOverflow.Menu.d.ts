declare namespace Ext.layout.boxOverflow {
  class Menu extends Ext.layout.boxOverflow.None {

    private menu: Ext.menu.Menu;

    public menuItems: unknown[];

    private menuTrigger: Ext.Button;

    public noItemsMenuText: string;

    public constructor(config: IMenuConfig);

    private addComponentToMenu(menu: Ext.menu.Menu, component: Ext.Component): void;

    private beforeMenuShow(menu: object): void;

    private clearMenu(): void;

    private clearOverflow(calculations: object, targetSize: object): void;

    private createInnerElements(container: Ext.Container, target: Ext.Element): void;

    private createMenu(): void;

    private createMenuConfig(component: Ext.Component, hideOnClick: boolean): void;

    private destroy(): void;

    private hideTrigger(): void;

    private showTrigger(): void;
  }

  interface IMenuConfig {
    afterCls?: string,
  }
}
