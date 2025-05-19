declare namespace Ext.grid {
  class RowNumberer {

    private dataIndex: string;

    private fixed: boolean;

    private hideable: boolean;

    private id: string;

    private menuDisabled: boolean;

    private rowspan: object;

    public constructor(config: IRowNumbererConfig);

    private renderer(v: object, p: object, record: object, rowIndex: object): void;
  }

  interface IRowNumbererConfig {
    header?: string,
    width?: number,
  }
}
