

var geometry = new THREE.Geometry();

geometry.vertices.push(
	new THREE.Vector3( -10,  10, 0 ),
	new THREE.Vector3( -10, -10, 0 ),
	new THREE.Vector3(  10, -10, 0 )

	
	
	
);

geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );