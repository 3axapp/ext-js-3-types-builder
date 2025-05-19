declare class String {

  public toggle(value: string, other: string): string;

  public trim(): string;

  public static escape(string: string): string;

  public static format(string: string, value1: string, value2: string): string;

  public static leftPad(string: string, size: number, char?: string): string;
}
