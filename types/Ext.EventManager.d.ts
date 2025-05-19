declare namespace Ext {
  class EventManager {

    public A: number;

    public ALT: number;

    public B: number;

    public BACKSPACE: number;

    public C: number;

    public CAPS_LOCK: number;

    public CONTEXT_MENU: number;

    public CTRL: number;

    public D: number;

    public DELETE: number;

    public DOWN: number;

    public E: number;

    public EIGHT: number;

    public END: number;

    public ENTER: number;

    public ESC: number;

    public F: number;

    public F1: number;

    public F10: number;

    public F11: number;

    public F12: number;

    public F2: number;

    public F3: number;

    public F4: number;

    public F5: number;

    public F6: number;

    public F7: number;

    public F8: number;

    public F9: number;

    public FIVE: number;

    public FOUR: number;

    public G: number;

    public H: number;

    public HOME: number;

    public I: number;

    public INSERT: number;

    public J: number;

    public K: number;

    public L: number;

    public LEFT: number;

    public M: number;

    public N: number;

    public NINE: number;

    public NUM_CENTER: number;

    public NUM_DIVISION: number;

    public NUM_EIGHT: number;

    public NUM_FIVE: number;

    public NUM_FOUR: number;

    public NUM_MINUS: number;

    public NUM_MULTIPLY: number;

    public NUM_NINE: number;

    public NUM_ONE: number;

    public NUM_PERIOD: number;

    public NUM_PLUS: number;

    public NUM_SEVEN: number;

    public NUM_SIX: number;

    public NUM_THREE: number;

    public NUM_TWO: number;

    public NUM_ZERO: number;

    public O: number;

    public ONE: number;

    public P: number;

    public PAGE_DOWN: number;

    public PAGE_UP: number;

    public PAUSE: number;

    public PRINT_SCREEN: number;

    public Q: number;

    public R: number;

    public RETURN: number;

    public RIGHT: number;

    public S: number;

    public SEVEN: number;

    public SHIFT: number;

    public SIX: number;

    public SPACE: number;

    public T: number;

    public TAB: number;

    public THREE: number;

    public TWO: number;

    public U: number;

    public UP: number;

    public V: number;

    public W: number;

    public X: number;

    public Y: number;

    public Z: number;

    public ZERO: number;

    public fireDocReady: object;

    public ieDeferSrc: boolean;

    public textResizeInterval: number;

    public addListener(el: string | HTMLElement, eventName: string, handler: Function, scope?: object, options?: object): void;

    public checkReadyState(e: object): boolean;

    public hasModifier(): boolean;

    private isNavKeyPress(): void;

    public on(el: string | HTMLElement, eventName: string, handler: Function, scope?: object, options?: object): void;

    public onDocumentReady(fn: Function, scope?: object, options?: boolean): void;

    public onTextResize(fn: Function, scope: object, options: boolean): void;

    public onWindowResize(fn: Function, scope: object, options: boolean): void;

    public removeAll(el: string | HTMLElement): void;

    public removeListener(el: string | HTMLElement, eventName: string, fn: Function, scope: object): void;

    public removeResizeListener(fn: Function, scope: object): void;

    public un(el: string | HTMLElement, eventName: string, fn: Function, scope: object): void;
  }
}
