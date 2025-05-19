declare namespace Ext {
  class XTemplate extends Ext.Template {

    public constructor(config: IXTemplateConfig);

    public apply(values: object | unknown[]): string;

    public applyTemplate(values: object): string;

    public compile(): this;

    public static from(el: string | HTMLElement): Ext.Template;
  }

  interface IXTemplateConfig {
    compiled?: boolean,
    disableFormats?: boolean,
    re?: RegExp,
  }
}
