declare namespace Ext.grid {
  class PropertyStore extends Ext.util.Observable {

    public constructor(config: IPropertyStoreConfig);

    public addListener(eventName: string, handler: Function, scope?: object, options?: object): void;

    public fireEvent(eventName: string, ...args: object[]): boolean;

    private getProperty(row: object): void;

    private getRec(prop: object): void;

    private getSource(): void;

    public hasListener(eventName: string): boolean;

    private isEditableValue(val: object): void;

    public on(eventName: string, handler: Function, scope?: object, options?: object): void;

    private onUpdate(ds: object, record: object, type: object): void;

    private remove(prop: object): void;

    public removeListener(eventName: string, handler: Function, scope?: object): void;

    private setSource(o: object): void;

    private setValue(prop: object, value: object, create: object): void;

    public un(eventName: string, handler: Function, scope?: object): void;
  }

  interface IPropertyStoreConfig {
    listeners?: object,
  }
}
