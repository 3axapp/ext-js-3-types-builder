declare namespace Ext {
  class Fx {

    public constructor(config: IFxConfig);

    private afterFx(o: object): void;

    private beforeFx(o: object): void;

    public fadeIn(options?: object): Ext.Element;

    public fadeOut(options?: object): Ext.Element;

    public frame(color?: string, count?: number, options?: object): Ext.Element;

    private fxUnwrap(wrap: object, pos: object, o: object): void;

    private fxWrap(pos: object, o: object, vis: object): void;

    private fxanim(args: object, opt: object, animType: object, defaultDur: object, defaultEase: object, cb: object): void;

    private getFxRestore(): void;

    public ghost(anchor?: string, options?: object): Ext.Element;

    public hasActiveFx(): boolean;

    public hasFxBlock(): boolean;

    public highlight(color?: string, options?: object): Ext.Element;

    private nextFx(): void;

    public pause(seconds: number): this;

    public puff(options?: object): Ext.Element;

    private queueFx(o: object, fn: object): void;

    public scale(width: number, height: number, options?: object): this;

    public sequenceFx(): Ext.Element;

    public shift(options: object): this;

    public slideIn(anchor?: string, options?: object): Ext.Element;

    public slideOut(anchor?: string, options?: object): Ext.Element;

    public stopFx(finish: object): Ext.Element;

    public switchOff(options?: object): Ext.Element;

    private switchStatements(key: object, fn: object, argHash: object): void;

    public syncFx(): Ext.Element;
  }

  interface IFxConfig {
    afterCls?: string,
    afterStyle?: string | object | Function,
    block?: boolean,
    callback?: Function,
    concurrent?: boolean,
    duration?: number,
    easing?: string,
    endOpacity?: number,
    remove?: boolean,
    scope?: object,
    stopFx?: boolean,
    useDisplay?: boolean,
  }
}
