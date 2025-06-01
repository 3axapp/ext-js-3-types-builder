declare namespace Ext {
  namespace EventManager {

    const A: number;

    const ALT: number;

    const B: number;

    const BACKSPACE: number;

    const C: number;

    const CAPS_LOCK: number;

    const CONTEXT_MENU: number;

    const CTRL: number;

    const D: number;

    const DELETE: number;

    const DOWN: number;

    const E: number;

    const EIGHT: number;

    const END: number;

    const ENTER: number;

    const ESC: number;

    const F: number;

    const F1: number;

    const F10: number;

    const F11: number;

    const F12: number;

    const F2: number;

    const F3: number;

    const F4: number;

    const F5: number;

    const F6: number;

    const F7: number;

    const F8: number;

    const F9: number;

    const FIVE: number;

    const FOUR: number;

    const G: number;

    const H: number;

    const HOME: number;

    const I: number;

    const INSERT: number;

    const J: number;

    const K: number;

    const L: number;

    const LEFT: number;

    const M: number;

    const N: number;

    const NINE: number;

    const NUM_CENTER: number;

    const NUM_DIVISION: number;

    const NUM_EIGHT: number;

    const NUM_FIVE: number;

    const NUM_FOUR: number;

    const NUM_MINUS: number;

    const NUM_MULTIPLY: number;

    const NUM_NINE: number;

    const NUM_ONE: number;

    const NUM_PERIOD: number;

    const NUM_PLUS: number;

    const NUM_SEVEN: number;

    const NUM_SIX: number;

    const NUM_THREE: number;

    const NUM_TWO: number;

    const NUM_ZERO: number;

    const O: number;

    const ONE: number;

    const P: number;

    const PAGE_DOWN: number;

    const PAGE_UP: number;

    const PAUSE: number;

    const PRINT_SCREEN: number;

    const Q: number;

    const R: number;

    const RETURN: number;

    const RIGHT: number;

    const S: number;

    const SEVEN: number;

    const SHIFT: number;

    const SIX: number;

    const SPACE: number;

    const T: number;

    const TAB: number;

    const THREE: number;

    const TWO: number;

    const U: number;

    const UP: number;

    const V: number;

    const W: number;

    const X: number;

    const Y: number;

    const Z: number;

    const ZERO: number;

    const fireDocReady: object;

    const ieDeferSrc: boolean;

    const textResizeInterval: number;

    function addListener(el: string | HTMLElement, eventName: string, handler: Function, scope?: object, options?: object):  void;

    function checkReadyState(e: object):  boolean;

    function hasModifier():  boolean;

    function isNavKeyPress():  void;

    function on(el: string | HTMLElement, eventName: string, handler: Function, scope?: object, options?: object):  void;

    function onDocumentReady(fn: Function, scope?: object, options?: boolean):  void;

    function onTextResize(fn: Function, scope: object, options: boolean):  void;

    function onWindowResize(fn: Function, scope: object, options: boolean):  void;

    function removeAll(el: string | HTMLElement):  void;

    function removeListener(el: string | HTMLElement, eventName: string, fn: Function, scope: object):  void;

    function removeResizeListener(fn: Function, scope: object):  void;

    function un(el: string | HTMLElement, eventName: string, fn: Function, scope: object):  void;
  }
}
