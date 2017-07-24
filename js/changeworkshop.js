

var current_workshop_id = 0;

function workshopdot_create(num , color) {
  // handle
  var handle = document.createElement( 'span' );
  // give them unique ids
  handle.id =  num;
  // give them classes
  handle.className += " handle tooltip";
  $(handle).css('color', color);
  $(handle).css('background', color, 'important');
 $(handle).append('<span class="tooltiptext" style="background: '+color+'">'+metacontents[num].title[0] + ' - ' + metacontents[num].title[1]+'</span>');
 	
  $(handle).click(function() {
    swapworkshop(handle.id);
    $('#workshopmenu').unbind("click");
  });

  // add handle to div "handle_container"
  $("#container > div.handle_container").append(handle);
}

function workshopdot_deselect(num){
  // handle
  var handle = document.createElement( 'span' );
  // give them unique ids
  handle.id =  num;
  // give them classes
  handle.className += " handle tooltip";
  //handle.css('color', color);
  $(handle).css('background', '#ffffff', 'important');
  $(handle).css('color', '#ffffff');
  $(handle).append('<span class="tooltiptext" style="background: #fff">'+'alle Workshops anzeigen'+'</span>');

 
  $(handle).click(function() {
    reset_ws();
  });

  // add handle to div "handle_container"
  $("#container > div.handle_container").append(handle);
}

function reset_ws() {
  var title = 'Workshop wählen';
  var menu_title = $("#ws_menu_title");
  menu_title.html(title);
  var subtitle = '';
  var menu_subtitle = $("#ws_menu_subtitle");
  menu_subtitle.html(subtitle);
  var menu = $('#workshopmenu');
  menu.unbind("click");
  menu.click(function() {
    handles = $('#container > div.handle_container');
    highlight(handles);
  });
  var menu_content = $("#ws_menu_content");
  menu_content.html("");
  flush_boxes();
  deselectworkshop();
  current_workshop_id = 0;
  //content = $('#container > .handle_container').clone();
  //menu_content.html(
  //  content
  //);
}

