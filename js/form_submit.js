var result = 'Anmeldung fehlgeschlagen. Bitte versuchen sie es später erneut.';

function msg_map(msg) {
  var result;
  switch(msg) {
    case "success":
        result = 'Anmeldung erfolgreich. Bitte bestätigen Sie die Email, die sie in Kürze erhalten.';
        break;
    case "agb not accepted":
        result = 'Sie müssen die AGB akzeptieren.';
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
    default:
        result = 'Es ist ein Fehler aufgetreten.';
        break;
  }
  var patt = new RegExp("No message available");
  switch(true) {
    case patt.test(msg):
        result = 'Bitte wählen Sie einen Workshop.';
        break;
  }
  return result;
}

$(document).ready(function(){
  // WS form
  var $form = $('#anmeldung_form');
  $form.submit(function(){

    var data = {};
    var data_nl = $(this).serialize();
    $(this).serializeArray().map(function(x){data[x.name] = x.value;});

    var request = JSON.stringify(data);
    //console.log(request);

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

    var result_label = $('#form_result');
    result_label.html(result);
    result_label.css('display', 'block');
    return false;
  });
  // NL form
  var $form_nl = $('#nl_form');
  $form_nl.submit(function(){
    var data_nl = $(this).serialize();
    $.post( "https://welchezukunft.org/nl.php", data_nl, function( data ) {
      $( ".result" ).html( data );
    });
    return false;
  });
});

console.log($('#anmeldung_form'));

