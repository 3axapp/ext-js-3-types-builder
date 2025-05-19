declare namespace Ext.dd {
  class DragTracker extends Ext.util.Observable {

    private constrainModes: object;

    public constructor(config: IDragTrackerConfig);

    public addListener<T extends IDragTrackerEvents = IDragTrackerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private clearStart(): void;

    private destroy(): void;

    public fireEvent<T extends IDragTrackerEvents = IDragTrackerEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    private getDragCt(): void;

    public getDragTarget(): Ext.Element;

    private getOffset(constrain: object): void;

    private getXY(constrain: object): void;

    public hasListener<T extends IDragTrackerEvents = IDragTrackerEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initEl(el: object): void;

    public on<T extends IDragTrackerEvents = IDragTrackerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public onBeforeStart(e: Ext.EventObject): void;

    public onDrag(e: Ext.EventObject): void;

    public onEnd(e: Ext.EventObject): void;

    private onMouseDown(e: object, target: object): void;

    private onMouseMove(e: object, target: object): void;

    private onMouseUp(e: object): void;

    public onStart(e: Ext.EventObject): void;

    public removeListener<T extends IDragTrackerEvents = IDragTrackerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private stopSelect(e: object): void;

    private triggerStart(e: object): void;

    public un<T extends IDragTrackerEvents = IDragTrackerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface IDragTrackerConfig {
    active?: boolean,
    autoStart?: boolean | number,
    listeners?: object,
    tolerance?: number,
  }

  interface IDragTrackerEvents extends Record<string, (...args: any[]) => boolean | void> {
    drag: (thisCmp: DragTracker, e: object) => boolean | void;
    dragend: (thisCmp: DragTracker, e: object) => boolean | void;
    dragstart: (thisCmp: DragTracker, e: object) => boolean | void;
    mousedown: (thisCmp: DragTracker, e: object) => boolean | void;
    mousemove: (thisCmp: DragTracker, e: object) => boolean | void;
    mouseup: (thisCmp: DragTracker, e: object) => boolean | void;
  }
}
