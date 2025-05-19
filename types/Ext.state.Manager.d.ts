declare namespace Ext.state {
  class Manager {

    public clear(name: string): void;

    public get(name: string, defaultValue: unknown): unknown;

    public getProvider(): Provider;

    public set(name: string, value: unknown): void;

    public setProvider(stateProvider: Provider): void;
  }
}
