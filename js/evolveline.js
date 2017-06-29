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

var rgb = [];
for(var i = 0; i < timelineCount; i++)
    rgb.push('#' + Math.floor(Math.random() * 16777215).toString(16));

//arrays for boxes
var geometries = [];
var meshes = [];


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

// contentboxes stuff
var content_group = new THREE.Group();
var contentboxes_first_setup = 1;
function contentboxes_obj_setup() {
	if ( contentboxes_first_setup == 1 ) {
		add_sphere("white");
		// content_line_draw(sObj_pos,dObj_pos,color)
		content_line_draw(content_sObj.position,content_dObj_pos,"fuchsia");
		contentboxes_first_setup = 0;
	}
}

//

init();
animate(Math.random(),
	Math.random(),
	Math.random());

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
	var light = new THREE.PointLight( 0xffffff, 0.2,50,0.3 );
	light.position.set( 20, 20, 0 );
	camera.add( light );
	
	// axes & stats
	scene.add( new THREE.AxisHelper( 20 ) );
	stats = new Stats();
	stats.showPanel( 1 );
	container.appendChild( stats.dom );			

	// content stuff

	if ( contentboxes == 1 ) {
		contentboxes_obj_setup();
	}

	//

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

	for ( var h = 0; h < timelineCount; h ++ ) {
		var next_x = 0;
		var index = 0;
		var positions = new Float32Array( 12 * 3 ); // 3 vertices per point		
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
		
		for ( var i = 0; i < 12; i ++ ) {
			
			var particle = new THREE.Mesh( new THREE.SphereGeometry(0.1), par_mat[h] );
			particle.position.x = positions[index++] = next_x;
			particle.position.y = positions[index++] = (6*(Math.random()-0.5)) *  i/12;
			particle.position.z = positions[index++] = (6*(Math.random()-0.5)) *  i/12; 
			
			next_x -= Math.random() * 3;
			//particle.position.normalize();
			//particle.position.multiplyScalar( Math.random() * 10 + 450 );


			scene.add( particle );

			par_geometry[h].vertices.push( particle.position );
			par_geometry[h].name = "linie";
			//console.log("Vertice x : " + par_geometry.vertices[i].x);
			//console.log("Vertice y : " + par_geometry.vertices[i].y);
			noise_objects.push(new noise_object());
			console.log(noise_objects[i]);

		}
	

    line.push(new THREE.Line( line_geometry[h], new THREE.LineBasicMaterial( { color: rgb[h], opacity: 1, linewidth: 2} ) ));
	line[h].name = "test"+h.toString();
    scene.add( line[h] );
	}
	
	
}


	function swapworkshop(num){
		console.log(num);
		
		for(var i = 0; i < timelineCount; i++){

			if(i == num){
				scene.getObjectByName("test"+i.toString()).material.color.setHex(rgb[i].replace(/#/g , "0x"));
				console.log(rgb[i]);
				par_mat[i].color.setHex( rgb[i] );
			}
			else {
				scene.getObjectByName("test"+i.toString()).material.color.setHex(0xd3d3d3);
				par_mat[i].color.setHex( 0xd3d3d3);
			}
			
		}
	}


function animate() {

	for (var i = 0; i<12; i++){
		moveBranch(i);
	}

	requestAnimationFrame(animate);

	if ( contentboxes == 1 ) {
		content_line_pos();
	}

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
	// b
	case 66:
		if ( contentboxes == 1 ) {
			contentboxes = 0;
			scene.remove(content_group);
			//visibilty_toggle(content_group);
			contentbox_delete_all();
		}
		else {
			contentbox_create_all();
			contentboxes_obj_setup();
			//visibilty_toggle(content_group);
			scene.add(content_group);
			contentboxes = 1;
		}
		break;
	}
}




function removeItem(v) {
	v.material.dispose();
	v.geometry.dispose();
	scene.remove(v);
}


