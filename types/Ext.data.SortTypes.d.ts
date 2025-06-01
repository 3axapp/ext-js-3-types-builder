declare namespace Ext.data {
  namespace SortTypes {

    const stripTagsRE: RegExp;

    function asDate(s: unknown):  number;

    function asFloat(s: unknown):  number;

    function asInt(s: unknown):  number;

    function asText(s: unknown):  string;

    function asUCString(s: unknown):  string;

    function asUCText(s: unknown):  string;

    function none(s: unknown):  unknown;
  }
}
