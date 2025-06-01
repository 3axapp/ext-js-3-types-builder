declare namespace Ext.form {
  namespace VTypes {

    const alphaMask: RegExp;

    const alphaText: string;

    const alphanumMask: RegExp;

    const alphanumText: string;

    const emailMask: RegExp;

    const emailText: string;

    const urlText: string;

    function alpha(value: string):  boolean;

    function alphanum(value: string):  boolean;

    function email(value: string):  boolean;

    function url(value: string):  boolean;
  }
}
