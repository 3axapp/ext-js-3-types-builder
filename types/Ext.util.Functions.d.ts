declare namespace Ext.util {
  namespace Functions {

    function createDelegate(fn: Function, scope?: object, args?: unknown[], appendArgs?: boolean | number):  Function;

    function createInterceptor(origFn: Function, newFn: Function, scope?: object):  Function;

    function createSequence(origFn: Function, newFn: Function, scope?: object):  Function;

    function defer(fn: Function, millis: number, scope?: object, args?: unknown[], appendArgs?: boolean | number):  number;
  }
}
