
var daxes = [];
var daxesgeoms = [];
var daxspeeds = [];
var MAX_POINTS = 500;
var drawCount =[];


function drawdax(){
	var material = new THREE.LineBasicMaterial( { color: 0xffffff } );
	for(i=0;i<2;i++){
	// geometry
	var dax = new THREE.BufferGeometry();

	// attributes
	var positions = new Float32Array( MAX_POINTS * 3 ); 
	dax.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

	// draw range
	drawCount[i] = 0; 
	dax.setDrawRange( 0, drawCount[i] );
	
	// line
	line = new THREE.Line( dax,  material );
	//daxesgeoms.push(dax);
	daxes.push(line);
	scene.add( line );
	
	recalculateDax(daxes.length-1);
	}
}

function recalculateDax(i){
	positions = daxes[i].geometry.attributes.position.array;

	var x = y = z = index = 0;
	var increment = 0.;

	for ( var j = 0, l = MAX_POINTS; j < l; j ++ ) {

    positions[ index ++ ] = x;
    positions[ index ++ ] = y;
    positions[ index ++ ] = z;

	increment += ( Math.random() - 0.5 );
    x = boxwidth * -1. + (boxwidth*2)*i;
    y = ( Math.random() - 0.5 ) + increment;
    z += ( Math.random() ) * -1;
	}
	daxspeeds[i] = Math.random() * 0.5;
}

function shiftdax(i){
	drawCount[i] += daxspeeds[i];
	if(drawCount[i] >= 500){
			drawCount[i] = 0;
			recalculateDax(i);
		}
	var drawEnd = drawCount[i] + 20;
	if(drawEnd >= 500) drawEnd = 500;
	daxes[i].geometry.setDrawRange( Math.floor(drawCount[i]), Math.floor(drawEnd) );
}