export function validatePhoneNo(fieldValue) {
    if (/^(\s*\d\s*){10}$/.test(fieldValue)) {
      return true;
    } else {
      return false;
    }
  }

  export function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField) == false) {
      return false;
    }
    return true;
  }