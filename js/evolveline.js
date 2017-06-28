var renderer, scene, camera, controls, stats;
var nEnd = 0, nMax, nStep = 90; 
var geometry = [];
var mesh = [];
var wind = false;
var steps = 100;
var initialized = false;
var time = new Date();

var line_geometry = new THREE.BufferGeometry();
var par_geometry = new THREE.Geometry();


/* SINUS PARAMETERS */

var noise_objects = []

function noise_object() {
    this.sin_arg_global = 0;
    this.sin_arg_x = Math.random();
    this.sin_arg_y = Math.random();
    this.sin_arg_z = Math.random();
    this.a = Math.random() * 20;
    this.b = Math.random() * 20;
    this.c = Math.random() * 20;
    this.z = Math.random();
}

var sin_paras;


init();
animate(Math.random(),
	Math.random(),
	Math.random());

//INIT ---------------------------------
function init() {

	sin_paras = new noise_object();

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
	var light = new THREE.PointLight( 0xffffff, 0.2,50,0.3 );
	light.position.set( 20, 20, 0 );
	camera.add( light );
	
	// axes
	scene.add( new THREE.AxisHelper( 20 ) );

	stats = new Stats();

	container.appendChild( stats.dom );			

	var geometries = [];
	var meshes = [];

	var material = new THREE.LineBasicMaterial();

	//  create boxes

	for (var i = 0; i<10; ++i){
		geometries.push(new THREE.BoxGeometry(3, 5, 5));
		var geo = new THREE.EdgesGeometry(geometries[i]);
	
		var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2} );
		
		var wireframe = new THREE.LineSegments( geo, mat );
		wireframe.material.opacity = 0.25;
		wireframe.material.transparent = true;
		meshes.push(wireframe);
	
		meshes[i].position.set(-i*2, 0, 0);
		scene.add(meshes[i]);
	}
	

	// add image + objects
	// instantiate a loader
	var loader = new THREE.TextureLoader();
	var pics = ["timelines/numbers_web.jpg","timelines/oel_web.jpg"];
	var TEXmaterial = [];
	var plane = [];
	var IMGtexture = [];
	// load a resource
	for(i = 0; i < pics.length; i++){	
		IMGtexture[i] = loader.load(pics[i]);

		TEXmaterial[i] = new THREE.MeshPhongMaterial( {map: IMGtexture[i]} );

		plane[i] = new THREE.Mesh(new THREE.PlaneGeometry(50, 25), TEXmaterial[i]);
		plane[i].material.side = THREE.DoubleSide;

		plane[i].position.y = -5+(i*10);	
		plane[i].position.x = -20;
		plane[i].rotation.x = Math.PI / 2;
		scene.add(plane[i]);

	}
 

	//	create lines

	var par_mat = new THREE.MeshPhongMaterial( {
			color: 0x65c6f6,
			transparent: true,
			//opacity: 0.4,
			side: THREE.DoubleSide
	} );


	par_geometry.name = "linie";
	
	var positions = new Float32Array( 12 * 3 ); // 3 vertices per point
	line_geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

	var next_x = 0;
	var index = 0;

    for ( var i = 0; i < 12; i ++ ) {

    	var particle = new THREE.Mesh( new THREE.SphereGeometry(0.1), par_mat );
    	particle.position.x = positions[index++] = next_x;
    	particle.position.y = positions[index++] = (6*(Math.random()-0.5)) *  i/12;
    	particle.position.z = positions[index++] = (6*(Math.random()-0.5)) *  i/12; 
        
        next_x -= Math.random() * 3;

        scene.add( particle );

        par_geometry.vertices.push( particle.position );

    }

    var line = new THREE.Line( line_geometry, new THREE.LineBasicMaterial( { color: 0x65c6f6, opacity: 1, linewidth: 2} ) );
	line.name = "test";
    scene.add( line );
}



function animate() {

	moveBranch();

  	renderer.render(scene, camera);
	stats.update();

	requestAnimationFrame(animate);
  		
}


function moveBranch(){

  	sin_paras.sin_arg_x += 0.01;
  	sin_paras.sin_arg_y += 0.01;
  	sin_paras.sin_arg_z += 0.01;
  	sin_paras.sin_arg_global += 0.01;


  	if (Math.abs (Math.sin(sin_paras.z * sin_paras.sin_arg_global)) < 0.01){
 		sin_paras.sin_arg_x = Math.PI * Math.random();
  		sin_paras.sin_arg_y = Math.PI * Math.random();
  		sin_paras.sin_arg_z = Math.PI * Math.random();

  		sin_paras.a = Math.random() * 20;
  		sin_paras.b = Math.random() * 20;
  		sin_paras.c = Math.random() * 20;

  		z = Math.random();
  	}

  	var index = 0;

  	var random = Math.random();
	if(wind == true){
		var reposition = scene.getObjectByName("test").geometry.attributes.position.array;
		for ( var i = 0; i < 12; i ++ ) {
				
  			delta_x = (Math.random()) * Math.cos(sin_paras.z * sin_paras.sin_arg_global) * Math.cos(sin_paras.sin_arg_x *sin_paras.a) * Math.pow(i,1.6)/1000;
  			delta_y = (Math.random()) * Math.cos(sin_paras.z * sin_paras.sin_arg_global) * Math.cos(sin_paras.sin_arg_y *sin_paras.b) * Math.pow(i,1.6)/1000;
  			delta_z = (Math.random()) * Math.cos(sin_paras.z * sin_paras.sin_arg_global) * Math.cos(sin_paras.sin_arg_z *sin_paras.c) * Math.pow(i,1.6)/1000;

			par_geometry.vertices[i].x += delta_x;
			par_geometry.vertices[i].y += delta_y;
			par_geometry.vertices[i].z += delta_z;

			reposition[index] = reposition[index++] + delta_x;
			reposition[index] = reposition[index++] + delta_y;
			reposition[index] = reposition[index++] + delta_z;
			
		}
		scene.getObjectByName("test").geometry.attributes.position.needsUpdate = true; // required after the first render
	}

}





// PRESS "1" TO (UN)REVEAL POINTERs ---------------------------------
window.addEventListener( 'keydown', onKeyDown, false );
var bunch = false;

function onKeyDown(event){
	var time = new Date();

	switch ( event.keyCode ) {
	case 49:
		if(bunch == false){
			var geometries = [];
			geometries.push(new THREE.PlaneGeometry(1, 1, 5));
			var material = new THREE.MeshNormalMaterial({color: 0xff0000});
			var meshes = [];
			var badge = new THREE.Mesh(geometries[0], material);
			bunchstart(10);
			bunch = true;
		}
		else{
			bunchend(10);
			bunch = false;
		}
		break;	
	case 50:
		if(wind == false){
			steps = 100;
			wind = true;
		}
		else{
			wind = false;
		}
		break;
	}
}




function removeItem(v) {
	v.material.dispose();
	v.geometry.dispose();
	scene.remove(v);
}


