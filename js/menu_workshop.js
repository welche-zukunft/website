// contents via get in js/contentboxes.js

reset_ws();

function reset_ws() {
  var title = 'Workshop wählen';
  var menu_title = $("#ws_menu_title");
  menu_title.html(title);
  var menu = $('#workshopmenu');
  menu.unbind("click");
  menu.click(function() {
    handles = $('#container > div.handle_container');
    highlight(handles);
  });
  var menu_content = $("#ws_menu_content");
  menu_content.html("");
  flush_boxes();
  //content = $('#container > .handle_container').clone();
  //menu_content.html(
  //  content
  //);
}

function update_workshop_menu(j) {

  var workshop = workshops[j];
  var contents = workshop.contents;
  var info = contents.info;
  var name = contents.name;
  var title = contents.title;
  var intro_short = contents.intro_short;
  var intro_long = contents.intro_long;
  var vita = contents.vita;
  var pic = contents.pic;

  // menu elements

  // info
  var menu_content = $("#ws_menu_content");
  menu_content.html(
    '<div id="ws_info" class="ws_content">'
    + '<p>'
    + info
    + '</p>'
    + '</div>'
  );
  // title
  var menu_title = $("#ws_menu_title");
  menu_title.html(title);
  // image
  menu_content.append(
    '<div id="ws_vita" class="ws_content">'
    + '<img id="ws_image" src="./images/ws/'
    + pic
    + '" />'
    + '<p>'
    + vita
    + '</p>'
    + '</div>'
  );
  menu_content.append(
    '<div id="ws_intro" class="ws_content">'
    + '<p>'
    + intro_short
    + '</p>'
    + '<p>'
    + intro_long
    + '</p>'
  );

}

