declare namespace Ext {
  class KeyNav {

    public constructor(config: IKeyNavConfig);

    public destroy(): void;

    public disable(): void;

    public enable(): void;

    public setDisabled(disabled: boolean): void;
  }

  interface IKeyNavConfig {
    defaultEventAction?: string,
    disabled?: boolean,
    forceKeyDown?: boolean,
  }
}
