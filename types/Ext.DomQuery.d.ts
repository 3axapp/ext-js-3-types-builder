declare namespace Ext {
  class DomQuery {

    public matchers: unknown[];

    public operators: object;

    public pseudos: object;

    public compile(selector: string, type?: string): Function;

    public filter(el: unknown[], selector: string, nonMatches: boolean): unknown[];

    public is(el: string | HTMLElement | unknown[], selector: string): boolean;

    public jsSelect(selector: string, root?: Node | string): unknown[];

    public selectNode(selector: string, root?: Node): Element;

    public selectNumber(selector: string, root?: Node, defaultValue?: number): number;

    public selectValue(selector: string, root?: Node, defaultValue?: string): string;
  }
}
