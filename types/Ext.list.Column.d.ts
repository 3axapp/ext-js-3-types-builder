declare namespace Ext.list {
  class Column {

    public constructor(config: IColumnConfig);
  }

  interface IColumnConfig {
    align?: string,
    cls?: string,
    dataIndex?: string,
    header?: string,
    tpl?: string,
    width?: number,
  }
}
