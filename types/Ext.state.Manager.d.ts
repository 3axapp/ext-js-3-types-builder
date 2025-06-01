declare namespace Ext.state {
  namespace Manager {

    function clear(name: string):  void;

    function get(name: string, defaultValue: unknown):  unknown;

    function getProvider():  Provider;

    function set(name: string, value: unknown):  void;

    function setProvider(stateProvider: Provider):  void;
  }
}
