var result = 'Anmeldung fehlgeschlagen. Bitte versuchen sie es später erneut.';

function msg_map(msg) {
  var result;
  var patt = new RegExp("No message available");
  if ( language == 'eng' ) {
    switch(msg) {
      case "success":
          result = 'Application successful. Please verify the email that you will receive shortly.';
          break;
      case "agb not accepted":
          result = 'The conditions must be accepted.';
          break;
      case "mail addresses do not match":
          result = 'Email addresses do not match.';
          break;
      case "not a valid mail address":
          result = 'Please fill in a valid email address.';
          break;
      case "Bitte füllen Sie das Formular aus.":
          result = 'Please fill in the whole form.';
          break;
      default:
          result = 'An error occurred.';
          break;
    }
    switch(true) {
      case patt.test(msg):
          result = 'Please choose a workshop.';
          break;
    }
  } else {
    switch(msg) {
      case "success":
          result = 'Anmeldung erfolgreich. Bitte bestätigen Sie die Email, die sie in Kürze erhalten.';
          break;
      case "agb not accepted":
          result = 'Sie müssen die AGB akzeptieren.';
          break;
      case "mail addresses do not match":
          result = 'Email-Adressen stimmen nicht überein.';
          break;
      case "not a valid mail address":
          result = 'Bitte geben Sie ein gültige Email-Adresse an.';
          break;
      case "Bitte füllen Sie das Formular aus.":
          break;
      default:
          result = 'Es ist ein Fehler aufgetreten.';
          break;
    }
    switch(true) {
      case patt.test(msg):
          result = 'Bitte wählen Sie einen Workshop.';
          break;
    }
  }
  return result;
}


function ValidateForm(id) {
  var formInvalid = false;
  $('#' + id + ' input').each(function() {
    if ($(this).val() === '') {
      formInvalid = true;
    }
  });
  return formInvalid;
}

$(document).ready(function(){
  // WS form
  var id = 'anmeldung_form';
  var $form = $('#' + id);

  $form.submit(function(){

    var result_label = $('#form_result');
    var data = {};
    var data_nl = $(this).serialize();
    $(this).serializeArray().map(function(x){data[x.name] = x.value;});

    var request = JSON.stringify(data);
    //console.log(request);

    var formInvalid = ValidateForm(id);
    if (formInvalid == false) {
      jQuery.ajax ({
        url: $(this).attr('action'),
        type: "POST",
        data: request,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(response){
          result = response.responseText;
          result = msg_map(result);
          result_label.html(result);
        },
        error: function(response){
          result = response.responseText;
          result = msg_map(result);
          result_label.html(result);
        }
      });

      $.post( "https://welchezukunft.org/nl.php", data_nl,  function( data ) {
        //$( ".result" ).html( data );
      });
    result_label.html(result);
    } else {
      result = 'Bitte füllen Sie das Formular aus.';
    }
    result = msg_map(result);
    result_label.html(result);
    result_label.css('display', 'block');
    return false;
  });
  // NL form
  var $form_nl = $('#nl_form');
  $form_nl.submit(function(){
    var data_nl = $(this).serialize();
    $.post( "https://welchezukunft.org/nl.php", data_nl, function( data ) {
      var nl_result_label = $( "#nl_form_result" );
      nl_result_label.html( data );
      nl_result_label.css('display', 'block');
    });
    return false;
  });
});

