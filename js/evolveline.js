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

	var geometries = [];
	var meshes = [];

	var material = new THREE.LineBasicMaterial();

	//  create boxes

	for (var i = 0; i<10; ++i){
		geometries.push(new THREE.BoxGeometry(3, 5, 5));
		var geo = new THREE.EdgesGeometry(geometries[i]);
		var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
		var wireframe = new THREE.LineSegments( geo, mat );

		meshes.push(wireframe);
		meshes[i].position.set(-i*2, 0, 0);
		scene.add(meshes[i]);
	}


	//	create lines

	var par_mat = new THREE.MeshPhongMaterial( {
			color: 0x65c6f6,
			transparent: true,
			//opacity: 0.4,
			side: THREE.DoubleSide
	} );

	var line_geometry = new THREE.BufferGeometry();
	var par_geometry = new THREE.Geometry();

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
        //particle.position.normalize();
        //particle.position.multiplyScalar( Math.random() * 10 + 450 );

        scene.add( particle );

        par_geometry.vertices.push( particle.position );
        //console.log("Vertice x : " + par_geometry.vertices[i].x);
        //console.log("Vertice y : " + par_geometry.vertices[i].y);

    }

    var line = new THREE.Line( line_geometry, new THREE.LineBasicMaterial( { color: 0x65c6f6, opacity: 1, linewidth: 2} ) );
    scene.add( line );


    //	move particles

    var time = new Date();

	function render() {
  		// delta in ms
  		var newTime = new Date();
  		var delta = newTime - time;
  		time = newTime;
  		var sec = newTime.getTime();

  		var reposition = line.geometry.attributes.position.array;
  		var index = 0;

  		var random = Math.random();
  		for ( var i = 0; i < 12; i ++ ) {
  			
  			delta_x = (Math.random()-0.5) * 0.5 * i/10;
  			delta_y = (Math.random()-0.5) * 0.5 * i/10;
  			delta_z = (Math.random()-0.5) * 0.5 * i/10;

  			//console.log(random);

  			par_geometry.vertices[i].x += delta_x;
  			par_geometry.vertices[i].y += delta_y;
  		  	par_geometry.vertices[i].z += delta_z;

  			//line.geometry.vertices[i].x += (Math.random()-0.5) * 0.1;

  			//par_geometry.vertices[i].y += (Math.random()-0.5) * 0.1;
  			reposition[index] = reposition[index++] + delta_x;
  			reposition[index] = reposition[index++] + delta_y;
  			reposition[index] = reposition[index++] + delta_z;
  		
  			//console.log("neue Position");
		}
		line.geometry.attributes.position.needsUpdate = true; // required after the first render
  		renderer.render(scene, camera);

  		requestAnimationFrame(render);
	};

	requestAnimationFrame(render);


}

// PRESS "1" TO (UN)REVEAL POINTERs ---------------------------------
window.addEventListener( 'keydown', onKeyDown, false );
var bunch = false;
function onKeyDown(event){
console.log
	
	////

	var geometries = [];
	geometries.push(new THREE.PlaneGeometry(1, 1, 5));
	//geometries.push(new THREE.BoxGeometry(1, 3, 0.75));

	var material = new THREE.MeshNormalMaterial({
	  color: 0xff0000
	});


	var meshes = [];

	var badge = new THREE.Mesh(geometries[0], material);

	//meshes[1].position.set(-2, 0, 0);
	//scene.add(meshes[1]);

	var time = new Date();




	////


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
	grow(mesh[i],d,x,y,z);
}

function grow(mesh,d,x,y,z){



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

		//mesh.geometry.vertices[1];
		scene.add(badge);



	})
		.onComplete(function () {
	})
		.start();

		var geometry = new THREE.PlaneGeometry(1, 1, 5);

		var material = new THREE.MeshPhongMaterial({
	  		color: 0xffffff,
	  		side: THREE.DoubleSide
		});

		var badge = new THREE.Mesh(geometry, material);

		badge.lookAt(new THREE.Vector3(1,0,0));
		badge.position.set(x+4,y-0.4,z-0.4);

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

