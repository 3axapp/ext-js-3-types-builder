declare namespace Ext.dd {
  namespace Registry {

    function getHandle(id: string | HTMLElement):  object;

    function getHandleFromEvent(e: Event):  object;

    function getTarget(id: string | HTMLElement):  object;

    function getTargetFromEvent(e: Event):  object;

    function register(element: string | HTMLElement, data?: object):  void;

    function unregister(element: string | HTMLElement):  void;
  }
}
