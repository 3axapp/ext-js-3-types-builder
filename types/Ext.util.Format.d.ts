declare namespace Ext.util {
  namespace Format {

    function capitalize(value: string):  string;

    function date(value: string | Date, format?: string):  string;

    function dateRenderer(format: string):  Function;

    function defaultValue(value: unknown, defaultValue: string):  string;

    function ellipsis(value: string, length: number, word: boolean):  string;

    function fileSize(size: number | string):  string;

    function htmlDecode(value: string):  string;

    function htmlEncode(value: string):  string;

    function lowercase(value: string):  string;

    function math():  Function;

    function nl2br(The: string):  string;

    function number(v: number, format: string):  string;

    function numberRenderer(format: string):  Function;

    function plural(value: number, singular: string, plural?: string):  void;

    function round(value: number | string, precision: number):  number;

    function stripScripts(value: unknown):  string;

    function stripTags(value: unknown):  string;

    function substr(value: string, start: number, length: number):  string;

    function trim(value: string):  string;

    function undef(value: unknown):  unknown;

    function uppercase(value: string):  string;

    function usMoney(value: number | string):  string;
  }
}
