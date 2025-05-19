declare namespace Ext.dd {
  class Registry {

    public getHandle(id: string | HTMLElement): object;

    public getHandleFromEvent(e: Event): object;

    public getTarget(id: string | HTMLElement): object;

    public getTargetFromEvent(e: Event): object;

    public register(element: string | HTMLElement, data?: object): void;

    public unregister(element: string | HTMLElement): void;
  }
}
