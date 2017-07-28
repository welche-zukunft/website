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
spintext.innerHTML = '<p>WELCHE ZUKUNFT?! wird geladen ...</p>';

//document.getElementById('container').appendChild(spinner_container);
document.body.appendChild(spinner_container);
spinner_container.appendChild(spinner);
spinner.appendChild(spintext);
spinner.appendChild(double_bounce1);
spinner.appendChild(double_bounce2);

