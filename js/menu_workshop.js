

function update_workshop_menu(j) {
	//console.log(j);
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
  
  //colors
  controlPlane.material.color.setHex(metacontents[j].color.replace(/#/g , "0x"));
  $("#workshopmenu").css("background", metacontents[j].color);
  $("#ws_menu_title").css("color","black");
  $("#ws_menu_subtitle").css("color","black");
  $("#workshopmenu").css("color","black");
  $("#burger_icon").css("color","black");
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
    + '<p>'
    + vitamoderator
    + '</p>'
	+ '</div>'
  ); 
}
	if(material != ""){
	menu_content.append(
	'<div id="ws_pdf" class="ws_content">'
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

var menuisOpen = false;
$("#burger-check").on('click touch',function(){
	menuisOpen = !menuisOpen;
});


$('#navigation1 a').on('click touch',function() {
     $('.burger-check[type=checkbox]').prop('checked',false);
	 menuisOpen = false;
});


var wsIsOpen = false;

$("#ws_labels").on('click touch', function() {
	//act only if workshop is selected
	if(current_workshop_id != 13){
		var setter = !wsIsOpen;
		$('.burger-ws-check[type=checkbox]').prop('checked',setter);
		wsIsOpen = setter;
	} else {
		handles = $('div.handle_container');
		highlight(handles);
	}
});

function closeWsMenu(){
	var setter = false;
	$('.burger-ws-check[type=checkbox]').prop('checked',setter);
	wsIsOpen = setter;
}

$(document).on('click touchstart', function(e) {
	//close WS Menu if click outside of opended WS Menu
	if(wsIsOpen == true){
		$('.burger-ws-check[type=checkbox]').prop('checked',false);
		wsIsOpen = false;
	}
	// jump to start if click outside contentboxes on paper
	if(active == false){
		$('html, body').animate({
        scrollTop: $("#container_section").offset().top
		}, 1000);
		setstatus(true);
		reset_ws();
	}
	//navigate through timeline

	if(active == true && wsIsOpen == false && menuisOpen == false && current_workshop_id != 13){
	

		if(e.pageY < window.innerHeight /2.) camposIntern += 1;
		if(e.pageY > window.innerHeight /2.) camposIntern -= 1;			
	
	//delete tutorial on first zoom in
	if(tutorialdiv == true && camposIntern >= 0){
		tutorialdiv = false;
		$(document).ready(function(){
		setTimeout(function () {
		$('#tutorial').find("span").animate({opacity:1},function(){$(this).animate({opacity:0});  
		});
		}, 200);
		$('#tutorial').addClass('tutorial_unanimated');
		$('#tutorial').removeClass('tutorialanimation');
		$('#tutorial').remove();
		});
	}
	
		if(camposIntern >=allpins.length-2) camposIntern = allpins.length-2;
		
		if(camposIntern < -1 ) {
			camposIntern = -1;
			if(setOverview == false){
				setOverview = true;
				}
		}
		if(setOverview == true && camposIntern > -1 && batchescreated == true){
			setOverview = false;
			camposIntern = -1;
		}
		campos = camposIntern + 1;
	
	

	}


});

$("#ws_menu_content").on('click touchstart',function(event) {
	event.stopPropagation();
});

$("#topmenu").on('click touchstart touch',function(event) {
	event.stopPropagation();
});

$('#navigation1 a').on('click touchstart touch',function(event) {
	event.stopPropagation();
});

$(".handle_container").on('click touchstart',function(event) {
	event.stopPropagation();
});
$("#ws_labels").on('click touchstart',function(event) {
	event.stopPropagation();
});
$("#articleinfos").on('click touchstart',function(event) {
	event.stopPropagation();
});
