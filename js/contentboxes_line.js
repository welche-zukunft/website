var camera, scene, renderer, controls;
var sourceObj, line;
var destinationObj = {"x":0, "y":0, "z":0};

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

  sourceObj = new sphereObj("white");

  var lineGeom = new THREE.Geometry();

  lineGeom.vertices.push(sourceObj.position);
  lineGeom.vertices.push(destinationObj);
  var lineMat = new THREE.LineBasicMaterial({
    color: "fuchsia"
  });
  line = new THREE.Line(lineGeom, lineMat);

  scene.add(sourceObj);
  scene.add(line);
}

function contentbox_line() {
  // source position
  var timestamp = new Date() * 0.0005;
  sourceObj.position.x = Math.cos(timestamp) * 7;
  sourceObj.position.z = Math.sin(timestamp) * 7;

  // vector for handle pos
  var vector = new THREE.Vector3();

  vector.set(
    ( handle_pos.x / window.innerWidth ) * 2 - 1,
    - ( handle_pos.y / window.innerHeight ) * 2 + 1,
    0.5
  );

  vector.unproject( camera );
  var dir = vector.sub( camera.position ).normalize();
  var targetZ = 0;
  var distance = (targetZ - camera.position.z) / dir.z;
  pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
  //

  destinationObj.x = pos.x;
  destinationObj.y = pos.y;
  destinationObj.z = pos.z;
  //console.log( destinationObj );
  line.geometry.verticesNeedUpdate = true;
}

function animate() {
  requestAnimationFrame(animate);

  contentbox_line();

  renderer.render(scene, camera);
}

