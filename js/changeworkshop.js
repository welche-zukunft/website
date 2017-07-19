var current_workshop_id = 0;

function color_theme_set(color) {
  var contentbox_handles = $($( "div.dragbox > span.handle" ).get());
  contentbox_handles.css('background', color);
}

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
    swapworkshop(handle.id);
    //contentboxes_get();
    get_workshop_contentboxes(handle.id);
    current_workshop_id = handle.id;
    color_theme_set(color);
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
    deselectworkshop();
    //contentboxes_get();
    //get_workshop_contentboxes(handle.id);
    current_workshop_id = 0;
    //color_theme_set(color);
  });

  // add handle to div "handle_container"
  document.getElementById("handle_container").appendChild(handle);
	
	
}
