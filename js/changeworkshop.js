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
    contentboxes_get();
    color_theme_set(color);
  });

  // add handle to div "handle_container"
  document.getElementById("handle_container").appendChild(handle);
}
