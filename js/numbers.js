var loader = new THREE.TextureLoader();
var speedx, speedy = 0.;
var uniforms;


// CREATE FONT ALTAS WITH NUMBERS
var fontSize = 32;
var lettersPerSide = 4;
var c = document.createElement('canvas');
c.width = fontSize*lettersPerSide;
c.height = fontSize*lettersPerSide;
var ctx = c.getContext('2d');
ctx.font = 'bold ' + fontSize+'px Monospace';
var i=0;
for (var y=0; y<lettersPerSide; y++) {
	for (var x=0; x<lettersPerSide; x++,i++) {
		  var ch = String.fromCharCode(48+x+(y*lettersPerSide));
		  ctx.fillText(ch, x*fontSize, -(8/32)*fontSize+(y+1)*fontSize);
		}
}

function createNumberWalls(){
	var tex = new THREE.Texture(c);
	tex.flipY = false;
	tex.needsUpdate = true;

	var mat = new THREE.MeshBasicMaterial({map: tex});
	mat.transparent = true;

	// create geometry with materials and add to scene
	var texture = loader.load('images/shader1.jpg', function () {  
	texture.flipY = false;
	texture.needsUpdate = true; 
	var mat2 = new THREE.MeshBasicMaterial({map: texture});
	mat2.transparent = true;
	});
				  
	var geo = new THREE.Geometry();

	var j=0, ln=0,k = 0;

	for (i=0; i<9000; i++) {
		var num = Math.floor(Math.random()*16.)+45;
					
		var code = num;
		var cx = (code-45) % lettersPerSide;
		var cy = Math.floor((code-45) / lettersPerSide);
		var v,t;

		geo.vertices.push(
			new THREE.Vector3( j*1., ln*1., 0 ),
			new THREE.Vector3( j*1.+1., ln*1., 0 ),
			new THREE.Vector3( j*1.+1., ln*1.+1., 0 ),
			new THREE.Vector3( j*1., ln*1.+1., 0 )
		);
		
		var face = new THREE.Face3(i*4+0, i*4+1, i*4+2);
		geo.faces.push(face);
		face = new THREE.Face3(i*4+0, i*4+2, i*4+3);
		geo.faces.push(face);
		var ox=(cx)/lettersPerSide, oy=(cy)/lettersPerSide, off=1./lettersPerSide;
		var sz = lettersPerSide*fontSize;
		
		geo.faceVertexUvs[0].push([
		new THREE.Vector2( ox, oy+off ),
		new THREE.Vector2( ox+off, oy+off ),
		new THREE.Vector2( ox+off, oy )
			]);
		
		geo.faceVertexUvs[0].push([
		new THREE.Vector2( ox, oy+off ),
		new THREE.Vector2( ox+off, oy ),
		new THREE.Vector2( ox, oy )
			]);
		if (k  == 200) {
		  ln--;
		  j=0;
		  k = 0;
		} else {
		  j++;
		  k++;
		}
	}

	var sides = new THREE.Group();
				  
					
	var width = window.innerWidth,
		height = window.innerHeight;

	uniforms = {
		time : { type: "f", value: 1.0 },
		size : { type: "v2", value: new THREE.Vector2(width,height) },
		map : { type: "t", value: tex },
		map2 : { type: "t", value: texture },
		effectAmount : { type: "f", value: 0.0 },
		amount : {type: "v2", value: new THREE.Vector2(1.,8.) },
		resolution : {type: "v2",value: new THREE.Vector2(200.,25.)},
		speed : {type: "v2",value: new THREE.Vector2(speedx, speedy)}
	};

	var shaderMaterial = new THREE.ShaderMaterial({
		uniforms : uniforms,
		vertexShader : document.querySelector('#vertex').textContent,
		fragmentShader : document.querySelector('#fragment').textContent
	});
	shaderMaterial.transparent = true;
	shaderMaterial.depthTest = false;

	var slides = [];
	var n = 2;
	var scaleFactor = 0.5;
	
	for (var i=0; i<n; i++) {
		var slide = new THREE.Mesh(geo,shaderMaterial);
		slide.doubleSided = true;
		var a = i/n * Math.PI*2 + Math.PI/2;
		var box = new THREE.Box3().setFromObject( slide );
		slide.position.x = -10. + (20.*i);
		slide.position.y = (box.getSize().y * scaleFactor)/2.;
		slide.position.z = 0.-(box.getSize().x * i * scaleFactor);
		slide.rotation.y = Math.PI/2 + (Math.PI*i);
		slide.scale.set(scaleFactor,scaleFactor,scaleFactor);
		slides.push(slide);
		sides.add(slide);
	}

	scene.add(sides);
}

//animate shader with call from animate()
function changeuniforms(){
	uniforms.time.value += 0.05;
	speedx += (Math.random() * 0.05) - 0.025;
	speedy += (Math.random() * 0.05) - 0.025;
	uniforms.speed.value = new THREE.Vector2(speedx, speedy);
}