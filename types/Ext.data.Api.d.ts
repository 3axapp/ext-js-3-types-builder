declare namespace Ext.data {
  class Api {

    public actions: object;

    public restActions: object;

    public getVerb(name: string): string | null;

    public hasUniqueUrl(proxy: Ext.data.DataProxy, verb: string): boolean;

    public isAction(action: string): boolean;

    public isValid(api: object): String[]|true;

    public prepare(proxy: Ext.data.DataProxy): void;

    public restify(proxy: Ext.data.DataProxy): void;
  }
}
