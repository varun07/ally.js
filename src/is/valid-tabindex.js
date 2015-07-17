
// determine if an element's tabindex attribute has a valid value

import allowsInvalidValue from '../supports/focus-invalid-tabindex';

// http://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPattern = /^\s*(-|\+)?[0-9]+\s*$/;

export default function(element) {
  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  if (!element.hasAttribute('tabindex') || allowsInvalidValue) {
    return true;
  }
  // an element matches the tabindex selector even if its value is invalid
  var tabindex = element.getAttribute('tabindex');
  // IE11 parses tabindex="" as the value "-32768"
  // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
  if (tabindex === '-32768') {
    return false;
  }

  return Boolean(tabindex && validIntegerPattern.test(tabindex));
}