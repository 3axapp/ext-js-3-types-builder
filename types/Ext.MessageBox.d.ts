declare namespace Ext {
  namespace MessageBox {

    const CANCEL: object;

    const ERROR: string;

    const INFO: string;

    const OK: object;

    const OKCANCEL: object;

    const QUESTION: string;

    const WARNING: string;

    const YESNO: object;

    const YESNOCANCEL: object;

    const buttonText: object;

    const defaultTextHeight: number;

    const maxWidth: number;

    const minProgressWidth: number;

    const minPromptWidth: number;

    const minWidth: number;

    function alert(title: string, msg: string, fn?: Function, scope?: object):  this;

    function confirm(title: string, msg: string, fn?: Function, scope?: object):  this;

    function getDialog(titleText: object):  Ext.Window;

    function hide():  this;

    function isVisible():  boolean;

    function progress(title: string, msg: string, progressText?: string):  this;

    function prompt(title: string, msg: string, fn?: Function, scope?: object, multiline?: boolean | number, value?: string):  this;

    function setIcon(icon: string):  this;

    function show(config: object):  this;

    function updateProgress(value: number, progressText: string, msg: string):  this;

    function updateText(text?: string):  this;

    function wait(msg: string, title?: string, config?: object):  this;
  }
}
