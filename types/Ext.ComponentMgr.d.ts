declare namespace Ext {
  class ComponentMgr {

    public all: Ext.util.MixedCollection;

    public ptypes: object;

    public types: object;

    public create(config: object, defaultType: typeof Ext.util.Observable): Ext.Component;

    public createPlugin(config: object, defaultType: typeof Ext.util.Observable): Ext.Component;

    public get(id: string): object;

    public isPluginRegistered(ptype: Ext.Component): boolean;

    public isRegistered(xtype: Ext.Component): boolean;

    public onAvailable(id: string, fn: Function, scope: object): void;

    public register(c: Ext.Component): void;

    public registerPlugin(ptype: string, cls: typeof Ext.Component): void;

    public registerType(xtype: string, cls: typeof Ext.Component): void;

    public unregister(c: Ext.Component): void;
  }
}
