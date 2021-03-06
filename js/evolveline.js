// States

var STATE = { NONE: - 1, ROTATE: 0 };
var state = STATE.NONE;

// switches
var contentboxes = 0;

//
var renderer, scene, camera, controls, stats;
var nEnd = 0, nMax, nStep = 90; 
var geometry = [];
var mesh = [];
var wind = false;
var steps = 100;
var timelineCount = 12;
var initialized = false;
var time = new Date();

//arrays for lines
var line = [];
var par_mat = [];
var line_geometry = [];
var par_geometry = [];
var particles = [];

var rgb = [];
//for(var i = 0; i < timelineCount; i++)
//    rgb.push('#' + Math.floor(Math.random() * 16777215).toString(16));

rgb = ['#fcf197','#fbb100','#f87676','#ea373d','#b91a2e','#cf3571','#b8d8d3','#72c2a9','#4dac5b','#add396','#91b8df','#0092c3','#01559e'];

//arrays for boxes
var geometries = [];
var meshes = [];

//MOUSE POS
var mouseX = 0, mouseY = 0;
//WINDOW SIZE
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


//timeline width
var boxwidth = window.innerWidth*0.01;
var boxheight = window.innerHeight*0.005;
var boxdepth = 7.;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );


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
	scene.fog = new THREE.FogExp2( 0x000000, 0.015 );
	// camera
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 5 );
	camera.up = new THREE.Vector3(0,1,0);
	scene.add( camera ); //required, since camera has a child light

	// ambient
	scene.add( new THREE.AmbientLight( 0xffffff, 0.4 ) );
	
	// light
	var light = new THREE.PointLight( 0xffffff, 0.2,50,0.3 );
	light.position.set( 20, 20, 0 );
	camera.add( light );
	
	// axes & stats
	//scene.add( new THREE.AxisHelper( 20 ) );
	stats = new Stats();
	stats.showPanel( 1 );
	container.appendChild( stats.dom );			

	// content stuff

	var material = new THREE.LineBasicMaterial();

	//  create boxes

	for (var i = 0; i<10; ++i){
		geometries.push(new THREE.BoxGeometry(boxwidth, boxheight, boxdepth));
		var geo = new THREE.EdgesGeometry(geometries[i]);
	
		var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2} );
		
		var wireframe = new THREE.LineSegments( geo, mat );
		wireframe.material.opacity = 0.25;
		wireframe.material.transparent = true;
		meshes.push(wireframe);
	
		meshes[i].position.set(0, 0, -i*boxdepth);
		scene.add(meshes[i]);
	}
	

	// add image + objects
	// instantiate a loader
	/*var loader = new THREE.TextureLoader();
	var pics = ["timelines/numbers_web.jpg","timelines/oel_web.jpg"];
	var TEXmaterial = [];
	var plane = [];
	var IMGtexture = [];
	// load a resource
	for(i = 0; i < pics.length; i++){	
		IMGtexture[i] = loader.load(pics[i]);

		TEXmaterial[i] = new THREE.MeshPhongMaterial( {map: IMGtexture[i]} );

		plane[i] = new THREE.Mesh(new THREE.PlaneGeometry(90, 65), TEXmaterial[i]);
		plane[i].material.side = THREE.DoubleSide;

		plane[i].position.y = 0;
		plane[i].position.x = -15+(i*30);	

		plane[i].rotation.y = Math.PI / 2;
		scene.add(plane[i]);

	}*/
 

	//	create lines

	for ( var h = 0; h < timelineCount; h ++ ) {
		var next_z = 0;
		var index = 0;
		var positions = new Float32Array( 12 * 3 ); // 3 vertices per point

		var line_particles = [];

		par_geometry.push(new THREE.Geometry());
		line_geometry.push(new THREE.BufferGeometry());
		line_geometry[h].addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
		
		par_mat.push(new THREE.MeshPhongMaterial( {
			color: rgb[h],
			transparent: true,
			//opacity: 0.4,
			side: THREE.DoubleSide
		} ));
		par_mat[h].name = "color"+h.toString();
		
		workshopdot_create(h , rgb[h]);
		
		var events = [];
		
		for ( var i = 0; i < 12; i ++ ) {
			
			var particle = new THREE.Mesh( new THREE.SphereGeometry(0.05), par_mat[h] );
			
			particle.position.x = positions[index++] = (boxwidth*(Math.random()-0.5)) *  i/12;
			particle.position.y = positions[index++] = ((boxheight*(Math.random()-0.5)) *  i/12)-(1.*  (1.-i/12)); 
			particle.position.z = positions[index++] = next_z;
			
			next_z -= Math.random() * boxdepth;
			//particle.position.normalize();
			//particle.position.multiplyScalar( Math.random() * 10 + 450 );


			scene.add( particle );
			events.push(particle);

			par_geometry[h].vertices.push( particle.position );
			par_geometry[h].name = "linie";
			//console.log("Vertice x : " + par_geometry.vertices[i].x);
			//console.log("Vertice y : " + par_geometry.vertices[i].y);
			noise_objects.push(new noise_object());
			//console.log(noise_objects[i]);
		}
		particles.push(events);
		line.push(new THREE.Line( line_geometry[h], new THREE.LineBasicMaterial( { color: rgb[h], opacity: 1, linewidth: 4} ) ));
		line[h].name = "test"+h.toString();
		scene.add( line[h] );
	}
	workshopdot_deselect(timelineCount);
	createNumberWalls();
	window.addEventListener( 'resize', onWindowResize, false );
}


function swapworkshop(num){
	//console.log(num);
	for(var i = 0; i < timelineCount; i++){
		if(i == num){
			scene.getObjectByName("test"+i.toString()).material.color.setHex(rgb[i].replace(/#/g , "0x"));				
			scene.getObjectByName("test"+i.toString()).material.opacity = 1.;
			scene.getObjectByName("test"+i.toString()).material.transparent = false;
			par_mat[i].color.setHex(rgb[i].replace(/#/g , "0x"));
			for(var j = 0; j < particles[i].length; j++){
				particles[i][j].scale.set( 2., 2., 2. );
			}
		}
		else {
			scene.getObjectByName("test"+i.toString()).material.color.setHex(0xd3d3d3);
			scene.getObjectByName("test"+i.toString()).material.opacity = 0.3;
			scene.getObjectByName("test"+i.toString()).material.transparent = true;
			par_mat[i].color.setHex( 0xd3d3d3);
			for(var j = 0; j < particles[i].length; j++){
				particles[i][j].scale.set( 1., 1., 1. );
				}
			}	
	}
	get_workshop_contentboxes(num);
}
	
function deselectworkshop(){
	for(var i = 0; i < timelineCount; i++){
			scene.getObjectByName("test"+i.toString()).material.color.setHex(rgb[i].replace(/#/g , "0x"));				
			scene.getObjectByName("test"+i.toString()).material.opacity = 1.;
			scene.getObjectByName("test"+i.toString()).material.transparent = false;
			par_mat[i].color.setHex(rgb[i].replace(/#/g , "0x"));
			for(var j = 0; j < particles[i].length; j++){
				particles[i][j].scale.set( 1., 1., 1. );
			}
		}
		workshop_delete_all_events();
	
}


function animate() {

	//if(current_lines_group.children.length > 0) {
	//	if(active == false) {
	//		flush_boxes();
	//	}
	//}

	if(wind == true){
		console.log("wind");
		for (var i = 0; i<12; i++){
			moveBranch(i);
		}
	}
	
	requestAnimationFrame(animate);

	
	changeuniforms();
	// contentboxes
	// ???
	var current_workshop = workshops[current_workshop_id];

	//console.log("### Current Workshop");
	//console.log(current_workshop);
	if (typeof current_workshop  !== 'undefined') {
		for (var i = 0; i < current_workshop.boxes.length; i++){
			//console.log("change box lines");
			var box = current_workshop.boxes[i];
			update_box_position(box);
		}
	}
	
	camera.position.x += ( mouseX - camera.position.x ) * .02;
	camera.position.y += ( - mouseY - camera.position.y ) * .02;
	camera.position.z = (Math.cos(camera.position.x)*2.)+5;
	
	var looky = new THREE.Vector3(scene.position.x,scene.position.y,scene.position.z + (5.-camera.position.z * 0.005)*-1.);
	camera.lookAt(looky);
	
  	renderer.render(scene, camera);
	stats.update();
}


function moveBranch(j){
	//console.log(noise_objects[j]);

  	noise_objects[j].sin_arg_x += 0.01;
  	noise_objects[j].sin_arg_y += 0.01;
  	noise_objects[j].sin_arg_z += 0.01;
  	noise_objects[j].sin_arg_global += 0.01;


  	if (Math.abs (Math.sin(noise_objects[j].z * noise_objects[j].sin_arg_global)) < 0.01){
 		noise_objects[j].sin_arg_x = Math.PI * Math.random();
  		noise_objects[j].sin_arg_y = Math.PI * Math.random();
  		noise_objects[j].sin_arg_z = Math.PI * Math.random();

  		noise_objects[j].a = Math.random() * 20;
  		noise_objects[j].b = Math.random() * 20;
  		noise_objects[j].c = Math.random() * 20;

  		z = Math.random();
  	}

  	var index = 0;

  	var random = Math.random();
	if(wind == true){
		var reposition = scene.getObjectByName("test"+j).geometry.attributes.position.array;
		for ( var i = 0; i < 12; i ++ ) {
				
  			delta_x = (Math.random()) * Math.cos(noise_objects[j].z * noise_objects[j].sin_arg_global) * Math.cos(noise_objects[j].sin_arg_x *noise_objects[j].a) * Math.pow(i,1.6)/1000;
  			delta_y = (Math.random()) * Math.cos(noise_objects[j].z * noise_objects[j].sin_arg_global) * Math.cos(noise_objects[j].sin_arg_y *noise_objects[j].b) * Math.pow(i,1.6)/1000;
  			delta_z = (Math.random()) * Math.cos(noise_objects[j].z * noise_objects[j].sin_arg_global) * Math.cos(noise_objects[j].sin_arg_z *noise_objects[j].c) * Math.pow(i,1.6)/1000;

			par_geometry[j].vertices[i].x += delta_x;
			par_geometry[j].vertices[i].y += delta_y;
			par_geometry[j].vertices[i].z += delta_z;

			reposition[index] = reposition[index++] + delta_x;
			reposition[index] = reposition[index++] + delta_y;
			reposition[index] = reposition[index++] + delta_z;
			
		}
		scene.getObjectByName("test"+j).geometry.attributes.position.needsUpdate = true; // required after the first render
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
	// 
	}
}




function removeItem(v) {
	v.material.dispose();
	v.geometry.dispose();
	scene.remove(v);
}

function onDocumentMouseMove(event) {
		//console.log(event.clientX,event.clientY);
		mouseX = ( event.clientX - windowHalfX )*0.005;
		mouseY = ( event.clientY - window.innerHeight  )*0.003;
}

function onMouseDown(event){
	if(event.button == 0){
		state = STATE.ROTATE;
	};
}

function onMouseUp(event){
	if(event.button == 0){
		state = STATE.NONE;
	};
}
	
function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
