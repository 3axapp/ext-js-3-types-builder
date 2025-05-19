declare namespace Ext {
  class Updater extends Ext.util.Observable {

    public defaultUrl: string;

    public disableCaching: boolean;

    public el: Ext.Element;

    public formUpdateDelegate: Function;

    public indicatorText: string;

    public loadScripts: boolean;

    public refreshDelegate: Function;

    public renderer: object;

    public showLoadIndicator: string;

    public sslBlankUrl: string;

    public timeout: number;

    public transaction: object;

    public updateDelegate: Function;

    public constructor(config: IUpdaterConfig);

    public abort(): void;

    public addListener<T extends IUpdaterEvents = IUpdaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public fireEvent<T extends IUpdaterEvents = IUpdaterEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public formUpdate(form: string | HTMLElement, url?: string, reset?: boolean, callback?: Function): void;

    public getDefaultRenderer(): void;

    public getEl(): Ext.Element;

    public getRenderer(): object;

    public hasListener<T extends IUpdaterEvents = IUpdaterEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    public isAutoRefreshing(): void;

    public isUpdating(): boolean;

    public on<T extends IUpdaterEvents = IUpdaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    public refresh(callback?: Function): void;

    public removeListener<T extends IUpdaterEvents = IUpdaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public setDefaultUrl(defaultUrl: string | Function): void;

    public setRenderer(renderer: object): void;

    public showLoading(): void;

    public startAutoRefresh(interval: number, url?: string | object | Function, params?: string | object, callback?: Function, refreshNow?: boolean): void;

    public stopAutoRefresh(): void;

    public un<T extends IUpdaterEvents = IUpdaterEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public update(options: object): void;

    public static updateElement(el: unknown, url: string, params?: string | object, options?: object): void;
  }

  interface IUpdaterConfig {
    listeners?: object,
  }

  interface IUpdaterEvents extends Record<string, (...args: any[]) => boolean | void> {
    beforeupdate: (el: Ext.Element, url: string | object | Function, params: string | object) => boolean | void;
    failure: (el: Ext.Element, oResponseObject: object) => boolean | void;
    update: (el: Ext.Element, oResponseObject: object) => boolean | void;
  }
}
