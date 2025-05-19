declare namespace Ext {
  class Action {

    private isAction: boolean;

    public constructor(config: IActionConfig);

    private addComponent(comp: object): void;

    private callEach(fnName: object, args: object): void;

    public disable(): void;

    public each(fn: Function, scope: object): void;

    public enable(): void;

    public execute(...args: unknown[]): void;

    public getIconClass(): void;

    public getText(): void;

    public hide(): void;

    public isDisabled(): void;

    public isHidden(): void;

    private removeComponent(comp: object): void;

    public setDisabled(disabled: boolean): void;

    public setHandler(fn: Function, scope: object): void;

    public setHidden(hidden: boolean): void;

    public setIconClass(cls: string): void;

    public setText(text: string): void;

    public show(): void;
  }

  interface IActionConfig {
    disabled?: boolean,
    handler?: Function,
    hidden?: boolean,
    iconCls?: string,
    itemId?: string,
    scope?: object,
    text?: string,
  }
}
