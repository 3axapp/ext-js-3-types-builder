declare namespace Ext.util {
  class ClickRepeater extends Ext.util.Observable {

    private delay: number;

    private interval: number;

    private preventDefault: boolean;

    private stopDefault: boolean;

    private timer: number;

    public constructor(config: IClickRepeaterConfig);

    public addListener<T extends IClickRepeaterEvents = IClickRepeaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private click(e: object): void;

    private destroy(): void;

    public disable(force: object): void;

    private easeOutExpo(t: object, b: object, c: object, d: object): void;

    public enable(): void;

    private eventOptions(e: object): void;

    public fireEvent<T extends IClickRepeaterEvents = IClickRepeaterEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private handleDblClick(e: object): void;

    private handleMouseDown(e: object): void;

    private handleMouseOut(): void;

    private handleMouseReturn(): void;

    private handleMouseUp(e: object): void;

    public hasListener<T extends IClickRepeaterEvents = IClickRepeaterEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public on<T extends IClickRepeaterEvents = IClickRepeaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends IClickRepeaterEvents = IClickRepeaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setDisabled(disabled: boolean): void;

    public un<T extends IClickRepeaterEvents = IClickRepeaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IClickRepeaterConfig {
    accelerate?: boolean,
    delay?: number,
    el?: unknown,
    interval?: number,
    listeners?: object,
    pressClass?: string,
    preventDefault?: boolean,
    stopDefault?: boolean,
  }

  interface IClickRepeaterEvents extends Record<string, (...args: any[]) => boolean | void> {
    click: (thisCmp: ClickRepeater, e: Ext.EventObject) => boolean | void;
    mousedown: (thisCmp: ClickRepeater, e: Ext.EventObject) => boolean | void;
    mouseup: (thisCmp: ClickRepeater, e: Ext.EventObject) => boolean | void;
  }
}
