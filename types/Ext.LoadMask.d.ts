declare namespace Ext {
  class LoadMask {

    public disabled: boolean;

    public constructor(config: ILoadMaskConfig);

    public disable(): void;

    public enable(): void;

    public hide(): void;

    public show(): void;
  }

  interface ILoadMaskConfig {
    msg?: string,
    msgCls?: string,
    removeMask?: boolean,
    store?: Ext.data.Store,
  }
}
