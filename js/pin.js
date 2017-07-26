var pin = new THREE.Geometry();
var pincontent = new THREE.Geometry();
var allpins = [];
var allpincontents = [];
var pins;
var pincontents;
var pintextures = [];
var pincanvases = [];

var yeartextures = [];
var yearcanvases = [];


var pinmat = new THREE.MeshPhongMaterial( {
			color: 0xffffff,
			transparent: true,
			//opacity: 0.4,
			side: THREE.DoubleSide
		} );

var pinmat2 = new THREE.MeshBasicMaterial( {
			color: 0xffffff,
			transparent: false,
			side: THREE.DoubleSide
		} );



function removePins(){
	batchescreated = false;
	for(i = 0; i<allpins.length;i++){
		scene.remove(allpins[i]);
		//allpins[i].dispose();
		allpins[i].geometry.dispose();
		if ( allpins[i].material ) allpins[i].material.dispose();
		if ( allpins[i].texture ) allpins[i].texture.dispose();	
	}

	for(i = 0; i<allpincontents.length;i++){
		scene.remove(allpincontents[i]);
		//allpins[i].dispose();
		allpincontents[i].geometry.dispose();
		if ( allpincontents[i].material ) allpincontents[i].material.dispose();
		if ( allpincontents[i].texture ) allpincontents[i].texture.dispose();	
	}
	pintextures = [];
	allpins = [];
	allpincontents = [];
}


function drawPin(index,j){
	var pos = 0;
	var shiftx =(Math.random()*1.);
	for(i = 0; i < j;i++){
		//get side (left or right from middle?)
		var directx = par_geometry[index].vertices[i].x;
		//set even to left odd to rigth
		var side = -1;
		if(i & 1) side = 1;

		//get size of text (lines) &&  create texture
		var content = splitTextToLines(metacontents[2].events[i].text);
		var title = splitTextToLines(metacontents[2].events[i].title);
		var texture = createTexture(index,i,content,title);
		pintextures.push(texture);
		pin.computeFaceNormals();
		pin.computeVertexNormals();
		pinmat = new THREE.MeshPhongMaterial({ map: pintextures[i],specular: 0x373737 });
		pinmat.side = THREE.DoubleSide;
		pinmat.shininess = 90;
		pinmat.transparent = false;
		pinmat.shading = THREE.SmoothShading;
		pinmat2.color.setHex(metacontents[index].color.replace(/#/g , "0x"));

		//create connection to timeline
		pin = new THREE.Geometry();
		pin.vertices.push(
			new THREE.Vector3( 0+par_geometry[index].vertices[i].x, 0+par_geometry[index].vertices[i].y, 0+par_geometry[index].vertices[i].z ),
			new THREE.Vector3( side*(shiftx+1+par_geometry[index].vertices[i].x), 1+par_geometry[index].vertices[i].y, 0+par_geometry[index].vertices[i].z ),
			new THREE.Vector3( side*(shiftx+1.1+par_geometry[index].vertices[i].x), 1+par_geometry[index].vertices[i].y, 0+par_geometry[index].vertices[i].z )
		);

		pin.faces.push(
			new THREE.Face3( 0, 1, 2)
		);


		//create contentarea
		pincontent = new THREE.Geometry();
		pincontent.vertices.push(
			new THREE.Vector3( side*(shiftx+1+par_geometry[index].vertices[i].x), 1+par_geometry[index].vertices[i].y, 0+par_geometry[index].vertices[i].z ),

			new THREE.Vector3( side*(shiftx+3+par_geometry[index].vertices[i].x), 1+par_geometry[index].vertices[i].y, 0+par_geometry[index].vertices[i].z ),
			new THREE.Vector3( side*(shiftx+3+par_geometry[index].vertices[i].x), (1+(title.length + content.length)*0.075)+par_geometry[index].vertices[i].y, 0+par_geometry[index].vertices[i].z ),	

			new THREE.Vector3( side*(shiftx+1+par_geometry[index].vertices[i].x), (1+(title.length + content.length)*0.075)+par_geometry[index].vertices[i].y, 0+par_geometry[index].vertices[i].z )	
		);
		//swap texture if on left side

			pincontent.faces.push( 
				new THREE.Face3( 0, 1, 2 ),
				new THREE.Face3( 0, 2, 3 )
			);


		var width= 1.;
		var height = 1.;
		if(side >= 0.){
			pincontent.faceVertexUvs[0].push([
				new THREE.Vector2(0,height),
				new THREE.Vector2(width,height),
				new THREE.Vector2(width,0),
			]);

			pincontent.faceVertexUvs[0].push([
				new THREE.Vector2(0,height),
				new THREE.Vector2(width,0),
				new THREE.Vector2(0,0)
			]);
		}
		else{
			pincontent.faceVertexUvs[0].push([
				new THREE.Vector2(width,height),
				new THREE.Vector2(0,height),
				new THREE.Vector2(0,0),
			]);

			pincontent.faceVertexUvs[0].push([
				new THREE.Vector2(width,height),
				new THREE.Vector2(0,0),
				new THREE.Vector2(width,0)
			]);	
		}
	
		pincontent.uvsNeedUpdate = true;

		pincontents = new THREE.Mesh( pincontent, pinmat );

		pins = new THREE.Mesh(pin,pinmat2);
		allpincontents.push(pincontents);
		allpins.push(pins);
		scene.add(pincontents);
		scene.add(pins);
	}
	//pins.geometry.vertices = pin.vertices;
	pins.geometry.verticesNeedUpdate = true;
	batchescreated = true;
}

var colwidth = 50;
var paddingtop = 10;
var paddingleft = 15;
var paddingright = 20;
var paddingbottom = 20;
var spaceHL = 15;

function createTexture(index,eventnum,content,title){
	var d = document.createElement('canvas');
	pincanvases.push(d);
	var fontSize = 32;
	if(content != undefined){
		d.width = colwidth * fontSize/2. + paddingleft + paddingright;
		d.height = ((title.length+content.length) * fontSize) + paddingtop + paddingbottom + spaceHL ;
		var ctx = d.getContext('2d');
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, d.width, d.height);
		ctx.fillStyle = metacontents[index].color;
		ctx.fillRect(2, 2, d.width-2, d.height-2);
		ctx.fillStyle = 'black';
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.font = 'bold ' + fontSize+'px Monospace';
		for (var x=0; x<title.length; x++) {
			  ctx.fillText(title[x], paddingleft, paddingtop+x*fontSize);
			}
		ctx.font =  fontSize+'px Monospace';
		for (var y=0; y<content.length; y++) {
			  ctx.fillText(content[y], paddingleft, spaceHL+paddingtop+(title.length*fontSize)+(y*fontSize));
			}
	}
	var tex = new THREE.Texture(d);
	tex.minFilter = THREE.LinearFilter;
	//tex.magFilter = THREE.NearestFilter;
	tex.flipY = false;
	tex.needsUpdate = true;
	return tex;
}

function createYears(year){
	var e = document.createElement('canvas');
	yearcanvases.push(e);
	var fontSize = 32;
	e.width = 4*fontSize;
	e.height = fontSize + 3;
	var ctx = e.getContext('2d');
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, e.width, e.height);
	ctx.fillStyle = 'white';
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.font = 'bold ' + fontSize+'px Courier';
	ctx.fillText(year, 0,0);
	var tex = new THREE.Texture(e);
	tex.minFilter = THREE.LinearFilter;
	tex.flipY = true;
	tex.needsUpdate = true;
	return tex;
}

function splitTextToLines(text) {
        var idealSplit = 30,
            maxSplit = colwidth,
            lineCounter = 0,
            lineIndex = 0,
            lines = [""],
            ch, i;
			
        for (i = 0; i < text.length; i++) {
            ch = text[i];
            if ((lineCounter >= idealSplit && ch === " ") || lineCounter >= maxSplit) {
                ch = "";
                lineCounter = -1;
                lineIndex++;
                lines.push("");
            }
            lines[lineIndex] += ch;
            lineCounter++;
        }

        return lines;
    }
