var content_sObj, content_line;
var content_dObj_pos = {"x":0, "y":0, "z":0};
//var content_group = new THREE.Group();

function content_line_draw(sObj_pos,dObj_pos,color) {
  var lineGeom = new THREE.Geometry();

  lineGeom.vertices.push(sObj_pos);
  lineGeom.vertices.push(dObj_pos);
  var lineMat = new THREE.LineBasicMaterial({
    color: color
  });
  content_line = new THREE.Line(lineGeom, lineMat);

  content_group.add( content_line );

  //scene.add(content_line);
  return content_line;
}

function convert_pos_to_3d(vector) {
  console.log(vector);
  // source position
  //var timestamp = new Date() * 0.0005;
  //content_sObj.position.x = Math.cos(timestamp) * 7;
  //content_sObj.position.z = Math.sin(timestamp) * 7;

  // vector for handle pos
  var new_vector = new THREE.Vector3();

  new_vector.set(
    ( vector.x / window.innerWidth ) * 2 - 1,
    - ( vector.y / window.innerHeight ) * 2 + 1,
    0.5
  );

  new_vector.unproject( camera );
  var dir = new_vector.sub( camera.position ).normalize();
  var content_targetZ = 0;
  var distance = (content_targetZ - camera.position.z) / dir.z;
  pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
  //
  //console.log( content_dObj_pos );
  //content_line.geometry.verticesNeedUpdate = true;

  return pos;
}

function add_sphere(color) {
  sphereObj = function( color ) {
    var sphGeom = new THREE.SphereGeometry(0.5, 8, 4);
    var sphMat = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true
    });
    return new THREE.Mesh(sphGeom, sphMat);
  }

  content_sObj = new sphereObj(color);
  content_group.add( content_sObj );
  //scene.add(content_sObj);
}


// broken yet

function visibilty(obj,status) {
  obj.traverseHierarchy( object, function ( object ) { object.visible = status; } );
}

function visibilty_toggle(obj) {
  if ( obj.visible == false ) {
    visibilty(obj,true)
  }
  else {
    visibilty(obj,false)
  }
}
