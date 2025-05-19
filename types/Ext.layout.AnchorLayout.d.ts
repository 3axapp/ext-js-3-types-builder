declare namespace Ext.layout {
  class AnchorLayout extends Ext.layout.ContainerLayout {

    private monitorResize: boolean;

    private parseAnchorRE: RegExp;

    private type: string;

    public constructor(config: IAnchorLayoutConfig);

    private adjustHeightAnchor(value: object, comp: object): void;

    private adjustWidthAnchor(value: object, comp: object): void;

    private getLayoutTargetSize(): void;

    private onLayout(container: object, target: object): void;

    private parseAnchor(a: object, start: object, cstart: object): void;
  }

  interface IAnchorLayoutConfig {
    anchor?: string,
    defaultAnchor?: string,
    extraCls?: string,
    renderHidden?: boolean,
  }
}
