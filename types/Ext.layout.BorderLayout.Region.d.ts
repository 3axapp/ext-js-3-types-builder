declare namespace Ext.layout.BorderLayout {
  class Region {

    public isCollapsed: boolean;

    public layout: Layout;

    public panel: Ext.Panel;

    public position: string;

    public constructor(config: IRegionConfig);

    public getMargins(): object;

    public getMinHeight(): number;

    public getMinWidth(): number;

    public getSize(): object;

    public isVisible(): boolean;

    public setPanel(panel: Ext.Panel): void;

    public slideIn(cb: object): void;

    public slideOut(): void;
  }

  interface IRegionConfig {
    animFloat?: boolean,
    autoHide?: boolean,
    cmargins?: object,
    collapseMode?: string,
    collapsible?: boolean,
    floatable?: boolean,
    margins?: object,
    minHeight?: number,
    minWidth?: number,
    split?: boolean,
  }
}
