declare namespace Ext.layout {
  class AccordionLayout extends Ext.layout.FitLayout {

    private type: string;

    public constructor(config: IAccordionLayoutConfig);

    private beforeExpand(p: object, anim: object): void;

    private onRemove(c: object): void;

    private renderItem(c: Ext.Component, position: number, target: Ext.Element): void;

    private setActive(item: object, expand: object): void;

    public setActiveItem(item: string | number): void;

    private setItemSize(item: object, size: object): void;
  }

  interface IAccordionLayoutConfig {
    activeOnTop?: boolean,
    animate?: boolean,
    autoWidth?: boolean,
    collapseFirst?: boolean,
    extraCls?: string,
    fill?: boolean,
    hideCollapseTool?: boolean,
    renderHidden?: boolean,
    sequence?: boolean,
    titleCollapse?: boolean,
  }
}
