declare namespace Ext {
  class Template {

    public disableFormats: boolean;

    private html: object;

    public re: RegExp;

    public constructor(config: ITemplateConfig);

    public append(el: unknown, values: object | unknown[], returnElement?: boolean): HTMLElement | Ext.Element;

    public apply(values: object | unknown[]): string;

    public applyTemplate(values: object | unknown[]): string;

    public compile(): this;

    public insertAfter(el: unknown, values: object | unknown[], returnElement?: boolean): HTMLElement | Ext.Element;

    public insertBefore(el: unknown, values: object | unknown[], returnElement?: boolean): HTMLElement | Ext.Element;

    public insertFirst(el: unknown, values: object | unknown[], returnElement?: boolean): HTMLElement | Ext.Element;

    public overwrite(el: unknown, values: object | unknown[], returnElement?: boolean): HTMLElement | Ext.Element;

    public set(html: string, compile?: boolean): this;

    public static from(el: string | HTMLElement, config: object): Ext.Template;
  }

  interface ITemplateConfig {
    compiled?: boolean,
    disableFormats?: boolean,
    re?: RegExp,
  }
}
