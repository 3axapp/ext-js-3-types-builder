declare namespace Ext.data {
  namespace Api {

    const actions: object;

    const restActions: object;

    function getVerb(name: string):  string | null;

    function hasUniqueUrl(proxy: Ext.data.DataProxy, verb: string):  boolean;

    function isAction(action: string):  boolean;

    function isValid(api: object):  String[]|true;

    function prepare(proxy: Ext.data.DataProxy):  void;

    function restify(proxy: Ext.data.DataProxy):  void;
  }
}
