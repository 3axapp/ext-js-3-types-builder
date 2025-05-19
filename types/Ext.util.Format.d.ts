declare namespace Ext.util {
  class Format {

    public capitalize(value: string): string;

    public date(value: string | Date, format?: string): string;

    public dateRenderer(format: string): Function;

    public defaultValue(value: unknown, defaultValue: string): string;

    public ellipsis(value: string, length: number, word: boolean): string;

    public fileSize(size: number | string): string;

    public htmlDecode(value: string): string;

    public htmlEncode(value: string): string;

    public lowercase(value: string): string;

    public math(): Function;

    public nl2br(The: string): string;

    public number(v: number, format: string): string;

    public numberRenderer(format: string): Function;

    public plural(value: number, singular: string, plural?: string): void;

    public round(value: number | string, precision: number): number;

    public stripScripts(value: unknown): string;

    public stripTags(value: unknown): string;

    public substr(value: string, start: number, length: number): string;

    public trim(value: string): string;

    public undef(value: unknown): unknown;

    public uppercase(value: string): string;

    public usMoney(value: number | string): string;
  }
}
