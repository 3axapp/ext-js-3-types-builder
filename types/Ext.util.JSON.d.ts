declare namespace Ext.util {
  namespace JSON {

    function decode(json: string):  object;

    function encode(o: unknown):  string;

    function encodeDate(d: Date):  string;
  }
}
