declare namespace Ext.data {
  class Record<R extends globalThis.Record<string, unknown> = globalThis.Record<string, unknown>> {

    public data: object;

    public dirty: boolean;

    public fields: Ext.util.MixedCollection;

    public id: object;

    public json: unknown[] | object;

    public modified: object;

    public node: Node;

    public phantom: boolean;

    public store: Ext.data.Store<R>;

    public beginEdit(): void;

    public cancelEdit(): void;

    public commit(silent?: boolean): void;

    public copy(id?: string): Ext.data.Record<R>;

    public endEdit(): void;

    public get(name: string): object;

    public getChanges(): object;

    public id(rec: Ext.data.Record<R>): string;

    public isModified(fieldName: string): boolean;

    public isValid(): boolean;

    public markDirty(): void;

    public reject(silent?: boolean): void;

    public set(name: string, value: string | object | unknown[]): void;

    public static create(o: unknown[]): Function;
  }
}
