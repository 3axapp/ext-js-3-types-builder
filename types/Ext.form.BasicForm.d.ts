declare namespace Ext.form {
  class BasicForm extends Ext.util.Observable {

    private activeAction: object;

    public items: Ext.util.MixedCollection;

    public waitMsgTarget: unknown;

    public constructor(config: IBasicFormConfig);

    public add(field1: Field, field2?: Field, etc?: Field): this;

    public addListener<T extends IBasicFormEvents = IBasicFormEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private afterAction(action: object, success: object): void;

    public applyIfToFields(values: object): this;

    public applyToFields(values: object): this;

    private beforeAction(action: object): void;

    private callFieldMethod(fnName: object, args: object): this;

    public cleanDestroyed(): void;

    public clearInvalid(): this;

    private destroy(bound: boolean): void;

    public doAction(actionName: string | object, options?: object): this;

    public findField(id: string): object;

    public fireEvent<T extends IBasicFormEvents = IBasicFormEvents, E extends keyof T = keyof T>(eventName: E, ...args: Parameters<T[E]>): boolean;

    public getEl(): object;

    public getFieldValues(dirtyOnly?: boolean): object;

    public getValues(asString?: boolean): string | object;

    public hasListener<T extends IBasicFormEvents = IBasicFormEvents, E extends keyof T = keyof T>(eventName: E): boolean;

    private initEl(el: object): void;

    public isDirty(): object;

    public isValid(): object;

    public load(options: object): this;

    public loadRecord(record: Ext.data.Record): this;

    public markInvalid(errors: unknown[] | object): this;

    public on<T extends IBasicFormEvents = IBasicFormEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object, options?: object): void;

    private onSubmit(e: object): void;

    public remove(field: Field): this;

    public removeListener<T extends IBasicFormEvents = IBasicFormEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public render(): this;

    public reset(): this;

    public setValues(values: unknown[] | object): this;

    public submit(options: object): BasicForm;

    public un<T extends IBasicFormEvents = IBasicFormEvents, E extends keyof T = keyof T>(eventName: E, handler: T[E], scope?: object): void;

    public updateRecord(record: Ext.data.Record): this;
  }

  interface IBasicFormConfig {
    api?: object,
    baseParams?: object,
    errorReader?: DataReader,
    fileUpload?: boolean,
    listeners?: object,
    method?: string,
    paramOrder?: unknown[] | string,
    paramsAsHash?: boolean,
    reader?: DataReader,
    standardSubmit?: boolean,
    timeout?: number,
    trackResetOnLoad?: boolean,
    url?: string,
    waitTitle?: string,
  }

  interface IBasicFormEvents extends Record<string, (...args: any[]) => boolean | void> {
    actioncomplete: (thisCmp: BasicForm, action: Action) => boolean | void;
    actionfailed: (thisCmp: BasicForm, action: Action) => boolean | void;
    beforeaction: (thisCmp: BasicForm, action: Action) => boolean | void;
  }
}
