declare namespace Ext {
  class Element {

    public autoBoxAdjust: boolean;

    public defaultUnit: string;

    public dom: HTMLElement;

    public id: string;

    public originalDisplay: string;

    public static DISPLAY: number;

    public static OFFSETS: number;

    public static VISIBILITY: number;

    public static visibilityCls: string;

    public addClass(className: string | unknown[]): this;

    public addClassOnClick(className: string): this;

    public addClassOnFocus(className: string): this;

    public addClassOnOver(className: string): this;

    public addKeyListener(key: number | unknown[] | object | string, fn: Function, scope?: object): Ext.KeyMap;

    public addKeyMap(config: object): Ext.KeyMap;

    public addListener<T extends IElementEvents = IElementEvents, E extends keyof T = keyof T>(eventName: E, fn: T[E], scope?: object, options?: object): this;

    private addUnits(size: object): void;

    public alignTo(element: unknown, position: string, offsets?: unknown[], animate?: boolean | object): this;

    public anchorTo(element: unknown, position: string, offsets?: unknown[], animate?: boolean | object, monitorScroll?: boolean | number, callback?: Function): this;

    public animate(args: object, duration?: number, onComplete?: Function, easing?: string, animType?: string): this;

    public appendChild(el: string | HTMLElement | unknown[] | Element | Ext.CompositeElement): this;

    public appendTo(el: unknown): this;

    public applyStyles(styles: string | object | Function): this;

    public blur(): this;

    public boxWrap(className?: string): Ext.Element;

    public center(centerIn?: unknown): void;

    public child(selector: string, returnDom?: boolean): HTMLElement | Ext.Element;

    public clean(forceReclean?: boolean): void;

    public clearOpacity(): this;

    public clearPositioning(value?: string): this;

    public clip(): this;

    public contains(el: HTMLElement | string): boolean;

    public createChild(config: object, insertBefore?: HTMLElement, returnDom?: boolean): Ext.Element;

    public createProxy(config: string | object, renderTo?: string | HTMLElement, matchBox?: boolean): Ext.Element;

    public createShim(): Ext.Element;

    public down(selector: string, returnDom?: boolean): HTMLElement | Ext.Element;

    public enableDisplayMode(display?: string): this;

    public findParent(selector: string, maxDepth?: number | unknown, returnEl?: boolean): HTMLElement;

    public findParentNode(selector: string, maxDepth?: number | unknown, returnEl?: boolean): HTMLElement;

    public first(selector?: string, returnDom?: boolean): Ext.Element | HTMLElement;

    public fly(el: string | HTMLElement, named?: string): Element;

    public focus(defer?: number): this;

    public getAlignToXY(element: unknown, position: string, offsets?: unknown[]): unknown[];

    public getAnchorXY(anchor?: string, local?: boolean, size?: object): unknown[];

    public getAttribute(name: string, namespace?: string): string;

    public getAttributeNS(namespace: string, name: string): string;

    public getBorderWidth(side: string): number;

    public getBottom(local: boolean): number;

    public getBox(contentBox?: boolean, local?: boolean): object;

    public getCenterXY(): unknown[];

    public getColor(attr: string, defaultValue: string, prefix?: string): void;

    public getComputedHeight(): number;

    public getComputedWidth(): number;

    public getFrameWidth(sides: string): number;

    public getHeight(contentHeight?: boolean): number;

    public getLeft(local: boolean): number;

    public getMargins(sides?: string): object | number;

    public getOffsetsTo(element: unknown): unknown[];

    public getPadding(side: string): number;

    public getPositioning(): object;

    public getRegion(): Ext.lib.Region;

    public getRight(local: boolean): number;

    public getScroll(): object;

    public getSize(contentSize?: boolean): object;

    public getStyle(property: string): string;

    public getStyleSize(): void;

    public getStyles(style1: string, style2: string, etc: string): object;

    public getTextWidth(text: string, min?: number, max?: number): number;

    public getTop(local: boolean): number;

    public getUpdater(): Ext.Updater;

    public getValue(asNumber: boolean): string | number;

    public getViewSize(): void;

    public getWidth(contentWidth?: boolean): number;

    public getX(): number;

    public getXY(): unknown[];

    public getY(): number;

    public hasClass(className: string): boolean;

    private hasMetrics(): void;

    public hide(animate?: boolean | object): this;

    public hover(overFn: Function, outFn: Function, scope?: object, options?: object): this;

    public initDD(group: string, config: object, overrides: object): Ext.dd.DD;

    public initDDProxy(group: string, config: object, overrides: object): Ext.dd.DDProxy;

    public initDDTarget(group: string, config: object, overrides: object): Ext.dd.DDTarget;

    public insertAfter(el: unknown): this;

    public insertBefore(el: unknown): this;

    public insertFirst(el: unknown | object): Ext.Element;

    public insertHtml(where: string, html: string, returnEl?: boolean): HTMLElement | Ext.Element;

    public insertSibling(el: unknown | object | unknown[], where?: string, returnDom?: boolean): Ext.Element;

    public is(selector: string): boolean;

    public isBorderBox(): boolean;

    public isDisplayed(): boolean;

    public isMasked(): boolean;

    public isScrollable(): boolean;

    public isVisible(): boolean;

    public last(selector?: string, returnDom?: boolean): Ext.Element | HTMLElement;

    public load(options: unknown): this;

    public mask(msg?: string, msgCls?: string): Element;

    public move(direction: string, distance: number, animate?: boolean | object): this;

    public moveTo(x: number, y: number, animate?: boolean | object): this;

    public next(selector?: string, returnDom?: boolean): Ext.Element | HTMLElement;

    public on<T extends IElementEvents = IElementEvents, E extends keyof T = keyof T>(eventName: E, fn: T[E], scope?: object, options?: object): void;

    public parent(selector?: string, returnDom?: boolean): Ext.Element | HTMLElement;

    public position(pos?: string, zIndex?: number, x?: number, y?: number): void;

    public prev(selector?: string, returnDom?: boolean): Ext.Element | HTMLElement;

    public purgeAllListeners(): this;

    public query(selector: string): unknown[];

    public radioClass(className: string | unknown[]): this;

    public relayEvent(eventName: string, object: object): void;

    public remove(): void;

    public removeAllListeners(): this;

    public removeAnchor(): this;

    public removeClass(className: string | unknown[]): this;

    public removeListener<T extends IElementEvents = IElementEvents, E extends keyof T = keyof T>(eventName: E, fn: T[E], scope: object): this;

    public repaint(): this;

    public replace(el: unknown): this;

    public replaceClass(oldClassName: string, newClassName: string): this;

    public replaceWith(el: unknown | object): this;

    public scroll(direction: string, distance: number, animate?: boolean | object): boolean;

    public scrollIntoView(container?: unknown, hscroll?: boolean): this;

    public scrollTo(side: string, value: number): this;

    public select(selector: string): Ext.CompositeElement | Ext.CompositeElementLite;

    public set(o: object, useSet?: boolean): this;

    public setBottom(bottom: string): this;

    public setBounds(x: number, y: number, width: unknown, height: unknown, animate?: boolean | object): this;

    public setBox(box: object, adjust?: boolean, animate?: boolean | object): this;

    public setDisplayed(value: unknown): this;

    public setHeight(height: unknown, animate?: boolean | object): this;

    public setLeft(left: string): this;

    public setLeftTop(left: string, top: string): this;

    public setLocation(x: number, y: number, animate?: boolean | object): this;

    public setOpacity(opacity: number, animate?: boolean | object): this;

    public setPositioning(posCfg: object): this;

    public setRegion(region: Ext.lib.Region, animate?: boolean | object): this;

    public setRight(right: string): this;

    public setSize(width: unknown, height: unknown, animate?: boolean | object): this;

    public setStyle(property: string | object, value?: string): this;

    public setTop(top: string): this;

    public setVisibilityMode(visMode: number): this;

    public setVisible(visible: boolean, animate?: boolean | object): this;

    public setWidth(width: unknown, animate?: boolean | object): this;

    public setX(The: number, animate?: boolean | object): this;

    public setXY(pos: unknown[], animate?: boolean | object): this;

    public setY(The: number, animate?: boolean | object): this;

    public show(animate?: boolean | object): this;

    public swallowEvent(eventName: string | unknown[], preventDefault?: boolean): this;

    public toggle(animate?: boolean | object): this;

    public toggleClass(className: string): this;

    public translatePoints(x: number | unknown[], y?: number): object;

    public un<T extends IElementEvents = IElementEvents, E extends keyof T = keyof T>(eventName: E, fn: T[E], scope: object): this;

    public unclip(): this;

    public unmask(): void;

    public unselectable(): this;

    public up(selector: string, maxDepth?: number | unknown): Ext.Element;

    public update(html: string): this;

    public wrap(config?: object, returnDom?: boolean): HTMLElement | Element;

    public static get(el: unknown): Element;

    public static select(selector: string | unknown[], root?: HTMLElement | string): Ext.CompositeElementLite | Ext.CompositeElement;
  }

  interface IElementEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
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
