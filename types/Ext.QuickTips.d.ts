declare namespace Ext {
  namespace QuickTips {

    function disable():  void;

    function enable():  void;

    function getQuickTip():  Ext.QuickTip;

    function init(autoRender: boolean):  void;

    function isEnabled():  boolean;

    function register(config: object):  void;

    function tips(config: object):  void;

    function unregister(el: string | HTMLElement | Element):  void;
  }
}
