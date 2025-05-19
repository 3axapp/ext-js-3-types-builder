declare namespace Ext.util {
  class CSS {

    public createStyleSheet(cssText: string, id: string): StyleSheet;

    public getRule(selector: string | unknown[], refreshCache: boolean): CSSRule;

    public getRules(refreshCache: boolean): object;

    public refreshCache(): object;

    public removeStyleSheet(id: string): void;

    public swapStyleSheet(id: string, url: string): void;

    public updateRule(selector: string | unknown[], property: string, value: string): boolean;
  }
}
