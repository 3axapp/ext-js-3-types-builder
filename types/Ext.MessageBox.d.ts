declare namespace Ext {
  class MessageBox {

    public CANCEL: object;

    public ERROR: string;

    public INFO: string;

    public OK: object;

    public OKCANCEL: object;

    public QUESTION: string;

    public WARNING: string;

    public YESNO: object;

    public YESNOCANCEL: object;

    public buttonText: object;

    public defaultTextHeight: number;

    public maxWidth: number;

    public minProgressWidth: number;

    public minPromptWidth: number;

    public minWidth: number;

    public alert(title: string, msg: string, fn?: Function, scope?: object): this;

    public confirm(title: string, msg: string, fn?: Function, scope?: object): this;

    public getDialog(titleText: object): Ext.Window;

    public hide(): this;

    public isVisible(): boolean;

    public progress(title: string, msg: string, progressText?: string): this;

    public prompt(title: string, msg: string, fn?: Function, scope?: object, multiline?: boolean | number, value?: string): this;

    public setIcon(icon: string): this;

    public show(config: object): this;

    public updateProgress(value: number, progressText: string, msg: string): this;

    public updateText(text?: string): this;

    public wait(msg: string, title?: string, config?: object): this;
  }
}
