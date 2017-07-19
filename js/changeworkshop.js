var current_workshop_id = 0;

function workshopdot_create(num , color) {
	console.log(color);
  // handle
  var handle = document.createElement( 'span' );
  // give them unique ids
  handle.id =  num;
  // give them classes
  handle.className += " handle";
  //handle.css('color', color);
  $(handle).css('background', color, 'important');
  $(handle).attr("data-tooltip","Vorname,Name - Workshopname");
  $(handle).attr("data-tooltip-position","right");
  $(handle).click(function() {
    scene.remove( current_lines_group );
    swapworkshop(handle.id);
    //contentboxes_get();
    get_workshop_contentboxes(handle.id);
    current_workshop_id = handle.id;
  });

  // add handle to div "handle_container"
  document.getElementById("handle_container").appendChild(handle);
}

function workshopdot_deselect(num){
  // handle
  var handle = document.createElement( 'span' );
  // give them unique ids
  handle.id =  num;
  // give them classes
  handle.className += " handle";
  //handle.css('color', color);
  $(handle).css('background', '#ffffff', 'important');
  $(handle).attr("data-tooltip","alle Workshops anzeigen");
  $(handle).attr("data-tooltip-position","right");
  $(handle).click(function() {
    scene.remove( current_lines_group );
    deselectworkshop();
    //contentboxes_get();
    //get_workshop_contentboxes(handle.id);
    current_workshop_id = 0;
  });

  // add handle to div "handle_container"
  document.getElementById("handle_container").appendChild(handle);
	
	
}
