$(document).ready(function() {

  // Handle form submission.
  $("#submit").click(function(e) {

    var firstName = $("#firstName").val(),
        lastName = $("#lastName").val(),
        mrn = $("#mrn").val(),
        lang = $("#lang").val(),
        source = window.location.pathname,
        optTimestamp = undefined,
        utcSeconds = Date.now() / 1000,
        timestamp = new Date(0),
        phone = $("#areaCode").val()
              + $("#phone1").val()
              + $("#phone2").val();

    e.preventDefault();

    if (firstName == "") {
      $('#form-response').html('<div class="mt-3 alert alert-info" role="alert">Please enter patient first name.</div>');
    } else if (lastName == "") {
      $('#form-response').html('<div class="mt-3 alert alert-info" role="alert">Please enter patient last name.</div>');
    } else if (mrn == "") {
      $('#form-response').html('<div class="mt-3 alert alert-info" role="alert">Please enter patient MRN#.</div>');
    } else if (lang == "") {
      $('#form-response').html('<div class="mt-3 alert alert-info" role="alert">Please enter preferred language.</div>');
    } else if (phone.match(/[^0-9]/gi)) {
      $('#form-response').html('<div class="mt-3 alert alert-info" role="alert">Your phone number contains invalid characters. Please check the phone number that you supplied.</div>');
    } else if (phone.length < 10) {
      $('#form-response').html('<div class="mt-3 alert alert-info" role="alert">Please enter your phone number.</div>');
    } else if (phone.length > 10) {
      $('#form-response').html('<div class="mt-3 alert alert-info" role="alert">Your phone number contains too many digits. Please check the phone number that you supplied.</div>');
    } else {
      $('#submit').prop('disabled', true);
      $('#submit').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>  Saving your preferences</button>');

      timestamp.setUTCSeconds(utcSeconds);

      var data = JSON.stringify({
        'destinationNumber': phone,
        'firstName': firstName,
        'lastName': lastName,
        'mrn': mrn,
        'lang': lang,
        'source': source,
        'optTimestamp': timestamp.toString()
      });

      for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        var storagekey = localStorage.key( i );
        // console.log(storagekey);
        if (storagekey.includes("idToken")) {
          var idTokenValue = localStorage.getItem( storagekey ); 
        }
      }
      
      $.ajax({
        type: 'POST',
        url: 'https://m4fzv9nhgg.execute-api.us-west-2.amazonaws.com/call',
        headers: {
          "Authorization": idTokenValue
        },
        data: data,
        success: function(res) {
          $('#form-response').html('<div class="mt-3 alert alert-success" role="alert"><p>Congratulations! You&apos;ve successfully registered for UW Medicine COVID-19 Connect.</p><p>If you decide you don&apos;t want to receive any additional messages from us, just reply to one of our messages with the keyword CANCEL.</p></div>');
          $('#submit').prop('hidden', true);
          $('#unsubAll').prop('hidden', true);
          $('#submit').text('Preferences saved!');
        },
        error: function(jqxhr, status, exception) {
          $('#form-response').html('<div class="mt-3 alert alert-danger" role="alert">An error occurred. Please try again later.</div>');
          $('#submit').text('Save preferences');
          $('#submit').prop('disabled', false);
        }
      });
    }
  });
});
