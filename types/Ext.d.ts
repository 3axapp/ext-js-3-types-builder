declare namespace Ext {

  const BLANK_IMAGE_URL: string;

  const SSL_SECURE_URL: string;

  const USE_NATIVE_JSON: boolean;

  const emptyFn: Function;

  const enableForcedBoxModel: boolean;

  const enableFx: boolean;

  const enableGarbageCollector: boolean;

  const enableListenerCollection: boolean;

  const enableNestedListenerRemoval: boolean;

  const isAir: boolean;

  const isBorderBox: boolean;

  const isChrome: boolean;

  const isGecko: boolean;

  const isGecko2: boolean;

  const isGecko3: boolean;

  const isIE: boolean;

  const isIE6: boolean;

  const isIE7: boolean;

  const isIE8: boolean;

  const isIE9: boolean;

  const isLinux: boolean;

  const isMac: boolean;

  const isOpera: boolean;

  const isReady: boolean;

  const isSafari: boolean;

  const isSafari2: boolean;

  const isSafari3: boolean;

  const isSafari4: boolean;

  const isSecure: boolean;

  const isStrict: boolean;

  const isWebKit: boolean;

  const isWindows: boolean;

  const useShims: boolean;

  const ux: object;

  const version: string;

  const versionDetail: object;

  function addBehaviors(obj: object):  void;

  function apply(obj: object, config: object, defaults: object):  object;

  function applyIf(obj: object, config: object):  object;

  function clean(arr: unknown[] | NodeList):  unknown[];

  function copyTo(dest: object, source: object, names: unknown[] | string):  object;

  function create(config: object, defaultType: typeof Ext.util.Observable):  Ext.Component;

  function createDelegate(fn: Function, scope?: object, args?: unknown[], appendArgs?: boolean | number):  Function;

  function createInterceptor(origFn: Function, newFn: Function, scope?: object):  Function;

  function createSequence(origFn: Function, newFn: Function, scope?: object):  Function;

  function decode(json: string, safe?: boolean):  object;

  function defer(fn: Function, millis: number, scope?: object, args?: unknown[], appendArgs?: boolean | number):  number;

  function define(className: string, data: object, createdFn: Function):  Ext.Base;

  function destroy(...args: unknown[]):  void;

  function destroyMembers(o: object, arg1: unknown, etc: unknown):  void;

  function each(array: unknown[] | NodeList | unknown, fn: Function, scope: object):  object;

  function encode(o: unknown):  string;

  function escapeRe(str: string):  string;

  function extend(superclass: Function, overrides: object):  Function;

  function extend(subclass: Function, superclass: Function, overrides: object):  Function;

  function flatten(arr: unknown[]):  unknown[];

  function fly(el: string | HTMLElement, named?: string):  Element;

  function get(el: unknown):  Element;

  function getBody():  object;

  function getCmp(id: string):  object;

  function getDoc():  object;

  function getDom(el: unknown):  object;

  function getHead():  object;

  function getScrollBarWidth(force?: boolean):  number;

  function handleError(e: object | Error):  void;

  function id(el?: unknown, prefix?: string):  string;

  function invoke(arr: unknown[] | NodeList, methodName: string, ...args: unknown[]):  unknown[];

  function isArray(value: unknown):  boolean;

  function isBoolean(value: unknown):  boolean;

  function isDate(object: object):  boolean;

  function isDefined(value: unknown):  boolean;

  function isElement(value: unknown):  boolean;

  function isEmpty(value: unknown, allowBlank?: boolean):  boolean;

  function isFunction(value: unknown):  boolean;

  function isNumber(value: unknown):  boolean;

  function isObject(value: unknown):  boolean;

  function isPrimitive(value: unknown):  boolean;

  function isString(value: unknown):  boolean;

  function iterate(object: object | unknown[], fn: Function, scope: object):  void;

  function max(arr: unknown[] | NodeList, comp?: Function):  object;

  function mean(arr: unknown[]):  number;

  function min(arr: unknown[] | NodeList, comp?: Function):  object;

  function namespace(namespace1: string, namespace2: string, etc: string):  object;

  function ns(namespace1: string, namespace2: string, etc: string):  object;

  function num(value: unknown, defaultValue: number):  number;

  function onReady(fn: Function, scope?: object, options?: boolean):  void;

  function override(target: object, overrides: object):  void;

  function partition(arr: unknown[] | NodeList, truth?: Function):  unknown[];

  function pluck(arr: unknown[] | NodeList, prop: string):  unknown[];

  function preg(ptype: string, cls: typeof Ext.Component):  void;

  function query(path: string, root?: Node):  unknown[];

  function reg(xtype: string, cls: typeof Ext.Component):  void;

  function removeNode(node: HTMLElement):  void;

  function select(selector: string | unknown[], root?: HTMLElement | string):  Ext.CompositeElementLite | Ext.CompositeElement;

  function sum(arr: unknown[]):  number;

  function toArray(the: Iterable<unknown>):  object;

  function type(object: unknown):  string;

  function unique(arr: unknown[]):  unknown[];

  function urlAppend(url: string, s: string):  object;

  function urlDecode(string: string, overwrite?: boolean):  object;

  function urlEncode(o: object, pre?: string):  string;

  function value(value: unknown, defaultValue: unknown, allowBlank?: boolean):  unknown;

  function zip(arr: unknown[][] | NodeList[], zipper?: Function):  unknown[];
}
