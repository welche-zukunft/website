var camera, scene, renderer;

init();
animate();

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(5, 10, 10);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  add_sphere("white");

  // content_line_draw(sObj_pos,dObj_pos,color)
  content_line_draw(content_sObj.position,content_dObj_pos,"fuchsia");

}

function animate() {
  requestAnimationFrame(animate);

  content_line_pos();

  renderer.render(scene, camera);
}

