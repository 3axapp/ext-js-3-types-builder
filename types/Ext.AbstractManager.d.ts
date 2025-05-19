declare namespace Ext {
  class AbstractManager {

    public all: Ext.util.MixedCollection;

    private typeName: string;

    public create(config: object, defaultType: string): unknown;

    public get(id: string): object;

    public isRegistered(xtype: Ext.Component): boolean;

    public onAvailable(id: string, fn: Function, scope: object): void;

    public register(item: unknown): void;

    public registerType(xtype: string, cls: typeof Ext.Component): void;

    public unregister(item: unknown): void;
  }
}
