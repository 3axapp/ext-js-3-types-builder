declare namespace Ext {
  class Error extends Error {

    public getMessage(): string;

    public getName(): string;

    public toJson(): string;
  }
}
