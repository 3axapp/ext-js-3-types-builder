declare class Ext {

  public BLANK_IMAGE_URL: string;

  public SSL_SECURE_URL: string;

  public USE_NATIVE_JSON: boolean;

  public emptyFn: Function;

  public enableForcedBoxModel: boolean;

  public enableFx: boolean;

  public enableGarbageCollector: boolean;

  public enableListenerCollection: boolean;

  public enableNestedListenerRemoval: boolean;

  public isAir: boolean;

  public isBorderBox: boolean;

  public isChrome: boolean;

  public isGecko: boolean;

  public isGecko2: boolean;

  public isGecko3: boolean;

  public isIE: boolean;

  public isIE6: boolean;

  public isIE7: boolean;

  public isIE8: boolean;

  public isIE9: boolean;

  public isLinux: boolean;

  public isMac: boolean;

  public isOpera: boolean;

  public isReady: boolean;

  public isSafari: boolean;

  public isSafari2: boolean;

  public isSafari3: boolean;

  public isSafari4: boolean;

  public isSecure: boolean;

  public isStrict: boolean;

  public isWebKit: boolean;

  public isWindows: boolean;

  public useShims: boolean;

  public ux: object;

  public version: string;

  private versionDetail: object;

  public addBehaviors(obj: object): void;

  public apply(obj: object, config: object, defaults: object): object;

  public applyIf(obj: object, config: object): object;

  public clean(arr: unknown[] | NodeList): unknown[];

  public copyTo(dest: object, source: object, names: unknown[] | string): object;

  public create(config: object, defaultType: typeof Ext.util.Observable): Ext.Component;

  public createDelegate(fn: Function, scope?: object, args?: unknown[], appendArgs?: boolean | number): Function;

  public createInterceptor(origFn: Function, newFn: Function, scope?: object): Function;

  public createSequence(origFn: Function, newFn: Function, scope?: object): Function;

  public decode(json: string, safe?: boolean): object;

  public defer(fn: Function, millis: number, scope?: object, args?: unknown[], appendArgs?: boolean | number): number;

  public define(className: string, data: object, createdFn: Function): Ext.Base;

  public destroy(...args: unknown[]): void;

  public destroyMembers(o: object, arg1: unknown, etc: unknown): void;

  public each(array: unknown[] | NodeList | unknown, fn: Function, scope: object): object;

  public encode(o: unknown): string;

  public escapeRe(str: string): string;

  public extend(superclass: Function, overrides: object): Function;

  public flatten(arr: unknown[]): unknown[];

  public fly(el: string | HTMLElement, named?: string): Element;

  public get(el: unknown): Element;

  public getBody(): object;

  public getCmp(id: string): object;

  public getDoc(): object;

  public getDom(el: unknown): object;

  public getHead(): object;

  public getScrollBarWidth(force?: boolean): number;

  public handleError(e: object | Error): void;

  public id(el?: unknown, prefix?: string): string;

  public invoke(arr: unknown[] | NodeList, methodName: string, ...args: *[]): unknown[];

  public isArray(value: unknown): boolean;

  public isBoolean(value: unknown): boolean;

  public isDate(object: object): boolean;

  public isDefined(value: unknown): boolean;

  public isElement(value: unknown): boolean;

  public isEmpty(value: unknown, allowBlank?: boolean): boolean;

  public isFunction(value: unknown): boolean;

  public isNumber(value: unknown): boolean;

  public isObject(value: unknown): boolean;

  public isPrimitive(value: unknown): boolean;

  public isString(value: unknown): boolean;

  public iterate(object: object | unknown[], fn: Function, scope: object): void;

  public max(arr: unknown[] | NodeList, comp?: Function): object;

  public mean(arr: unknown[]): number;

  public min(arr: unknown[] | NodeList, comp?: Function): object;

  public namespace(namespace1: string, namespace2: string, etc: string): object;

  public ns(namespace1: string, namespace2: string, etc: string): object;

  public num(value: unknown, defaultValue: number): number;

  public onReady(fn: Function, scope?: object, options?: boolean): void;

  public override(target: object, overrides: object): void;

  public partition(arr: unknown[] | NodeList, truth?: Function): unknown[];

  public pluck(arr: unknown[] | NodeList, prop: string): unknown[];

  public preg(ptype: string, cls: typeof Ext.Component): void;

  public query(path: string, root?: Node): unknown[];

  public reg(xtype: string, cls: typeof Ext.Component): void;

  public removeNode(node: HTMLElement): void;

  public select(selector: string | unknown[], root?: HTMLElement | string): Ext.CompositeElementLite | Ext.CompositeElement;

  public sum(arr: unknown[]): number;

  public toArray(the: Iterable): object;

  public type(object: unknown): string;

  public unique(arr: unknown[]): unknown[];

  public urlAppend(url: string, s: string): object;

  public urlDecode(string: string, overwrite?: boolean): object;

  public urlEncode(o: object, pre?: string): string;

  public value(value: unknown, defaultValue: unknown, allowBlank?: boolean): unknown;

  public zip(arr: Arrays | NodeLists, zipper?: Function): unknown[];
}
