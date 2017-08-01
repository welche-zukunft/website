var ws_name = ["workshop-oekonomie-1",
"workshop-oekonomie-2",
"workshop-oekonomie-3",
"workshop-oekonomie-4",
"workshop-rechtundgesetz",
"workshop-risikomanagement",
"workshop-energysupply",
"workshop-wetter",
"workshop-geopolitics",
"workshop-arbeit",
"workshop-identitaeten",
"workshop-eliteunddemokratie",
"workshop-agriculturaleconomy",
"workshop-olympisch"];

function ws_option_check(response,ajax) {
	var ws = ajax.indexValue;
	var ws_option = $('#wsoption' + ws );
	result = response.responseText;
	if ( result == "free" || result == "full" ) {
		status = msg_map(result);
		var wstext = ws_option.text();
		var wstext = ws_option.text() + status;
		ws_option.text(wstext);
	}
}

function addoptions(){
	for(var i = 0; i < metacontents.length; i++){
		var j = i + 1;
		var status = 'free';
		$("#wunsch_ws").append($('<option id="wsoption' + j + '"></option>').attr("value", j).text(metacontents[i].title[0] + ' - ' + metacontents[i].title[1] ));
		request = JSON.stringify(j);
		jQuery.ajax ({
			indexValue: j,
			url: 'https://welchezukunft.org/isfull/',
			type: "POST",
			data: request,
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function(response){
				ws_option_check(response,this);
			},
			error: function(response){
				ws_option_check(response,this);
			}
		});
	}
	$('#sprache').hide();
	//deselect rider 2 & 3 in anmeldung
	$('#anmeldeinfos').hide(); 
	$('#newsletter').hide(); 
	$('#agbs').hide();
	$('#impressumtext').hide();
	
	var headlines = $( "#workshopthemen" ).find( "h3" );
	for(i = 0; i < headlines.length; i++){
		headlines[i].style.color = metacontents[i].color;
	}
	
}

 $(function() {
        $('#wunsch_ws').change(function(){
			var ws_num = $(this).val();
			$("#list").val(ws_name[ws_num - 1]);
			if(ws_num == 14){
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


function showagbs(show){
	if(show ==true)	$('#agbs').show();
	if(show ==false) $('#agbs').hide();
}
function showimpressum(show){
	if(show ==true)	$('#impressumtext').show();
	if(show ==false) $('#impressumtext').hide();
}



