declare namespace Ext.slider {
  class Thumb {

    public dragging: boolean;

    public slider: Ext.slider.MultiSlider;

    public constructor(config: IThumbConfig);

    private destroy(): void;

    public disable(): void;

    public enable(): void;

    private getNewValue(): void;

    public initEvents(): void;

    private onBeforeDragStart(e: object): boolean;

    private onDrag(e: object): void;

    private onDragEnd(e: object): void;

    private onDragStart(e: object): void;

    public render(): void;
  }

  interface IThumbConfig {
    constrain?: boolean,
    slider?: Ext.slider.MultiSlider,
  }
}
