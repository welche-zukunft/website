
var loader = new THREE.TextureLoader();
var speedx, speedy = 0.;
var uniforms;

// CREATE FONT ALTAS WITH NUMBERS
var fontSize = 64;
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
	texture.minFilter = THREE.LinearFilter;
	var mat2 = new THREE.MeshBasicMaterial({map: texture});
	});
				  
	var geo = new THREE.Geometry();

	var j=0, ln=0,k = 0;

	for (i=0; i<7000; i++) {
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
		if (k  == 300) {
		  ln--;
		  j=0;
		  k = 0;
		} else {
		  j++;
		  k++;
		}
	}

	var topy = new THREE.Group();
				  
					
	var width = window.innerWidth,
		height = window.innerHeight;

	uniforms = {
		time : { type: "f", value: 1.0 },
		size : { type: "v2", value: new THREE.Vector2(width,height) },
		map : { type: "t", value: tex },
		map2 : { type: "t", value: texture },
		effectAmount : { type: "f", value: 0.0 },
		amount : {type: "v2", value: new THREE.Vector2(1.,12.) },
		resolution : {type: "v2",value: new THREE.Vector2(300.,25)},
		speed : {type: "v2",value: new THREE.Vector2(speedx, speedy)}
	};

	var shaderMaterial = new THREE.ShaderMaterial({
		uniforms : uniforms,
		vertexShader : document.querySelector('#vertex').textContent,
		fragmentShader : document.querySelector('#fragment').textContent
	});
	shaderMaterial.transparent = true;
	shaderMaterial.depthTest = true;

	var books = [];
	var w = 80 * 1.1;
	var n = 2;
	var r = w * 1/2 * 1/Math.PI * n;
	
	
	for (var i=0; i<n; i++) {
		var book = new THREE.Mesh(geo,shaderMaterial);
		book.doubleSided = true;
		var a = i/n * Math.PI*2 + Math.PI/2;
		var boxy = new THREE.Box3().setFromObject( book );
		book.position.x = -1. * (boxwidth) + (2*boxwidth*i);
		if(orientation_world == "vertical"){
			book.position.x = -1. * (boxwidth*2) + (4*boxwidth*i);
		}
		book.position.y = (boxy.getSize().y * 0.35)/2.;
		book.position.z = 3.-(boxy.getSize().x*0.35 * i );
		book.rotation.y = Math.PI/2 + (Math.PI*i);
		book.scale.set(0.35,0.35,0.35);
		books.push(book);
		topy.add(book);
	}

	scene.add(topy);
}

//animate shader with call from animate()
function changeuniforms(){
	uniforms.time.value += 0.05;
	speedx += (Math.random() * 0.01) - 0.005;
	speedy += (Math.random() * 0.01) - 0.005;
	uniforms.speed.value = new THREE.Vector2(speedx, speedy);
}
var mat4;
var geo2 = new THREE.PlaneGeometry( 160, 10., 1. );
var textureLoader = new THREE.TextureLoader();
var fakewalls = [];
var faketopy = new THREE.Group();

var fakenumbertexture = textureLoader.load('images/numbers.jpg',function (){
	fakenumbertexture.wrapS = fakenumbertexture.wrapT = THREE.RepeatWrapping;
	fakenumbertexture.repeat.set(10, 1);
	fakenumbertexture.flipY = true;
	fakenumbertexture.minFilter = THREE.LinearFilter;
	fakenumbertexture.needsUpdate = true; 
});



function createFakeWalls(){
	var n = 2;
	for (var r=0; r<n; r++) {
		mat4 = new THREE.MeshLambertMaterial({map:fakenumbertexture});
		mat4.side = THREE.DoubleSide;
		var planer = new THREE.Mesh( geo2, mat4 );
		planer.doubleSided = true;
		var boxy = new THREE.Box3().setFromObject( planer );
		planer.position.x = -1.*(boxwidth) + (boxwidth*2*r);
		if(orientation_world == "vertical"){
			planer.position.x = -1. * (boxwidth*2.5) + (5*boxwidth*r);
		}
		planer.rotation.y = (Math.PI/2.)+(Math.PI*r);
		fakewalls.push(planer);
		faketopy.add(planer);

		}
	scene.add(faketopy);
}