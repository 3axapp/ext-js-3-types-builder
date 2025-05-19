declare namespace Ext.layout {
  class FormLayout extends Ext.layout.AnchorLayout {

    public labelStyle: string;

    private type: string;

    public constructor(config: IFormLayoutConfig);

    private adjustHeightAnchor(value: object, c: object): void;

    private adjustWidthAnchor(value: object, c: object): void;

    private getLabelStyle(s: object): void;

    public getTemplateArgs(field: Ext.form.Field): object;

    private isHide(c: object): void;

    private isValidParent(c: object, target: object): void;

    private onFieldHide(c: object): void;

    private onFieldShow(c: object): void;

    private onRemove(c: object): void;

    private renderItem(c: object, position: object, target: object): void;

    private setContainer(ct: object): void;
  }

  interface IFormLayoutConfig {
    anchor?: string,
    defaultAnchor?: string,
    extraCls?: string,
    fieldTpl?: Ext.Template,
    labelSeparator?: string,
    renderHidden?: boolean,
    trackLabels?: boolean,
  }
}
