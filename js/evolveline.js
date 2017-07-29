// States
var statistics = false;
var showWalls = true;
var showDax = true;

// switches
var contentboxes = 0;

//
var renderer, scene, camera, controls, stats;
var FOV;
var nEnd = 0, nMax, nStep = 90; 
var geometry = [];
var mesh = [];
var wind = false;
var batchescreated = false;
var steps = 100;
var timelineCount = 13;
var eventCount = 15;
var initialized = false;
var time = new Date();

//arrays for lines
var line = [];
var par_mat = [];
var line_geometry = [];
var par_geometry = [];
var particles = [];
var years = [];

// cameraProperties
var currentLookX = 0.;
var currentLookY = 0.;
var currentLookZ = -15.;
var movespeed = 0.03;

//arrays for boxes
var geometries = [];
var meshes = [];

//MOUSE POS
var mouseX = 0, mouseY = 0;
//WINDOW SIZE
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


var aspect = window.innerWidth/window.innerHeight;
if(window.innerHeight > window.innerWidth){
	aspect = window.innerHeight/window.innerWidth*2.;
}

//timeline width
var boxwidth = window.innerWidth*(0.005*(aspect/2.));
var boxheight = window.innerHeight*(0.005);
var boxdepth = 7.;

var yearmat;
var controlPlane;
var controlPlanePosition = 0;
var controlPlaneOpacity = 1.;

var startpoint;
var tutorialdiv = true;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

var platform = navigator.platform;

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
var metainfos = "./contents/database.json";

var metacontents = [];
// get meta info about workshops from json

if (Detector.webgl) {
    // Initiate function or other initializations here
	checkurl();
    get_metainformations();
} else {
    var warning = Detector.getWebGLErrorMessage();
}

window.onbeforeunload = function () {
		//10 because therwise timeline is not set active - but why?
        window.scrollTo(0,10);
}



function get_metainformations(){
	$.getJSON( metainfos, function(data){
		metacontents = JSON.parse(JSON.stringify(data));
	})
	.done(function(){
		//fill names of workshops to form
		addoptions();

		//start threejs
		init();
		animate();
		// fire once at start
		select_active();
		// contents via get in js/contentboxes.js
		// reset_ws via changeworkshop.js
		reset_ws();
		$("#spinner-container").css('display', 'none');
		if(loadWorkshopdirect == true){
			active = true;
			swapworkshop(workshopToLoad);
		}
		setTimeout(function () {
		$('#tutorial').find("span").animate({opacity:0},function(){
		if(language=="deu"){
			var tutorialtext = "Wähle einen Workshop und Scrolle vor und zurück um im Szenario zu navigieren.";
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
				tutorialtext = "Wähle einen Workshop und tappe in der oberen Hälfte deines Screens um im Szenario nach vorne und in der unteren Hälfte um zurück zu navigieren.";
		}}
		else if(language=="eng"){
			var tutorialtext = "Select a Workshop and scroll up and down to navigate through the scenario.";
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
				tutorialtext = "Select a workshop and tap in the upper half of your screen to navigate forward, and in the lower half to navigate backward through the scenario";
		}}
        $(this).text(tutorialtext)
            .animate({opacity:1});  
		});
		}, 1000);
	});
}


//INIT ---------------------------------
function init() {
	// renderer
	renderer = new THREE.WebGLRenderer({ antialias: true,logarithmicDepthBuffer: false,precision: "highp" });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );
	var distance = window.innerWidth - ( window.innerWidth * 0.5);
	if(window.innerWidth < window.innerHeight){
		distance = window.innerWidth + ( window.innerWidth * 0.5);
	}
	FOV = 2 * Math.atan( 375 / ( 2 *distance))*180 / Math.PI;

	// scene
	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2( 0x111111, 0.03 );
	// camera
	camera = new THREE.PerspectiveCamera( FOV, window.innerWidth / window.innerHeight, 1., 100 );
	camera.position.set( 0, 2, 10 );
	camera.lookAt(new THREE.Vector3(currentLookX,currentLookY,currentLookZ));
	camera.up = new THREE.Vector3(0,1,0);
	scene.add( camera ); //required, since camera has a child light


	// ambient
	scene.add( new THREE.AmbientLight( 0xffffff, 1. ) );
	
	// light
	var light = new THREE.PointLight( 0xffffff, 0.7,boxwidth,0.3 );
	light.position.set( 0, 0, 0 );
	camera.add( light );

	// axes & stats
	//scene.add( new THREE.AxisHelper( 20 ) );
	if(statistics == true){
		stats = new Stats();
		stats.showPanel( 1 );
		container.appendChild( stats.dom );		
	}
	if(showWalls == true){
		createNumberWalls();
	}
	// content stuff

	var material = new THREE.LineBasicMaterial();

	//  create boxes

	for (var i = 0; i<=10; i++){

		geometries.push(new THREE.BoxGeometry(boxwidth, boxheight, boxdepth));
		var geo = new THREE.EdgesGeometry(geometries[i]);
	
		var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1} );
		
		var wireframe = new THREE.LineSegments( geo, mat );
		wireframe.material.opacity = 0.45;
		wireframe.material.transparent = true;
		meshes.push(wireframe);
	
		meshes[i].position.set(0, 0, -i*boxdepth);
		scene.add(meshes[i]);


		var year = 2018 + i;	
		var yeartexture = createYears(year);
		yeartextures.push(yeartexture);
		yearmat = new THREE.MeshPhongMaterial({ map: yeartextures[i],specular: 0xcac6c6 });
		yearmat.side = THREE.DoubleSide;
		yearmat.alphaTest= 0.5; // if transparent is false
		yearmat.transparent= false;
		yearmat.alphaMap = yeartextures[i];
		var geometry = new THREE.PlaneGeometry( 1.2, 0.3, 1. );
	
		var plane = new THREE.Mesh( geometry, yearmat );
		plane.position.set((boxwidth/2. * -1.)+1.,(boxheight/2. * -1.)-0.2, (-i*boxdepth)+(boxdepth/2.)-0.2);
		scene.add( plane );
		} 

	//	create lines

	for ( var h = 0; h < timelineCount; h ++ ) {
		var next_z = 0;
		var index = 0;
		eventCount = metacontents[h].events.length;
		var positions = new Float32Array( eventCount * 3 ); // 3 vertices per point

		var line_particles = [];

		par_geometry.push(new THREE.Geometry());
		line_geometry.push(new THREE.BufferGeometry());
		line_geometry[h].addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
		
		par_mat.push(new THREE.MeshPhongMaterial( {
			color: metacontents[h].color,
			specular: 0x111010,
			shininess: 90,
			transparent: false
			//opacity: 0.4,
			//side: THREE.DoubleSide
		} ));
		par_mat[h].name = "color"+h.toString();
		
		var events = [];
		for ( var i = 0; i < eventCount; i ++ ) {
			
			var particle = new THREE.Mesh( new THREE.SphereGeometry(0.05), par_mat[h] );
			
			particle.position.x = positions[index++] = (boxwidth*(Math.random()-0.5)) *  i/eventCount;
			particle.position.y = positions[index++] = ((boxheight*(Math.random()-0.5)) *  i/eventCount)-(1.*  (1.-i/eventCount)); 
			particle.position.z = positions[index++] = next_z;
			
			next_z -= (Math.random() * (boxdepth*0.8)) + (boxdepth*0.2);

			scene.add( particle );
			events.push(particle);
			
			par_geometry[h].vertices.push( particle.position );
			par_geometry[h].name = "linie";
			
			noise_objects.push(new noise_object());

			
		}
		particles.push(events);
		line.push(new THREE.Line( line_geometry[h], new THREE.LineBasicMaterial( { color: metacontents[h].color, opacity: 1, linewidth: 1} ) ));
		line[h].name = "test"+h.toString();
		scene.add( line[h] );
		workshopdot_create(h , metacontents[h].color);
	}
	var startmat = new THREE.MeshPhongMaterial( {
			color: 0xffffff,
			specular: 0x111010,
			shininess: 90,
			transparent: true
			//opacity: 0.4,
			//side: THREE.DoubleSide
		} );
	startpoint = new THREE.Mesh( new THREE.SphereGeometry(0.07), startmat);
	startpoint.position.set(0.,-1.,0.);
	scene.add(startpoint);
	
	workshopdot_deselect(timelineCount);
	
	window.addEventListener( 'resize', onWindowResize, false );

	var geometry2 = new THREE.PlaneGeometry( 1., 1., 1. );	
			
	var splitmat = new THREE.MeshBasicMaterial({ 
		color:0xff0000,
		//specular: 0xcac6c6,
		transparent: true,
		opacity: controlPlaneOpacity,
		//shininess: 10
		});
	controlPlane = new THREE.Mesh(geometry2,splitmat);
	controlPlane.position.set(0,0, (controlPlanePosition*boxdepth)+(boxdepth/2.));
	controlPlane.scale.set(boxwidth,boxheight,1.);
	scene.add( controlPlane );
	shiftControlPlane();
	if(showDax==true) drawdax();	
}




function shiftControlPlane(){	
	controlPlane.material.opacity = 1.;
	var interval = setInterval(function(){
	if(controlPlanePosition > 10){
		clearInterval(interval);
		controlPlane.material.opacity = (0.);
		controlPlanePosition = 0;	
		return;
	}
	controlPlanePosition = (controlPlanePosition + 1);
	controlPlane.position.set(0,0,(-1.*controlPlanePosition*boxdepth)+(boxdepth/2.));
	}, 80);
}


function swapworkshop(num){
	shiftControlPlane();
	removePins();
	drawPin(num,metacontents[num].events.length);
	for(var i = 0; i < timelineCount; i++){
		if(i == num){
			scene.getObjectByName("test"+i.toString()).material.color.setHex(metacontents[i].color.replace(/#/g , "0x"));				
			scene.getObjectByName("test"+i.toString()).material.opacity = 1.;
			scene.getObjectByName("test"+i.toString()).material.transparent = false;
			par_mat[i].color.setHex(metacontents[i].color.replace(/#/g , "0x"));
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
			scene.getObjectByName("test"+i.toString()).material.color.setHex(metacontents[i].color.replace(/#/g , "0x"));				
			scene.getObjectByName("test"+i.toString()).material.opacity = 1.;
			scene.getObjectByName("test"+i.toString()).material.transparent = false;
			par_mat[i].color.setHex(metacontents[i].color.replace(/#/g , "0x"));
			for(var j = 0; j < particles[i].length; j++){
				particles[i][j].scale.set( 1., 1., 1. );
			}
		}
		workshop_delete_all_events();
		//colors
		controlPlane.material.color.setHex(0xffffff);
		$("#workshopmenu").css("background", "black");
		$("#ws_menu_title").css("color","white");
		$("#ws_menu_subtitle").css("color","white");
		$("#burger_icon").css("color","white");
		$("#workshopmenu").css("color","white");
		shiftControlPlane();
}
var shifter = 0.;

function animate() {
	
	if(showWalls == true) {
		changeuniforms();
	}
	
	if(showDax==true){
		for(i = 0; i < daxes.length; i++){
			shiftdax(i);
		}
	}
	
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
	
	camera.position.x += ( mouseX - camera.position.x ) * movespeed;
	camera.position.y += ( - mouseY - camera.position.y ) * movespeed;
	//camera.position.z = (Math.cos(camera.position.x)*2.)+5;
	
	if (typeof current_workshop  !== 'undefined' &&  batchescreated == true && setOverview == false) {
		var newz = par_geometry[current_workshop.id].vertices[campos].z;
		//console.log(allpins[campos+1]);
		var newx = (allpincontents[campos].geometry.vertices[0].x +allpincontents[campos].geometry.vertices[2].x)/2.;
		var newy = (allpincontents[campos].geometry.vertices[0].y + allpincontents[campos].geometry.vertices[2].y)/2.;
		//console.log(newx,newy,newz-5);
		camera.position.x += (newx - camera.position.x) * movespeed;
		camera.position.y += (newy - camera.position.y) * movespeed;
		camera.position.z += ((newz + 5.) - camera.position.z) * movespeed;
		currentLookX += ( newx - currentLookX) * movespeed;
		currentLookY += ( newy - currentLookY) * movespeed;
		currentLookZ += ( newz  - currentLookZ) * movespeed;
		camera.lookAt(new THREE.Vector3(currentLookX,currentLookY,currentLookZ));
	}
	
	if(setOverview == true){
		camera.position.x += (0. - camera.position.x) * movespeed;
		camera.position.y += (2. - camera.position.y) * movespeed;
		camera.position.z += (15. - camera.position.z) * movespeed;
		currentLookX += ( 0. - currentLookX) * movespeed;
		currentLookY += ( -1. - currentLookY) * movespeed;
		currentLookZ += ( -10. - currentLookZ) * movespeed;
		camera.lookAt(new THREE.Vector3(currentLookX,currentLookY,currentLookZ));
	}

	requestAnimationFrame(animate);
  	renderer.render(scene, camera);
	if(statistics == true){
		stats.update();
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
		mouseY = ( event.clientY - windowHalfY  )*0.008;
}

	
function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

var camposIntern = -1;
var campos = camposIntern + 1;
var setOverview = true;

window.addEventListener('wheel', throttle(function movecamera(e){
	if(active == true && wsIsOpen == false && current_workshop_id != 13){

	if(platform == "MacIntel"){	
		if(e.deltaY == -1) camposIntern += 1;
		if(e.deltaY == 1) camposIntern -= 1;		
	}
	else {
		if(e.deltaY < 0) camposIntern += 1;
		if(e.deltaY > 0) camposIntern -= 1;			
	}
	
	//delete tutorial on first zoom in
	if(tutorialdiv == true && camposIntern >= 0){
		tutorialdiv = false;
		$(document).ready(function(){
		setTimeout(function () {
		$('#tutorial').find("span").animate({opacity:1},function(){$(this).animate({opacity:0});  
		});
		}, 200);
		$('#tutorial').addClass('tutorial_unanimated');
		$('#tutorial').removeClass('tutorialanimation');
		$('#tutorial').remove();
		});
	}
	
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
},500));


function throttle(func, interval) {
    var lastCall = 0;
    return function() {
        var now = Date.now();
		//console.log("throt");
        if (lastCall + interval < now) {
            lastCall = now;
            return func.apply(this, arguments);
        }
    };
}
