declare namespace Ext {
  namespace DomQuery {

    const matchers: unknown[];

    const operators: object;

    const pseudos: object;

    function compile(selector: string, type?: string):  Function;

    function filter(el: unknown[], selector: string, nonMatches: boolean):  unknown[];

    function is(el: string | HTMLElement | unknown[], selector: string):  boolean;

    function jsSelect(selector: string, root?: Node | string):  unknown[];

    function selectNode(selector: string, root?: Node):  Element;

    function selectNumber(selector: string, root?: Node, defaultValue?: number):  number;

    function selectValue(selector: string, root?: Node, defaultValue?: string):  string;
  }
}
