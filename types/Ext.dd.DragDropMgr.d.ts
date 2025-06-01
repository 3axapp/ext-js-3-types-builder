declare namespace Ext.dd {
  namespace DragDropMgr {

    const INTERSECT: int;

    const POINT: int;

    const clickPixelThresh: int;

    const clickTimeThresh: int;

    const clickTimeout: object;

    const deltaX: int;

    const deltaY: int;

    const dragCurrent: DragDrop;

    const dragOvers: unknown[];

    const dragThreshMet: boolean;

    const elementCache: object;

    const handleIds: String[];

    const ids: String[];

    const initialized: boolean;

    const locationCache: object;

    const locked: boolean;

    const mode: int;

    const notifyOccluded: boolean;

    const preventDefault: boolean;

    const startX: int;

    const startY: int;

    const stopPropagation: boolean;

    const useCache: boolean;

    function _execOnAll(sMethod: object, args: object):  void;

    function _onLoad():  void;

    function _onResize(e: object):  void;

    function _onUnload(e: object, me: object):  void;

    function _remove(oDD: object):  void;

    function byZIndex(d1: object, d2: object):  void;

    function fireEvents(e: Event, isDrop: boolean):  void;

    function getBestMatch(dds: DragDrop[]):  DragDrop;

    function getCss(id: string):  object;

    function getDDById(id: string):  DragDrop;

    function getElWrapper(id: string):  Ext.dd.DDM.ElementWrapper;

    function getElement(id: string):  object;

    function getLocation(oDD: DragDrop):  Ext.lib.Region;

    function getRelated(p_oDD: DragDrop, bTargetsOnly: boolean):  DragDrop[];

    function getZIndex(element: object):  number;

    function handleMouseDown(e: Event, oDD: object):  void;

    function handleMouseMove(e: Event):  void;

    function handleMouseUp(e: Event):  void;

    function init():  void;

    function isDragDrop(id: string):  boolean;

    function isHandle(id: string):  boolean;

    function isLegalTarget(oDD: DragDrop, oTargetDD: DragDrop):  boolean;

    function isLocked():  boolean;

    function isOverTarget(pt: Ext.lib.Point, oTarget: DragDrop):  boolean;

    function isTypeOfDD(the: object):  boolean;

    function lock():  void;

    function refreshCache(groups: object):  void;

    function regDragDrop(oDD: DragDrop, sGroup: string):  void;

    function regHandle(sDDId: string, sHandleId: string):  void;

    function removeDDFromGroup(oDD: object, sGroup: object):  void;

    function startDrag(x: object, y: object):  void;

    function stopDrag(e: Event):  void;

    function stopEvent(e: Event):  void;

    function unlock():  void;

    function unregAll():  void;

    function verifyEl(el: HTMLElement):  boolean;
  }
}
