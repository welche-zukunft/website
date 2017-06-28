var camera, scene, renderer;
var content_sObj, content_line;
var content_dObj_pos = {"x":0, "y":0, "z":0};

init();
animate();

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(5, 10, 10);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  sphereObj = function( color ) {
    var sphGeom = new THREE.SphereGeometry(0.5, 8, 4);
    var sphMat = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true
    });
    return new THREE.Mesh(sphGeom, sphMat);
  }

  content_sObj = new sphereObj("white");

  var content_lineGeom = new THREE.Geometry();

  content_lineGeom.vertices.push(content_sObj.position);
  content_lineGeom.vertices.push(content_dObj_pos);
  var content_lineMat = new THREE.LineBasicMaterial({
    color: "fuchsia"
  });
  content_line = new THREE.Line(content_lineGeom, content_lineMat);

  scene.add(content_sObj);
  scene.add(content_line);
}

function contentbox_line() {
  // source position
  var timestamp = new Date() * 0.0005;
  content_sObj.position.x = Math.cos(timestamp) * 7;
  content_sObj.position.z = Math.sin(timestamp) * 7;

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

function animate() {
  requestAnimationFrame(animate);

  contentbox_line();

  renderer.render(scene, camera);
}

