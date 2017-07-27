var result = 'Anmeldung fehlgeschlagen. Bitte versuchen sie es später erneut.';

$(document).ready(function(){
  var $form = $('#anmeldung_form');
  $form.submit(function(){
    $.post($(this).attr('action'), $(this).serialize(), function(response){
      result = response;
    },'json');
    var result_label = $('#form_result');
    result_label.html(result);
    result_label.css('display', 'block');
    return false;
  });
});

console.log($('#anmeldung_form'));

