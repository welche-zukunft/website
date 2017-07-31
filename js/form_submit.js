var result = 'Anmeldung fehlgeschlagen. Bitte versuchen sie es später erneut.';

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
        result = response;
      }
    });

    $.post( "https://welchezukunft.org/nl.php", data_nl,  function( data ) {
      //$( ".result" ).html( data );
    });

    var result_label = $('#form_result');
    //result_label.html(result);
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

