var current_workshop_id = 1;


function color_theme_set(color) {
  var contentbox_handles = $($( "div.dragbox > span.handle" ).get());
  contentbox_handles.css('background', color);
}

function workshopdot_create(num , color) {
  // handle
  var handle = document.createElement( 'span' );
  // give them unique ids
  handle.id =  num;
  // give them classes
  handle.className += " handle";
  //handle.css('color', color);
  $(handle).css('background', color, 'important');
  $(handle).click(function() {
    swapworkshop(handle.id);
    get_workshop_contentboxes(handle.id);
    current_workshop_id = handle.id;
    color_theme_set(color);
  });

  // where to spwan them
  var x = 40;
  var y = 250 + 50 * num;
  handle.style.left = x + 'px';
  handle.style.top = y + 'px';
  
  // add dragbox to div "contentplane"
  document.getElementById("container").appendChild(handle);
}
