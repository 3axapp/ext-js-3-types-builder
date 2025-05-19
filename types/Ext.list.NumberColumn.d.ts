declare namespace Ext.list {
  class NumberColumn extends Ext.list.Column {

    public constructor(config: INumberColumnConfig);
  }

  interface INumberColumnConfig {
    align?: string,
    cls?: string,
    dataIndex?: string,
    format?: string,
    header?: string,
    tpl?: string,
    width?: number,
  }
}
