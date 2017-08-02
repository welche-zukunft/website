var buttons = [[]];
var lines = [[]];
var buttons_bw = [[]];
var lines_bw = [[]];
var two2dwasselected = false;
var canvas;
var arc;
var button_1;
var line_1;

function add2dcanvas(){
	$( "#threejs" ).remove();
	$("#container").append('<div style="display: flex; max-height: 70%;top: 33%;"><div style="width:70%;height:20%;overflow-x: auto; "><canvas id="canvas" style="float: left;width:100%;height:100%"></canvas></div><div class="content2d" style="float: left;width:30%;overflow-y: auto;max-height: 20%"><span id="headline" ></span><br><br><span id="contents" ></span></div></div>');
}


	
function startdraw(){
	
	var currentselection = 14;
	var margin = 20;
	var canvaswidth = $('#canvas').width();
	if(canvaswidth < 800){
		canvaswidth = 800;
		$('canvas').css('width', canvaswidth + 'px');
	}
	var canvasheight = $('#canvas').height();
	canvas = oCanvas.create({
		canvas: "#canvas",
		background: "#000"
	});
	canvas.width = canvaswidth;
	canvas.height = canvasheight;
	
	button_1 = canvas.display.ellipse({
			x: 0,
			y: 0,
			radius: 2,
			fill: "#0aa",
			value1: 0,
			value2: 0
		});
		
	line_1 = canvas.display.line({
		start: { x: 0, y: 0 },
		end: { x: 10, y: 10 },
		stroke: "5px #0aa",
		cap: "round"
		});
		
	arc = canvas.display.arc({
		x: 0,
		y: 0,
		radius: 8,
		start: 0,
		end: 360,
		stroke: "4px #fff"
		});	
		
		//add scale of years
		for(j=0;j<11;j++){
			
			var liner = line_1.clone({
				start: { x: (canvaswidth/11)*j+15, y: margin },
				end: { x: (canvaswidth/11)*j+15, y: canvasheight-margin },
				stroke: "1px #ffffff"
				});
			canvas.addChild(liner);
			var year = String(2018+j);
			var text = canvas.display.text({
				x: (canvaswidth/11)*j + margin,
				y: margin,
				origin: { x: "left", y: "top" },
				font: "bold 10px sans-serif",
				text: year,
				fill: "#fff"
			});
			canvas.addChild(text);
		}
		
		//create scenarios
	for(j=0;j<metacontents.length;j++){
		
		var color = metacontents[j].color;
		buttons[j] = [];
		buttons_bw[j] = [];
		lines[j] = [];
		lines_bw[j] = [];
		var oldx = 0;
		var oldy = 0;
		var newx = 10;
		var newy = 0;
		for(i=0;i<metacontents[j].events.length;i++){
			//calculate positions
			oldx = newx;
			oldy = newy;
			if(i>0){
				newx += (1.5*Math.random()* canvaswidth/metacontents[j].events.length);
			}
			newy = canvasheight/2. + ((Math.random() * 1.) -0.5) * (i/metacontents.length) * (canvasheight - margin*2.);
			
			//create grey button
			var button_bw = button_1.clone({
				x: newx,
				y: newy,
				value: j,
				value2: i,
				fill: "#b5b2b2"
					});	
				
				//create colored button
				var button_color = button_1.clone({
					x: newx,
					y: newy,
					value: j,
					value2: i,
					fill: color,
					radius: 6
					});	
				
				button_color.bind("click tap", function () {
					//this.fill = "hsl(" + Math.random() * 360 + ", 50%, 50%)";
					arc.x = this.x;
					arc.y = this.y;
					canvas.addChild(arc);
					canvas.redraw();
					$('#headline').html(metacontents[this.value].events[this.value2].title);
					$('#contents').html(metacontents[this.value].events[this.value2].text);
				});
				
				button_color.bind("mouseenter", function () {
				canvas.mouse.cursor("pointer");
				}).bind("mouseleave", function () {
				canvas.mouse.cursor("default");
				});
				
				buttons_bw[j].push(button_bw);
				buttons[j].push(button_color);
				
				
			if(i>0){
				//create bw line
				var line_bw = line_1.clone({
				start: { x: oldx, y: oldy },
				end: { x: newx, y: newy },
				stroke: "1px #b5b2b2"
				});			

				// create colored line
				var line_color = line_1.clone({
				start: { x: oldx, y: oldy },
				end: { x: newx, y: newy },
				stroke: "3px "+ color
				});
				lines_bw[j].push(line_bw);
				lines[j].push(line_color);
				}
				
			}

		var name = "menu_"+String(j);
		var name2 = "menubw_"+String(j);
		
		//create colored scene
		canvas.scenes.create(name, function () {
		for(k=0;k<lines[j].length;k++){
				this.add(lines[j][k]);
			}
		for(k=0;k<buttons[j].length;k++){
				this.add(buttons[j][k]);
			}
		});
		//create bw scene
		canvas.scenes.create(name2, function () {
		for(k=0;k<lines_bw[j].length;k++){
				this.add(lines_bw[j][k]);
			}
		for(k=0;k<buttons_bw[j].length;k++){
				this.add(buttons_bw[j][k]);
			}
		});	
	}
		for(i=0;i<buttons.length;i++){
			var name = "menu_"+String(i);
			canvas.scenes.load(name);
			canvas.events.enabled = false;
		}	
}

	
	function changecolor(num){
			canvas.removeChild(arc);
		if(num < buttons.length){
			canvas.events.enabled = true;
			for(i=0;i<buttons.length;i++){
				if(i != num){
					//console.log("unload: " + i);
					var name = "menu_"+String(i);
					canvas.scenes.unload(name);
					name = "menubw_"+String(i);
					canvas.scenes.load(name);
				}
				else if(i==num){
					//console.log("load: " + i);
					var name = "menubw_"+String(i);
					canvas.scenes.unload(name);
					name = "menu_"+String(i);
					canvas.scenes.load(name);
				
				}
			}
		}
		// reset Workshopmenu
		else if(num>= buttons.length){
			for(i=0;i<buttons.length;i++){
					var name = "menubw_"+String(i);
					canvas.scenes.unload(name);
					name = "menu_"+String(i);
					canvas.scenes.load(name);
					canvas.events.enabled = false;
					$('#headline').html("");
					$('#contents').html("");
					}
		}
	}
 	     
		