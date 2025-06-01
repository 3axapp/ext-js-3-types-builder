declare namespace Ext {
  namespace ComponentMgr {

    const all: Ext.util.MixedCollection;

    const ptypes: object;

    const types: object;

    function create(config: object, defaultType: typeof Ext.util.Observable):  Ext.Component;

    function createPlugin(config: object, defaultType: typeof Ext.util.Observable):  Ext.Component;

    function get(id: string):  object;

    function isPluginRegistered(ptype: Ext.Component):  boolean;

    function isRegistered(xtype: Ext.Component):  boolean;

    function onAvailable(id: string, fn: Function, scope: object):  void;

    function register(c: Ext.Component):  void;

    function registerPlugin(ptype: string, cls: typeof Ext.Component):  void;

    function registerType(xtype: string, cls: typeof Ext.Component):  void;

    function unregister(c: Ext.Component):  void;
  }
}
