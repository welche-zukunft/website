//var contents_json = '{ "date":"123", "contents":[ "arma", "virumque", "cano" ] }';

var url = "https://0101010.one/cgi-bin/cgi-json.sh";

$.get( url, jsontocontents );

var contents;

function jsontocontents(data) {
  console.log(data);
  contents = JSON.parse(JSON.stringify(data)); 
}

function contentbox_create(num) {
  // create dragbox, contenbox, handle
  var dragbox = document.createElement( 'div' );
  var contentbox = document.createElement( 'div' );
  var handle = document.createElement( 'span' );
  // give them unique ids
  dragbox.id = 'dragbox_' + num;
  contentbox.id = 'contentbox_' + num;
  handle.id = 'handle_' + num;
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
      containment: "parent",
      stack: "div.dragbox",
      handle: "span.handle",
      //delay: 300,
      //distance: 10,
      cancel: "div.nodrag",
      drag: function(){
        // track the position of the handle
        var id = $(this).attr("id");
        var currhandle = $("#" + id + " > span.handle");
	// handle_pos is global var
        handle_pos = track_pos_handle(currhandle);
        //console.log( handle_pos );
      }
     });
    //$( contentbox ).resizable();
  });
  // fill contentbox with content
  contentbox.innerHTML = '<div class="nodrag content">' + contents.contents[num] + '</div>';
  // add dragbox directly to body
  document.body.appendChild(dragbox);
  // add contentbox to dragbox
  dragbox.appendChild(contentbox);
  // add handle to dragbox
  dragbox.appendChild(handle);
}

// iterate over available content to create boxes for them
function contentbox_create_all() {
  for (i = 0; i < contents.contents.length; i++) { 
    contentbox_create(i);
  }
}

function contentbox_delete_all() {
  $("div.dragbox").remove();
}

function track_pos_handle(handle) {
  var handleid = $(handle).attr("id");
  var offset = $("#" + handleid).offset();
  var xPos = offset.left;
  var yPos = offset.top;

  //return {
  //  "id":handleid
  //  ,"x":xPos
  //  ,"y":yPos
  //  };

  // add the radius of the handle
  return {
    "x":xPos + 14
    ,"y":yPos + 14
    ,"z":0
  };
}

function contentboxes_get() {
  scene.remove(content_group);
  contentbox_delete_all();
  contentbox_create_all();
  contentboxes_obj_setup();
  scene.add(content_group);
}

