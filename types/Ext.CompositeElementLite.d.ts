declare namespace Ext {
  class CompositeElementLite {

    public elements: unknown[];

    public add(els: unknown): Ext.CompositeElement;

    public clear(): void;

    public contains(el: object): object;

    public each(fn: Function, scope?: object): Ext.CompositeElement;

    public fill(els: unknown): Ext.CompositeElement;

    public filter(selector: string | Function): Ext.CompositeElement;

    public first(): Ext.Element;

    public getCount(): object;

    private importElementMethods(): void;

    public indexOf(el: object): object;

    public item(index: number): Ext.Element;

    public last(): Ext.Element;

    public removeElement(el: unknown, removeDom?: boolean): this;

    public replaceElement(el: unknown, replacement: unknown, domReplace?: boolean): this;
  }
}
