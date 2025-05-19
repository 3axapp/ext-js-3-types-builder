declare namespace Ext {
  class Loader {

    private buildScriptTag(filename: string, callback: Function): Element;

    public load(fileList: unknown[], callback: Function, scope: object, preserveOrder: boolean): void;

    public loadFileIndex(index: object): void;

    public onFileLoaded(): void;
  }
}
