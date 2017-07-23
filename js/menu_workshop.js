

function update_workshop_menu(j) {

  var workshop = workshops[j];
  var contents = workshop.contents;
  var logline = contents.logline;
  var name = [];
  var vita = [];
  var pic = [];
  for(var i = 0; i < contents.experten.length; i++){
	name[i] = contents.experten[i].name;
	pic[i] = contents.experten[i].pic;
	vita[i] = contents.experten[i].vita;
  }
  var title = contents.title[0];
  var title2 = contents.title[1]; 
  var intro_short = contents.intro_short;


  // menu elements

  // logline
  var menu_content = $("#ws_menu_content");
  menu_content.html(
    '<div id="ws_info" class="ws_content">'
    + '<p>'
    + logline
    + '</p>'
    + '</div>'
  );
  // title
  var menu_title = $("#ws_menu_title");
  menu_title.html(title + " - " + title2 );
  // image
  for(var i = 0; i < name.length; i++){
  menu_content.append(
    '<div id="ws_vita" class="ws_content">'
    + '<img id="ws_image" src="./images/cv/'
    + pic[i]
    + '" />'
	+ '<p>'
    + name[i]
    + '</p>'
    + '<p>'
    + vita[i]
    + '</p>'
    + '</div>'
	+ '<br><br>'
  );
  }
  menu_content.append(
    '<div id="ws_intro" class="ws_content">'
    + '<p>'
    + intro_short
    + '</p>'
    + '<p>'
    + '</p>'
  );

}

