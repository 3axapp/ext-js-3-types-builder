declare namespace Ext {
  class QuickTips {

    public disable(): void;

    public enable(): void;

    public getQuickTip(): Ext.QuickTip;

    public init(autoRender: boolean): void;

    public isEnabled(): boolean;

    public register(config: object): void;

    public tips(config: object): void;

    public unregister(el: string | HTMLElement | Element): void;
  }
}
