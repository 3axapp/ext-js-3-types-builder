declare namespace Ext.dd {
  namespace ScrollManager {

    const animDuration: number;

    const animate: boolean;

    const ddGroup: string;

    const frequency: number;

    const hthresh: number;

    const increment: number;

    const vthresh: number;

    function refreshCache():  void;

    function register(el: unknown | unknown[]):  void;

    function unregister(el: unknown | unknown[]):  void;
  }
}
