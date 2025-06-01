declare namespace Ext.util {
  namespace TextMetrics {

    function bind(el: string | HTMLElement):  void;

    function createInstance(el: string | HTMLElement, fixedWidth?: number):  Ext.util.TextMetrics.Instance;

    function getHeight(text: string):  number;

    function getSize(text: string):  object;

    function getWidth(text: string):  number;

    function measure(el: string | HTMLElement, text: string, fixedWidth?: number):  object;

    function setFixedWidth(width: number):  void;
  }
}
