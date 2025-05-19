declare namespace Ext.data {
  class Field {

    public constructor(config: IFieldConfig);
  }

  interface IFieldConfig {
    allowBlank?: boolean,
    convert?: Function,
    dateFormat?: string,
    defaultValue?: unknown,
    mapping?: string | number,
    name?: string,
    sortDir?: string,
    sortType?: Function,
    type?: unknown,
    useNull?: boolean,
  }
}
