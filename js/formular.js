function addoptions(){
	for(var i = 0; i < metacontents.length; i++){
		$("#wunsch_ws").append($('<option></option>').attr("value", i).text(metacontents[i].title[0] + ' - ' + metacontents[i].title[1] ));
	}
	$('#sprache').hide();
	$('#anmeldeinfos').hide(); 
}

 $(function() {
        $('#wunsch_ws').change(function(){
			if($(this).val() == -1){
				$('#sprache').show();
			}
			else {$('#sprache').hide();}
        });
    });
	
$( "#signup" ).on( "click", function() {
 $('#anmeldeinfos').hide(); 
 $('#anmeldeformular').show();
 $('#getinfos').css('background-color', '#f1f1f1');
 $('#signup').css('background-color', '#e1e5e6');
});

$( "#getinfos" ).on( "click", function() {
  $('#anmeldeformular').hide();
  $('#anmeldeinfos').show();
  $('#getinfos').css('background-color', '#e1e5e6');
	$('#signup').css('background-color','#f1f1f1' );
});