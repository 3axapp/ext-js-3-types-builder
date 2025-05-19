declare namespace Ext.form {
  class VTypes {

    public alphaMask: RegExp;

    public alphaText: string;

    public alphanumMask: RegExp;

    public alphanumText: string;

    public emailMask: RegExp;

    public emailText: string;

    public urlText: string;

    public alpha(value: string): boolean;

    public alphanum(value: string): boolean;

    public email(value: string): boolean;

    public url(value: string): boolean;
  }
}
