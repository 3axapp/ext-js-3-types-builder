declare namespace Ext {
  class Layer extends Ext.Element {

    public constructor(config: ILayerConfig);

    public addListener<T extends ILayerEvents = ILayerEvents, E extends keyof T = keyof T>(eventName: E, fn: Function, scope?: object, options?: object): this;

    public on<T extends ILayerEvents = ILayerEvents, E extends keyof T = keyof T>(eventName: E, fn: Function, scope?: object, options?: object): void;

    public removeListener<T extends ILayerEvents = ILayerEvents, E extends keyof T = keyof T>(eventName: E, fn: Function, scope: object): this;

    public setZIndex(zindex: number): this;

    public un<T extends ILayerEvents = ILayerEvents, E extends keyof T = keyof T>(eventName: E, fn: Function, scope: object): this;
  }

  interface ILayerConfig {
    cls?: string,
    constrain?: boolean,
    dh?: object,
    shadow?: string | boolean,
    shadowOffset?: number,
    shim?: boolean,
    useDisplay?: boolean,
    zindex?: number,
  }

  interface ILayerEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    DOMActivate: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMAttrModified: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMCharacterDataModified: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMFocusIn: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMFocusOut: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMNodeInserted: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMNodeInsertedIntoDocument: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMNodeRemoved: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMNodeRemovedFromDocument: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    DOMSubtreeModified: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    abort: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    blur: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    change: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    click: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    contextmenu: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    dblclick: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    error: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    focus: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    keydown: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    keypress: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    keyup: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    load: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    mousedown: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    mouseenter: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    mouseleave: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    mousemove: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    mouseout: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    mouseover: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    mouseup: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    reset: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    resize: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    scroll: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    select: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    submit: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
    unload: (e: Ext.EventObject, t: HTMLElement, o: object) => boolean | void;
  }
}
