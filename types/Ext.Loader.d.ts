declare namespace Ext {
  namespace Loader {

    function buildScriptTag(filename: string, callback: Function):  Element;

    function load(fileList: unknown[], callback: Function, scope: object, preserveOrder: boolean):  void;

    function loadFileIndex(index: object):  void;

    function onFileLoaded():  void;
  }
}
