declare namespace Ext.util {
  namespace CSS {

    function createStyleSheet(cssText: string, id: string):  StyleSheet;

    function getRule(selector: string | unknown[], refreshCache: boolean):  CSSRule;

    function getRules(refreshCache: boolean):  object;

    function refreshCache():  object;

    function removeStyleSheet(id: string):  void;

    function swapStyleSheet(id: string, url: string):  void;

    function updateRule(selector: string | unknown[], property: string, value: string):  boolean;
  }
}
