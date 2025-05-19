declare namespace Ext {
  class DatePicker extends Ext.Component {

    private focusOnSelect: boolean;

    private initHour: number;

    public constructor(config: IDatePickerConfig);

    public addListener<T extends IDatePickerEvents = IDatePickerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private beforeDestroy(): void;

    private createMonthPicker(): void;

    private doDisabled(disabled: object): void;

    public fireEvent<T extends IDatePickerEvents = IDatePickerEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public focus(): this;

    public getValue(): Date;

    private handleDateClick(e: object, t: object): void;

    private handleMouseWheel(e: object): void;

    public hasListener<T extends IDatePickerEvents = IDatePickerEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private hideMonthPicker(disableAnim: object): void;

    private initComponent(): void;

    private initDisabledDays(): void;

    public on<T extends IDatePickerEvents = IDatePickerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onDisable(): void;

    private onEnable(initial: object): void;

    private onMonthClick(e: object, t: object): void;

    private onMonthDblClick(e: object, t: object): void;

    private onRender(container: object, position: object): void;

    public removeListener<T extends IDatePickerEvents = IDatePickerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    private selectMPMonth(m: object): void;

    private selectToday(): void;

    public setDisabledDates(disabledDates: unknown[] | RegExp): void;

    public setDisabledDays(disabledDays: unknown[]): void;

    public setMaxDate(value: Date): void;

    public setMinDate(value: Date): void;

    public setValue(value: Date): void;

    private showMonthPicker(): void;

    private showNextMonth(e: object): void;

    private showNextYear(): void;

    private showPrevMonth(e: object): void;

    private showPrevYear(): void;

    public un<T extends IDatePickerEvents = IDatePickerEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public update(date: object, forceRefresh: object): void;

    private updateMPMonth(sm: object): void;

    private updateMPYear(y: object): void;
  }

  interface IDatePickerConfig {
    allowDomMove?: boolean,
    applyTo?: unknown,
    autoShow?: boolean,
    bubbleEvents?: unknown[],
    cancelText?: string,
    clearCls?: string,
    cls?: string,
    contentEl?: string,
    ctCls?: string,
    data?: unknown,
    dayNames?: unknown[],
    disabled?: boolean,
    disabledClass?: string,
    disabledDates?: unknown[],
    disabledDatesRE?: RegExp,
    disabledDatesText?: string,
    disabledDays?: unknown[],
    disabledDaysText?: string,
    fieldLabel?: string,
    format?: string,
    handler?: Function,
    hidden?: boolean,
    hideLabel?: boolean,
    hideMode?: string,
    hideParent?: boolean,
    html?: string | object,
    id?: string,
    itemCls?: string,
    itemId?: string,
    labelSeparator?: string,
    labelStyle?: string,
    listeners?: object,
    maxDate?: Date,
    maxText?: string,
    minDate?: Date,
    minText?: string,
    monthNames?: unknown[],
    monthYearText?: string,
    nextText?: string,
    okText?: string,
    overCls?: string,
    plugins?: object | unknown[],
    prevText?: string,
    ptype?: string,
    ref?: string,
    renderTo?: unknown,
    scope?: object,
    showToday?: boolean,
    startDay?: number,
    stateEvents?: unknown[],
    stateId?: string,
    stateful?: boolean,
    style?: string,
    todayText?: string,
    todayTip?: string,
    tpl?: unknown,
    tplWriteMode?: string,
    xtype?: string,
  }

  interface IDatePickerEvents extends Record<string, (...args: any[]) => boolean | void> {
    added: (thisCmp: DatePicker, ownerCt: Ext.Container, index: number) => boolean | void;
    afterrender: (thisCmp: DatePicker) => boolean | void;
    beforedestroy: (thisCmp: DatePicker) => boolean | void;
    beforehide: (thisCmp: DatePicker) => boolean | void;
    beforerender: (thisCmp: DatePicker) => boolean | void;
    beforeshow: (thisCmp: DatePicker) => boolean | void;
    beforestaterestore: (thisCmp: DatePicker, state: object) => boolean | void;
    beforestatesave: (thisCmp: DatePicker, state: object) => boolean | void;
    destroy: (thisCmp: DatePicker) => boolean | void;
    disable: (thisCmp: DatePicker) => boolean | void;
    enable: (thisCmp: DatePicker) => boolean | void;
    hide: (thisCmp: DatePicker) => boolean | void;
    removed: (thisCmp: DatePicker, ownerCt: Ext.Container) => boolean | void;
    render: (thisCmp: DatePicker) => boolean | void;
    select: (thisCmp: DatePicker, date: Date) => boolean | void;
    show: (thisCmp: DatePicker) => boolean | void;
    staterestore: (thisCmp: DatePicker, state: object) => boolean | void;
    statesave: (thisCmp: DatePicker, state: object) => boolean | void;
  }
}
