//var contents_json = '{ "date":"123", "contents":[ "arma", "virumque", "cano" ] }';

var url = "https://0101010.one/cgi-bin/cgi-json.sh";

//$.get( url, jsontocontents );

var contents;
var workshops = [];
// array of array of contentboxes
var all_boxes = [];
var all_contents = [];
var current_lines_group = new THREE.Group();

function workshop_obj(id) {
  this.id = id;
  this.boxes = [];
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

function contentbox_create(j, num, content,color) {
  var handle_pos = new THREE.Vector3(0,0,0);

  // console.log("Content : " + content);
  // console.log("Create Box " + num + " for workshop " + j);

  var box = new box_object(i, particles[j][3], content,color);
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
  contentbox.className += " contentbox";
  handle.className += " handle";
  // where to spwan them
  var x = 200;
  var y = 50 + 50 * num;
  dragbox.style.left = x + 'px';
  dragbox.style.top = y + 'px';
  // make them draggable
  $(function() {
    $( dragbox ).draggable({
      scroll: false,
      containment: "parent",
      stack: "div.dragbox",
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
    //$( contentbox ).resizable();
  });
  // fill contentbox with content
  contentbox.innerHTML = '<div class="nodrag content">' + content + '</div>';
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

// iterate over available content to create boxes for them
function workshop_create_all_contents(j) {
  var contents;
  // clear group of lines
  current_lines_group = new THREE.Group();

  $.get( url, function(data){
    //console.log(data);
    contents = JSON.parse(JSON.stringify(data));
    all_contents.push(contents);

    // ToDo: create workshop objects earlier (maybe at timeline creation)
    var workshop = new workshop_obj(j);
    workshops[j] = workshop;

    //console.log("CONTENT LENGTH : " + contents.contents.length);

    for (i = 0; i < contents.contents.length; i++) {
      contentbox_create(j, i, contents.contents[i],rgb[j]);
    }
  });
  scene.add( current_lines_group );
}

function workshop_delete_all_contents() {
  $("div.dragbox").remove();
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
  //contentboxes = 0;
  //scene.remove(content_group);
  //contentbox_delete_all();
  //contentbox_create_all();
  //contentboxes_obj_setup();
  //scene.add(content_group);
  workshop_delete_all_contents();
  workshop_create_all_contents(j);
  contentboxes = 1;
}

