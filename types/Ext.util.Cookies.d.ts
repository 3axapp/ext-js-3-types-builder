declare namespace Ext.util {
  class Cookies {

    public clear(name: string): void;

    public get(name: string): unknown;

    private getCookieVal(offset: object): void;

    public set(name: string, value: unknown, expires?: object, path?: string, domain?: string, secure?: boolean): void;
  }
}
