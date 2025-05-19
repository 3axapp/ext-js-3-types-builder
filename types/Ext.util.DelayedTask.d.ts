declare namespace Ext.util {
  class DelayedTask {

    public cancel(): void;

    public delay(delay: number, newFn?: Function, newScope?: object, newArgs?: unknown[]): void;
  }
}
