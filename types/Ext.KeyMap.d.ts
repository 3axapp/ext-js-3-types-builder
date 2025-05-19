declare namespace Ext {
  class KeyMap {

    public stopEvent: boolean;

    public addBinding(config: object | unknown[]): void;

    public disable(): void;

    public enable(): void;

    public isEnabled(): boolean;

    public on(key: number | unknown[] | object, fn: Function, scope?: object): void;

    public setDisabled(disabled: boolean): void;
  }
}
