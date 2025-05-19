declare namespace Ext.tree {
  class TreeLoader extends Ext.util.Observable {

    public constructor(config: ITreeLoaderConfig);

    public addListener<T extends ITreeLoaderEvents = ITreeLoaderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public createNode(attr: object): void;

    public fireEvent<T extends ITreeLoaderEvents = ITreeLoaderEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public hasListener<T extends ITreeLoaderEvents = ITreeLoaderEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public load(node: Ext.tree.TreeNode, callback: Function, scope: object): void;

    public on<T extends ITreeLoaderEvents = ITreeLoaderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public removeListener<T extends ITreeLoaderEvents = ITreeLoaderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public un<T extends ITreeLoaderEvents = ITreeLoaderEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;
  }

  interface ITreeLoaderConfig {
    baseAttrs?: object,
    baseParams?: object,
    clearOnLoad?: boolean,
    dataUrl?: string,
    directFn?: Function,
    listeners?: object,
    nodeParameter?: string,
    paramOrder?: unknown[] | string,
    paramsAsHash?: boolean,
    preloadChildren?: boolean,
    requestMethod?: string,
    uiProviders?: object,
    url?: string,
  }

  interface ITreeLoaderEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeload: (This: object, node: object, callback: object) => boolean | void;
    load: (This: object, node: object, response: object) => boolean | void;
    loadexception: (This: object, node: object, response: object) => boolean | void;
  }
}
