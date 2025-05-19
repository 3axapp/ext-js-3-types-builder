declare namespace Ext {
  class WindowGroup {

    public zseed: number;

    public bringToFront(win: string | object): boolean;

    public each(fn: Function, scope?: object): void;

    public get(id: string | object): Ext.Window;

    public getActive(): Ext.Window;

    public getBy(fn: Function, scope?: object): unknown[];

    public hideAll(): void;

    public register(win: Window): void;

    public sendToBack(win: string | object): Ext.Window;

    public unregister(win: Window): void;
  }
}
