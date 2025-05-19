declare namespace Ext.util {
  class TextMetrics {

    public bind(el: string | HTMLElement): void;

    public createInstance(el: string | HTMLElement, fixedWidth?: number): Ext.util.TextMetrics.Instance;

    public getHeight(text: string): number;

    public getSize(text: string): object;

    public getWidth(text: string): number;

    public measure(el: string | HTMLElement, text: string, fixedWidth?: number): object;

    public setFixedWidth(width: number): void;
  }
}
