declare namespace Ext.dd {
  class DDProxy extends Ext.dd.DD {

    public centerFrame: boolean;

    public resizeFrame: boolean;

    public static Ext: string;

    private _resizeProxy(): void;

    public createFrame(): void;

    public initFrame(): void;

    private showFrame(iPageX: int, iPageY: int): void;
  }
}
