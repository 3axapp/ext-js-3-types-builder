declare namespace Ext.dd {
  class StatusProxy {

    public constructor(config: IStatusProxyConfig);

    public getEl(): Ext.Layer;

    public getGhost(): Ext.Element;

    public hide(clear: boolean): void;

    public repair(xy: unknown[], callback: Function, scope: object): void;

    public reset(clearGhost: boolean): void;

    public setStatus(cssClass: string): void;

    public show(): void;

    public stop(): void;

    public sync(): void;

    public update(html: string | HTMLElement): void;
  }

  interface IStatusProxyConfig {
    dropAllowed?: string,
    dropNotAllowed?: string,
  }
}
