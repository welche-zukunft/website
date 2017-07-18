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
  // vector for handle pos
  var vector = new THREE.Vector2();
  var raycaster = new THREE.Raycaster(); // create once
  // plane representing the windows
  var planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

  vector.x = ( handle_pos.x / renderer.domElement.clientWidth ) * 2 - 1;
  vector.y = - ( handle_pos.y / renderer.domElement.clientHeight ) * 2 + 1;

  raycaster.setFromCamera( vector, camera );

  var intersect = raycaster.ray.intersectPlane( planeZ );

  pos = intersect;

  // sometimes, there is no intersection with the plane (?)
  // so we update position only when there is one
  if ( pos != null ) {
    content_dObj_pos.x = pos.x;
    content_dObj_pos.y = pos.y;
  };

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
