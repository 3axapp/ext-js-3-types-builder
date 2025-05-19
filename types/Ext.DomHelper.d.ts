declare namespace Ext {
  class DomHelper {

    public lastIndex: number;

    public useDom: boolean;

    public append(el: unknown, o: object | string, returnElement?: boolean): HTMLElement | Ext.Element;

    public applyStyles(el: string | HTMLElement, styles: string | object | Function): void;

    public createDom(o: object | string): HTMLElement;

    public createTemplate(o: object): Ext.Template;

    public insertAfter(el: unknown, o: object, returnElement?: boolean): HTMLElement | Ext.Element;

    public insertBefore(el: unknown, o: object | string, returnElement?: boolean): HTMLElement | Ext.Element;

    public insertFirst(el: unknown, o: object | string, returnElement?: boolean): HTMLElement | Ext.Element;

    public insertHtml(where: string, el: HTMLElement, html: string): HTMLElement;

    public markup(o: object): string;

    public overwrite(el: unknown, o: object | string, returnElement?: boolean): HTMLElement | Ext.Element;
  }
}
