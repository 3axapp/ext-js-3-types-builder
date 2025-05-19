declare namespace Ext.dd {
  class PanelProxy {

    public constructor(config: IPanelProxyConfig);

    public getEl(): Element;

    public getGhost(): Element;

    public getProxy(): Element;

    public hide(): void;

    public moveProxy(parentNode: HTMLElement, before?: HTMLElement): void;

    private repair(xy: object, callback: object, scope: object): void;

    private reset(): void;

    private setStatus(): void;

    public show(): void;

    private stop(): void;

    private sync(): void;

    private update(): void;
  }

  interface IPanelProxyConfig {
    insertProxy?: boolean,
  }
}
