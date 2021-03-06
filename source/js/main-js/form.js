'use strict';

(function () {
  var form = document.querySelector('.feedback__form');

  if (typeof (form) !== 'undefined' && form !== null) {
    var userName = form.querySelector('[name=username]');
    var userPhone = form.querySelector('[name=phone]');
    // var userText = form.querySelector('[name=feedback-question]');
    var consentCheckbox = form.querySelector('[name=user-consent]');

    form.addEventListener('submit', function (evt) {
      if (!userName.value || !userPhone.value || !consentCheckbox.checked) {
        evt.preventDefault();
      } else {
        form.submit();
      }
    });
  }
})();
