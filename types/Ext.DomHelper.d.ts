declare namespace Ext {
  namespace DomHelper {

    const lastIndex: number;

    const useDom: boolean;

    function append(el: unknown, o: object | string, returnElement?: boolean):  HTMLElement | Ext.Element;

    function applyStyles(el: string | HTMLElement, styles: string | object | Function):  void;

    function createDom(o: object | string):  HTMLElement;

    function createTemplate(o: object):  Ext.Template;

    function insertAfter(el: unknown, o: object, returnElement?: boolean):  HTMLElement | Ext.Element;

    function insertBefore(el: unknown, o: object | string, returnElement?: boolean):  HTMLElement | Ext.Element;

    function insertFirst(el: unknown, o: object | string, returnElement?: boolean):  HTMLElement | Ext.Element;

    function insertHtml(where: string, el: HTMLElement, html: string):  HTMLElement;

    function markup(o: object):  string;

    function overwrite(el: unknown, o: object | string, returnElement?: boolean):  HTMLElement | Ext.Element;
  }
}
