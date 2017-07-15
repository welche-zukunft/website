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
}

function content_line_pos() {
  // source position
  //var timestamp = new Date() * 0.0005;
  //content_sObj.position.x = Math.cos(timestamp) * 7;
  //content_sObj.position.z = Math.sin(timestamp) * 7;

  // vector for handle pos
  var vector = new THREE.Vector3();

  vector.set(
    ( handle_pos.x / window.innerWidth ) * 2 - 1,
    - ( handle_pos.y / window.innerHeight ) * 2 + 1,
    0.5
  );

  vector.unproject( camera );
  var dir = vector.sub( camera.position ).normalize();
  var content_targetZ = 0;
  var distance = (content_targetZ - camera.position.z) / dir.z;
  pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
  //

  content_dObj_pos.x = pos.x;
  content_dObj_pos.y = pos.y;
  content_dObj_pos.z = pos.z;
  //console.log( content_dObj_pos );
  content_line.geometry.verticesNeedUpdate = true;
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
