declare namespace Ext.grid {
  class AbstractSelectionModel extends Ext.util.Observable {

    public grid: object;

    public constructor(config: IAbstractSelectionModelConfig);

    public addListener(eventName: string, handler: Function, scope?: object, options?: object): void;

    private destroy(): void;

    public fireEvent(eventName: string, ...args: object[]): boolean;

    public hasListener(eventName: string): boolean;

    public isLocked(): boolean;

    public lock(): void;

    public on(eventName: string, handler: Function, scope?: object, options?: object): void;

    public removeListener(eventName: string, handler: Function, scope?: object): void;

    private sortLock(): void;

    private sortUnLock(): void;

    public un(eventName: string, handler: Function, scope?: object): void;

    public unlock(): void;
  }

  interface IAbstractSelectionModelConfig {
    listeners?: object,
  }
}
