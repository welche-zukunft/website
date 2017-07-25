
var contents;
var workshops = [];
// array of array of contentboxes
var all_boxes = [];
var all_contents = [];
var current_lines_group = new THREE.Group();

function workshop_obj(id) {
  this.id = id;
  this.boxes = [];
  this.contents = [];
}

function box_object(id, s_obj, content,color) {
  this.id = id;
  this.position = {"x":0, "y":0, "z":0};
  this.pos2d = {"x":0, "y":0, "z":0};
  this.s_obj = s_obj;
  this.line  = null;
  this.content = content;
  this.color = color;
}

function jsontocontents(data, j) {
  console.log(data);
  contents = JSON.parse(JSON.stringify(data)); 
  all_contents.push(contents);
}

function update_box_position(box) {
  //console.log(box.pos2d);
  var pos2d = {"x":0, "y":0, "z":0};
  pos2d.x = box.pos2d.x;
  pos2d.y = box.pos2d.y;
  pos2d.z = box.pos2d.z;
  var pos = convert_pos_to_3d(pos2d);
  //console.log(pos);

  if ( pos != null) {
    //console.log(pos);
    box.position.x = pos.x;
    box.position.y = pos.y;
    box.position.z = pos.z;
  }
  if ( box.line != null) {
    //console.log("verticesNeedUpdate");
    box.line.geometry.verticesNeedUpdate = true;
  };
}

function contentbox_create(j, num, content,color,positions) {
	var handle_pos = new THREE.Vector3(0,0,0);

  // console.log("Content : " + content);
  // console.log("Create Box " + num + " for workshop " + j);

  var box = new box_object(i, particles[j][num], content,color);
  var box_id = 100 * j + num;

  workshops[j].boxes[num] = box;

  // create dragbox, contenbox, handle
  var dragbox = document.createElement( 'div' );
  var contentbox = document.createElement( 'div' );
  var handle = document.createElement( 'span' );
  $(handle).css('background', color, 'important');
  // give them unique ids
  dragbox.id = 'dragbox_' + box_id;
  contentbox.id = 'contentbox_' + box_id;
  handle.id = 'handle_' + box_id;
  // give them classes
  dragbox.className += " dragbox";
  contentbox.className += " contentbox eventbatchclose";
  handle.className += " handle";
  //get position of timelineobject
  var directionx = particles[j][num].position.x;
  var x = 0.;
  var y = 0.;
  if(directionx <= positions){
	  var checkposition = boxesRight.slice(0,num);
	  var count = 0;
	  for(var i = 0; i < checkposition.length; ++i){
		if(checkposition[i] == true)
			count++;
	  }
	  x	= innerWidth /  2. - (innerWidth/4.) + (directionx * innerWidth/16.);
	  y = innerHeight - (innerHeight*0.2) - (((count)) * heightStepRight);
	}
  if(directionx > positions){
	  var checkposition = boxesLeft.slice(0,num);
	  var count = 0;
	  for(var i = 0; i < checkposition.length; ++i){
		if(checkposition[i] == true)
			count++;
	  }
	  x	= innerWidth/2. + (innerWidth/8.)+(directionx * innerWidth/32.);
	  //y =  50 + (num * 50);
	  y = innerHeight - (innerHeight*0.2) - (((count)) * heightStepLeft);
	};
  if(y <= 80) y = 80;
  if(x <= 80) x = 80;
  if(x >= innerWidth - (innerWidth*0.1))  x = innerWidth - (innerWidth*0.1);
  
  // where to spwan them
  /*var x = 50 + (num + 1) * 75 % (innerWidth - 200);
  var y = 50 + (num + 1) * 50 % (innerHeight * 0.2);*/
  dragbox.style.left = x + 'px';
  dragbox.style.top = y + 'px';
  // make them draggable
  $(function() {
    $( dragbox ).draggable({
      scroll: false,
      containment: "parent",
      stack: "div.dragbox",
	  distance:0,
      handle: "span.handle",
      //delay: 300,
      //distance: 10,
      cancel: "div.nodrag",
      drag: function(){
        var handle_pos = new THREE.Vector3(0,0,0);
        // track the position of the handle
        var id = $(this).attr("id");
        var currhandle = $("#" + id + " > span.handle");
	// pos of dragbox, so we can track it rel. to threejs container
        var box_pos = track_pos_handle(this);
	// handle_pos rel to box
        var handle_pos_rel = track_pos_handle(currhandle);
	// handle_pos is global var
        handle_pos.x = box_pos.x - handle_pos_rel.x + 14;
        handle_pos.y = box_pos.y + handle_pos_rel.y + 14;
        handle_pos.z = box_pos.z - handle_pos_rel.z;
        //console.log( handle_pos );

        var regex = /\d+/g;

        var id_num = parseInt(id.match(regex), 10);
        var workshop_id = Math.floor(id_num / 100);
        var box_number = id_num % 100;

        var box = workshops[workshop_id].boxes[box_number];
        box.pos2d.x = handle_pos.x;
        box.pos2d.y = handle_pos.y;
        box.pos2d.z = handle_pos.z;

        update_box_position(box);
      }
     });
	 //open & close on doubleclick
	$( dragbox ).click(function() {
		var sub = $(this).children();
		var sub2 = sub.get(0);
		var sub3 = $(sub2).children();
		var sub4 = sub3.get(1);
        if (sub4.style.display == 'block'){
            sub4.style.display = 'none';
			$(sub).removeClass('eventbatchopen');
			$(sub).addClass('eventbatchclose');
        }
        else {
            sub4.style.display = 'block';
			$(sub).removeClass('eventbatchclose');
			$(sub).addClass('eventbatchopen');
        }
		var regex = /\d+/g;
		var id = $(this).attr("id");
		var currhandle = $("#" + id + " > span.handle");
		var box_pos = track_pos_handle(this);
		// handle_pos rel to box
        var handle_pos_rel = track_pos_handle(currhandle);
		// handle_pos is global var
        handle_pos.x = box_pos.x - handle_pos_rel.x + 14;
        handle_pos.y = box_pos.y + handle_pos_rel.y + 14;
        handle_pos.z = box_pos.z - handle_pos_rel.z;
        var id_num = parseInt(id.match(regex), 10);
        var workshop_id = Math.floor(id_num / 100);
        var box_number = id_num % 100;
        var box = workshops[workshop_id].boxes[box_number];
        box.pos2d.x = handle_pos.x;
        box.pos2d.y = handle_pos.y;
        box.pos2d.z = handle_pos.z;
		update_box_position(box);

        var zmax = 0;
        $('.dragbox').each(function () {
            var cur = $(this).css('z-index');
			console.log("current: ", cur, zmax);
            zmax = cur > zmax ? $(this).css('z-index') : zmax;
			
        });
		console.log("maximum: " , zmax);
        $(this).css('z-index', Number(zmax) + 1);

	});
    //$( contentbox ).resizable();
  });
  var title = content.title;
  var text = content.text;
  // fill contentbox with content
  contentbox.innerHTML = '<div class="nodrag content unselectable">' + title + '</div>';
  contentbox.innerHTML += (
    '<div class="unselectable" style="display:none">'
    + '<p>'
    + text
    + '</p>'
	+ '</div>'
  );
  // add dragbox directly to threejs container
  document.getElementById("container").appendChild(dragbox);
  // add contentbox to dragbox
  dragbox.appendChild(contentbox);
  // add handle to dragbox
  dragbox.appendChild(handle);

  //console.log("Inner HTML: " + contentbox.innerHTML);

  var handle_pos_rel = track_pos_handle(handle);

  handle_pos.x = x - handle_pos_rel.x + 14;
  handle_pos.y = y + handle_pos_rel.y + 14;

  var pos2d = new THREE.Vector3(handle_pos.x, handle_pos.y, 0);

  box.pos2d.x = handle_pos.x;
  box.pos2d.y = handle_pos.y;
  box.pos2d.z = handle_pos.z;

  update_box_position(box);
  box.line = content_line_draw(box.s_obj.position, box.position,"white");

  current_lines_group.add( box.line );
}

function flush_boxes() {
  for (i = current_lines_group.children.length - 1; i >= 0; i--) {
    current_lines_group.remove(current_lines_group.children[i]);
  }
  workshop_delete_all_events();
}
  var middle;
  var boxesLeft;
  var boxesRight;
  var heightStepLeft;
  var heightStepRight;



// iterate over available content to create boxes for them
function workshop_create_all_contents(j) {
  var contents;
  
//calculate middle x for boxes
  middle = 0.;
  boxesLeft = new Array(metacontents[j].events.length);
  boxesRight = new Array(metacontents[j].events.length);
  for (i = 0; i < metacontents[j].events.length; i++) {
	middle += particles[j][i].position.x;
  }
  middle = middle / metacontents[j].events.length;
  //calculate postions
  for (i = 0; i < metacontents[j].events.length; i++) {
	if(particles[j][i].position.x > middle){
		boxesLeft[i] = true;
		}
	if(particles[j][i].position.x <= middle){
		boxesRight[i] = true;
		}
  }
  
   var count = 0;
	  for(var i = 0; i < boxesLeft.length; ++i){
		if(boxesLeft[i] == true)
			count++;
	  }
   heightStepLeft = (innerHeight * 0.8) / count;
	
	count = 0;
	  for(var i = 0; i < boxesRight.length; ++i){
		if(boxesRight[i] == true)
			count++;
	  }

   heightStepRight = (innerHeight * 0.8) / count;
  // remove contentboxes and lines here and also in again in get, cause async
  flush_boxes();
  // ToDo: create workshop objects earlier (maybe at timeline creation)
  var workshop = new workshop_obj(j);
  workshops[j] = workshop;
 
  update_workshop_menu(j);

  flush_boxes();

  for (i = 0; i < metacontents[j].events.length; i++) {
      contentbox_create(j, i, metacontents[j].events[i],metacontents[j].color,middle);
    }
    scene.add( current_lines_group );
    
}

function workshop_create_all_contents_3d(j) {
  // ToDo: create workshop objects earlier (maybe at timeline creation)
  var workshop = new workshop_obj(j);
  workshops[j] = workshop;
  update_workshop_menu(j);
 
}

function workshop_delete_all_events() {
  //$("div.dragbox").remove();
  removePins();
initCamera();
}

function track_pos_handle(elem) {
  var elemid = $(elem).attr("id");
  var position = $("#" + elemid).position();
  var xPos = position.left;
  var yPos = position.top;

  //return {
  //  "id":handleid
  //  ,"x":xPos
  //  ,"y":yPos
  //  };

  return {
    "x":xPos
    ,"y":yPos
    ,"z":0
  };
}

function get_workshop_contentboxes(j) {
  current_workshop_id = j;
  workshop_create_all_contents_3d(j);
	initCamera();
}

function initCamera(){
	camposIntern = -1;
	campos = 0;
	setOverview = true;

}

