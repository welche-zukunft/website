var spinner_container = document.createElement( 'div' );
var spinner = document.createElement( 'div' );
var spintext = document.createElement( 'div' );
var double_bounce1 = document.createElement( 'div' );
var double_bounce2 = document.createElement( 'div' );
spinner_container.id = 'spinner-container';
spinner.id = 'spinner';
spintext.id = 'spintext';
double_bounce1.id = 'double_bounce1';
double_bounce2.id = 'double_bounce2';
spintext.className = 'spintext';
double_bounce1.className = 'double-bounce1';
double_bounce2.className = 'double-bounce2';
spintext.innerHTML = '<p>loading WELCHE ZUKUNFT?! ...</p>';

//document.getElementById('container').appendChild(spinner_container);
document.body.appendChild(spinner_container);
spinner_container.appendChild(spinner);
spinner.appendChild(spintext);
spinner.appendChild(double_bounce1);
spinner.appendChild(double_bounce2);



function nowebgl(){
	$( "#double_bounce1" ).remove();
	$( "#double_bounce2" ).remove();
	$( "#spintext" ).empty();
	var error = document.createElement( 'div' );
	error.id = 'error';
	spinner_container.appendChild(error);
	//error.innerHTML = '<p> Ihr Browser unterstützt kein WebGL<br>Diese Seite benötigt WebGL und einen modernen Browser.<br>Bitte schalten sie dieses Feature in ihrem Browser an oder laden sie eine neuere Version ihres Browsers herunter.<br> Vielen Dank!</p><hr><p> Your browser does not support WebGL<br>This site requires WebGL  and a modern browser. <br>Please activate this feature in your browser or update your browser to the most recent version. <br> Thank you very much.</p>';
	error.innerHTML = '<p> Ihr Browser unterstützt kein WebGL<br>Diese Seite benötigt WebGL und einen modernen Browser.<br>Bitte schalten sie dieses Feature in ihrem Browser an oder laden sie eine neuere Version ihres Browsers herunter.<br> Vielen Dank!</p><p>Wenn sie die Seite dennoch laden möchten klicken sie bitte <a href="#" onclick="startwithoutwebgl();">hier</a></p><hr><p> Your browser does not support WebGL<br>This site requires WebGL  and a modern browser. <br>Please activate this feature in your browser or update your browser to the most recent version. <br> Thank you very much.</p><p>Should you prefer to view this site in a reduced version, click <a href="#" onclick="startwithoutwebgl();">here</a></p>';
}

