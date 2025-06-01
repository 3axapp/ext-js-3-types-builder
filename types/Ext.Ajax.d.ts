declare namespace Ext {
  namespace Ajax {

    const autoAbort: boolean;

    const defaultHeaders: object;

    const disableCaching: boolean;

    const extraParams: object;

    const method: string;

    const timeout: number;

    const url: string;

    function addListener<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function fireEvent<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>):  boolean;

    function hasListener<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E):  boolean;

    function on<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object):  void;

    function removeListener<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;

    function serializeForm(form: string | HTMLElement):  string;

    function un<T extends IAjaxEvents = IAjaxEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object):  void;
  }

  interface IAjaxConfig {
    disableCachingParam?: string,
    listeners?: object,
  }

  interface IAjaxEvents extends globalThis.Record<string, (...args: any[]) => boolean | void> {
    beforerequest: (conn: Ext.data.Connection, options: object) => boolean | void;
    requestcomplete: (conn: Ext.data.Connection, response: object, options: object) => boolean | void;
    requestexception: (conn: Ext.data.Connection, response: object, options: object) => boolean | void;
  }
}
