declare namespace Ext.list {
  class BooleanColumn extends Ext.list.Column {

    public constructor(config: IBooleanColumnConfig);
  }

  interface IBooleanColumnConfig {
    align?: string,
    cls?: string,
    dataIndex?: string,
    falseText?: string,
    header?: string,
    tpl?: string,
    trueText?: string,
    undefinedText?: string,
    width?: number,
  }
}
