---
---

/* Grab the users ip for Hubspot */
var userIP;
function getUserIp() {
  $.getJSON('https://api.ipify.org?format=jsonp&callback=?')
    .fail(function(json) {  
      userIP = '';
    })  
    .done(function(json) {  
      userIP = json.ip
    });
}

/* Cookie parsing function used by Hubspot context */
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

$(function() {
  var hpValid = true;
  var $formEls = $(".districtbuilder-contact-form");
  var $submitButton = $(".contact-form-submit");
  var hsContextInput = $(".hs_context");
  var redirectUrl = "http://districtbuilder.com/thank-you/";
  var formEndpoint = "https://forms.hubspot.com/uploads/form/v2/6397011/ce703ec5-cfe5-4de4-8683-d1bcd85703bd";
  
  getUserIp();

  function setHSContext() {
    var hs_context = {
      hutk: getCookie('hubspotutk') || '',
      ipAddress: userIP,
      pageUrl: window.location.href,
      pageName: document.title,
      redirectUrl: redirectUrl
    }
    return JSON.stringify(hs_context);
  }

  // Delay submitting immediately
  // Set Hubspot context value
  setTimeout(function() {
    $(hsContextInput).each(function() {
      $(this).val(setHSContext());
    });
    $submitButton.each(function() {
      $(this).attr("disabled", false);
    });
    $($formEls).each(function() {
      $(this).attr("action", formEndpoint);
    });
  }, 3500);

  // For each form make sure we run client-side validation
  $($formEls).each( function() {
    $(this).validate({
      errorClass: "invalid",
      validClass: "no-error",
      wrapper: "span",

      submitHandler: function(form) {
        var hpFields_1 = $(".contact-method-fullname"),
            hpFields_2 = $(".contact-method-phone");

        if ($(hpFields_1).val() || $(hpFields_2).val()) {
          hpValid = false;
        } else {
          hpValid = true;
        };
        
        // If client validation passes, submit form
        if( hpValid ) { 
          form.submit();
        };
      }
    });
  });
});