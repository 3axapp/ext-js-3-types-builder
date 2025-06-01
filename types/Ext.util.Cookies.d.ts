declare namespace Ext.util {
  namespace Cookies {

    function clear(name: string):  void;

    function get(name: string):  unknown;

    function getCookieVal(offset: object):  void;

    function set(name: string, value: unknown, expires?: object, path?: string, domain?: string, secure?: boolean):  void;
  }
}
