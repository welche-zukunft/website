// contents via get in js/contentboxes.js

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
  menu_content.html('<span id="ws_content_span">' + info + '</span>');
  // title
  var menu_title = $("#ws_menu_title");
  menu_title.html(title);
  // image
  menu_content.prepend('<img id="ws_image" src="./images/ws/' + pic + '" />')

}

