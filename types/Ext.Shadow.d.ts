declare namespace Ext {
  class Shadow {

    public constructor(config: IShadowConfig);

    public hide(): void;

    public isVisible(): void;

    public realign(left: number, top: number, width: number, height: number): void;

    public setZIndex(zindex: number): void;

    public show(targetEl: unknown): void;
  }

  interface IShadowConfig {
    mode?: string,
    offset?: string,
  }
}
