declare namespace Ext.data {
  class SortTypes {

    public stripTagsRE: RegExp;

    public asDate(s: unknown): number;

    public asFloat(s: unknown): number;

    public asInt(s: unknown): number;

    public asText(s: unknown): string;

    public asUCString(s: unknown): string;

    public asUCText(s: unknown): string;

    public none(s: unknown): unknown;
  }
}
