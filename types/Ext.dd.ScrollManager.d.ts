declare namespace Ext.dd {
  class ScrollManager {

    public animDuration: number;

    public animate: boolean;

    public ddGroup: string;

    public frequency: number;

    public hthresh: number;

    public increment: number;

    public vthresh: number;

    public refreshCache(): void;

    public register(el: unknown | unknown[]): void;

    public unregister(el: unknown | unknown[]): void;
  }
}
