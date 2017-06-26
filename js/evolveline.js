var renderer, scene, camera, controls, stats;
var nEnd = 0, nMax, nStep = 90; 
var geometry = [];
var mesh = [];

init();
animate();

//INIT ---------------------------------
function init() {

	// renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	// scene
	scene = new THREE.Scene();
	
	// camera
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 15, 5, 15 );
	camera.up = new THREE.Vector3(0,0,1);
	scene.add( camera ); //required, since camera has a child light
	// controls
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.minDistance = 5;
	controls.maxDistance = 20;
	// ambient
	scene.add( new THREE.AmbientLight( 0xffffff, 0.4 ) );
	
	// light
	var light = new THREE.PointLight( 0xffffff, 0.5 );
	light.position.set( 20, 20, 0 );
	camera.add( light );
	
	// axes
	scene.add( new THREE.AxisHelper( 20 ) );

	stats = new Stats();
	container.appendChild( stats.dom );			

}

// PRESS "1" TO (UN)REVEAL POINTERs ---------------------------------
window.addEventListener( 'keydown', onKeyDown, false );
var bunch = false;
function onKeyDown(event){
console.log
	switch ( event.keyCode ) {
	case 49:
		if(bunch == false){
			bunchstart(10);
			bunch = true;
		}
		else{
			bunchend(10);
			bunch = false;
		}
		break;	
	}
}

function bunchstart(num){
	for(i = 0; i < num; i++){
		addit(Math.random()*2.,(Math.random()*4.)-2.,Math.random()*10,0+(100*i));
	}
}

function bunchend(num){
	for(i = 0; i < num; i++){
		ungrow(i,0+(100*i));
	}
	// SHOULD BE DONE WHEN TWEENS READY NOT YET
	mesh = [];
	geometry = [];
}

// ADD LINES ---------------------------------
function addit(x,y,z,d){
// points
	var points = [new THREE.Vector3(0,0,0)];
	for ( var i = 1; i < 2; i ++ ) {
		points.push( new THREE.Vector3( x+(i*4), y,z ));
	}
	// path
	var path = new THREE.CatmullRomCurve3( points );
	// params
	var pathSegments = 120;
	var tubeRadius = 0.07;
	var radiusSegments = 8;
	var closed = false;
	// geometry
	var i = geometry.length;
	geometry[i] = new THREE.TubeGeometry( path, pathSegments, tubeRadius, radiusSegments, closed );
	// to buffer goemetry
	geometry[i] = new THREE.BufferGeometry().fromGeometry( geometry[i] );
	nMax = geometry[i].attributes.position.count;
	// material
	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		side: THREE.DoubleSide
	} );
	// mesh
	mesh[i] = new THREE.Mesh( geometry[i], material );
	scene.add( mesh[i] );
	mesh[i].geometry.setDrawRange( 0, 0 );
	grow(mesh[i],d);
}

function grow(mesh,d){
	var from = {
		w: 0
	};
	var to = {
		w: nMax
	};
	var tween = new TWEEN.Tween(from)
		.delay(d)
		.to(to, 250)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onUpdate(function () {
		mesh.geometry.setDrawRange( 0, this.w );
	})
		.onComplete(function () {
	})
		.start();
}	

// REMOVE LINES ---------------------------------
function ungrow(num,d){
	var meshy = mesh[num];
	var from = {
		w: nMax
	};
	var to = {
		w: 0
	};
	var tween = new TWEEN.Tween(from)
		.delay(d)
		.to(to, 250)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onUpdate(function () {
		meshy.geometry.setDrawRange( 0, this.w );
	})
		.onComplete(function () {
		removeItem(meshy);
	})
		.start();
}		

function removeItem(v) {
		v.material.dispose();
		v.geometry.dispose();
		scene.remove(v);
}

// ANIMATE ---------------------------------
function animate() {
	requestAnimationFrame( animate );
	TWEEN.update();
	renderer.render( scene, camera );
	stats.update();
}

