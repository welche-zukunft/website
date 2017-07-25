

function update_workshop_menu(j) {
	console.log(j);
  var workshop = workshops[j];
  //var contents = workshop.contents;
  var logline = metacontents[j].logline;
  var name = [];
  var vita = [];
  var pic = [];
  for(var i = 0; i < metacontents[j].experten.length; i++){
	name[i] = metacontents[j].experten[i].name;
	pic[i] = metacontents[j].experten[i].pic;
	vita[i] = metacontents[j].experten[i].vita;
  }
  var title = metacontents[j].title[0];
  var title2 = metacontents[j].title[1]; 
  var intro_short = metacontents[j].intro_short;
  var namemoderator = metacontents[j].namemoderator;
  var vitamoderator = metacontents[j].vitamoderator;
  var material = metacontents[j].material;

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
  var menu_subtitle = $("#ws_menu_subtitle");
  menu_title.html(title + ":");
  menu_subtitle.html(title2);
  menu_content.append(
    '<div id="ws_intro" class="ws_content">'
    + '<p>'
    + intro_short
    + '</p>'
    + '<p class="ws_hl">'
	+ "Experten"
    + '</p>'
	+ '</div>'
  ); 
  // image
  for(var i = 0; i < name.length; i++){ 
	menu_content.append(
    '<div id="ws_vita" class="ws_content">'
    + '<img id="ws_image" src="./images/cv/'
    + pic[i]
    + '" />'
    + '<p>'
    + vita[i]
    + '</p>'
    + '</div>'
	+ '<br><br>'
  );
  }
if(namemoderator != ""){
	menu_content.append(
    '<div id="ws_vita" class="ws_content">'
    + '<p class="ws_hl">'
	+ "Moderation"
    + '</p>'
	+ '<p class="ws_name">'
    + namemoderator
    + '</p>'
    + '<p>'
    + vitamoderator
    + '</p>'
	+ '</div>'
  ); 
}
	if(material != ""){
	menu_content.append(
	'<div id="ws_intro" class="ws_content">'
	+'<p>'
	+ '<a href="./pdf/' + material + '" target="_blank">'
    + ">> Link zu Workshop-PDF"
    + '</a>'
	+ '</p>'
	+ '</div>'
	);
}
	//menu_content.append('</div>');

}

