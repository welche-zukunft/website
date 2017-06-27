var contents = [
  "Oh HAI",
  "halloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooomelone",
  "Kirschtorte",
  "Schokotee!",
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/7VG_s2PCH_c" frameborder="0" allowfullscreen></iframe>',
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur"
];

function contentbox_create(num) {
  var dragbox = document.createElement( 'div' );
  var contentbox = document.createElement( 'div' );
  var handle = document.createElement( 'span' );
  dragbox.id = 'dragbox_' + num;
  contentbox.id = 'contentbox_' + num;
  dragbox.className += " dragbox";
  contentbox.className += " contentbox";
  handle.className += " handle";
  var x = 200;
  var y = 50 + 50 * num;
  dragbox.style.left = x + 'px';
  dragbox.style.top = y + 'px';
  $(function() {
    $( dragbox ).draggable({
      containment: "parent",
      stack: "div.dragbox",
      handle: "span.handle",
      //delay: 300,
      //distance: 10,
      cancel: "div.nodrag",
      drag: function(){
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
        console.log("x: " + xPos );
        console.log("y: " + yPos );
      }
     });
    //$( contentbox ).resizable();
  });
  contentbox.innerHTML = '<div class="nodrag content">' + contents[num] + '</div>';
  document.getElementById("contentplane").appendChild(dragbox);
  dragbox.appendChild(contentbox);
  dragbox.appendChild(handle);
}

for (i = 0; i < contents.length; i++) { 
  contentbox_create(i);
}

