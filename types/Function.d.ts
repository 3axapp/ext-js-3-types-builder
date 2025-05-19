declare class Function {

  public createCallback(): Function;

  public createDelegate(scope?: object, args?: unknown[], appendArgs?: boolean | number): Function;

  public createInterceptor(fcn: Function, scope?: object): Function;

  public createSequence(fcn: Function, scope?: object): Function;

  public defer(millis: number, scope?: object, args?: unknown[], appendArgs?: boolean | number): number;
}
