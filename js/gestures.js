if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
 

var myElement = document.getElementById('container');
var currentscale = 1;

var mc = new Hammer(myElement);
mc.get('pinch').set({
        enable: true
    });

mc.on("pinch", function(ev){
	var scaler = ev.scale;
	currentscale = currentscale * scaler;
	if(currentscale <= 0.7) currentscale = 0.7;
	if(currentscale >= 1.4) currentscale = 1.4;
	camera.fov = FOV * scale(currentscale);
	camera.updateProjectionMatrix();
});

mc.on("tap", function(ev) {
	if(active == true && wsIsOpen == false){
		
		if(ev.pointers[0].layerY > window.innerHeight - (window.innerHeight*0.3)){
		camposIntern -= 1;
		}
		else{camposIntern += 1;}
		if(camposIntern >=allpins.length-2) camposIntern = allpins.length-2;
			

		if(camposIntern < -1 ) {
			camposIntern = -1;
			if(setOverview == false){
				setOverview = true;
				}
		}
		if(setOverview == true && camposIntern > -1 && batchescreated == true){
			setOverview = false;
			camposIntern = -1;
		}
		campos = camposIntern + 1;
	}
});




mc.on("panright panleft", function(ev) {
	mouseX = ( ev.pointers[0].layerX- windowHalfY  )*0.008;
});

function createRemap(inMin, inMax, outMin, outMax) {
    return function remaper(x) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
}

var scale = createRemap(0.,1.,1.2,0.8);

}