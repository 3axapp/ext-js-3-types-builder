declare namespace Ext.list {
  class DateColumn extends Ext.list.Column {

    private format: string;

    public constructor(config: IDateColumnConfig);
  }

  interface IDateColumnConfig {
    align?: string,
    cls?: string,
    dataIndex?: string,
    header?: string,
    tpl?: string,
    width?: number,
  }
}
