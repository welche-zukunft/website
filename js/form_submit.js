var result = '';
var formInvalid = false;

function ValidateForm(id) {
  var invalid = false;
  $('#' + id + ' input').each(function() {
    if ($(this).val() === '') {
      invalid = true;
    }
  });
  //$('#' + id + ' textarea').each(function() {
  //  if ($(this).val() === '') {
  //    invalid = true;
  //  }
  //});
  return invalid;
}

$(document).ready(function(){
  // WS form
  var id = 'anmeldung_form';
  var $form = $('#' + id);

  $form.submit(function(){

    var result_label = $('#form_result');

    // force mail addresses lowercase
    var lc_email = $('#mailadresse').val().toLowerCase();
    $('#mailadresse').val(lc_email);
    var lc_email_c = $('#mailadresse_confirm').val().toLowerCase();
    $('#mailadresse_confirm').val(lc_email_c);

    var data = {};
    var data_nl = $(this).serialize();
    $(this).serializeArray().map(function(x){data[x.name] = x.value;});

    var request = JSON.stringify(data);
    //console.log(request);

    var formInvalid = ValidateForm(id);
    if (formInvalid === false) {
      result = 'data sent';
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

