declare namespace Ext {
  namespace EventObject {

    function getCharCode():  number;

    function getKey():  number;

    function getPageX():  number;

    function getPageY():  number;

    function getRelatedTarget():  HTMLElement;

    function getTarget(selector?: string, maxDepth?: number | unknown, returnEl?: boolean):  HTMLelement;

    function getWheelDelta():  number;

    function getXY():  unknown[];

    function preventDefault():  void;

    function setEvent(e: object):  void;

    function stopEvent():  void;

    function stopPropagation():  void;

    function within(el: unknown, related?: boolean, allowEl?: boolean):  boolean;
  }
}
