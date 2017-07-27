function addoptions(){
	for(var i = 0; i < metacontents.length; i++){
		$("#wunsch_ws").append($('<option></option>').attr("value", i).text(metacontents[i].title[0] + ' - ' + metacontents[i].title[1] ));
	}
	$('#sprache').hide();
	//deselect rider 2 & 3 in anmeldung
	$('#anmeldeinfos').hide(); 
	$('#newsletter').hide(); 
}

 $(function() {
        $('#wunsch_ws').change(function(){
			if($(this).val() == 14){
				$('#sprache').show();
			}
			else {$('#sprache').hide();}
        });
    });
	
$( "#signup" ).on( "click", function() {
 $('#anmeldeformular').show();
 $('#anmeldeinfos').hide(); 
 $('#newsletter').hide(); 
 $('#signup').css('background-color', '#e1e5e6');
 $('#getinfos').css('background-color', '#f1f1f1');
 $('#getnews').css('background-color', '#f1f1f1');

});

$( "#getinfos" ).on( "click", function() {
  $('#anmeldeinfos').show();
  $('#anmeldeformular').hide();
  $('#newsletter').hide(); 
  $('#getinfos').css('background-color', '#e1e5e6');
  $('#signup').css('background-color','#f1f1f1' );
  $('#getnews').css('background-color','#f1f1f1' );
});

$( "#getnews" ).on( "click", function() {
  $('#newsletter').show();
  $('#anmeldeinfos').hide(); 
  $('#anmeldeformular').hide();
  $('#newletter').show();
  $('#getnews').css('background-color', '#e1e5e6');
  $('#signup').css('background-color','#f1f1f1' );
  $('#getinfos').css('background-color','#f1f1f1' );
});






