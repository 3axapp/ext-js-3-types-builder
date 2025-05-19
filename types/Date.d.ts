declare class Date {

  public static DAY: string;

  public static HOUR: string;

  public static MILLI: string;

  public static MINUTE: string;

  public static MONTH: string;

  public static SECOND: string;

  public static YEAR: string;

  public static dayNames: unknown[];

  public static defaults: object;

  public static formatCodes: object;

  public static formatFunctions: object;

  public static monthNames: unknown[];

  public static monthNumbers: object;

  public static parseFunctions: object;

  public static useStrict: boolean;

  public a(): void;

  public add(interval: string, value: number): Date;

  public between(start: Date, end: Date): boolean;

  public clearTime(clone: boolean): this;

  public clone(): Date;

  public format(format: string): string;

  public getDayOfYear(): number;

  public getDaysInMonth(): number;

  public getElapsed(date?: Date): number;

  public getFirstDateOfMonth(): Date;

  public getFirstDayOfMonth(): number;

  public getGMTOffset(colon?: boolean): string;

  public getLastDateOfMonth(): Date;

  public getLastDayOfMonth(): number;

  public getSuffix(): string;

  public getTimezone(): string;

  public getWeekOfYear(): number;

  public isDST(): boolean;

  public isLeapYear(): boolean;

  public static formatContainsHourInfo(format: object): boolean;

  public static getMonthNumber(name: string): number;

  public static getShortDayName(day: number): string;

  public static getShortMonthName(month: number): string;

  public static isValid(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number): boolean;

  public static parseDate(input: string, format: string, strict?: boolean): Date;
}
