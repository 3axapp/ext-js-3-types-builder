declare namespace Ext.util {
  class Functions {

    public createDelegate(fn: Function, scope?: object, args?: unknown[], appendArgs?: boolean | number): Function;

    public createInterceptor(origFn: Function, newFn: Function, scope?: object): Function;

    public createSequence(origFn: Function, newFn: Function, scope?: object): Function;

    public defer(fn: Function, millis: number, scope?: object, args?: unknown[], appendArgs?: boolean | number): number;
  }
}
