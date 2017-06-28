
function workshopdot_create(color) {
  // create dragbox, contenbox, handle
  var dragbox = document.createElement( 'div' );
  var contentbox = document.createElement( 'div' );
  var handle = document.createElement( 'span' );
  // give them unique ids
  dragbox.id = 'dragbox_' + num;
  contentbox.id = 'contentbox_' + num;
  handle.id = 'handle_' + num;
  // give them classes
  dragbox.className += " dragbox";
  contentbox.className += " contentbox";
  handle.className += " handle";
  // where to spwan them
  var x = 100;
  var y = 250 + 50 * num;
  dragbox.style.left = x + 'px';
  dragbox.style.top = y + 'px';
  // make them draggable
  $(function() {
    $( dragbox ).draggable({
      containment: "parent",
      stack: "div.dragbox",
      handle: "span.handle",
      //delay: 300,
      //distance: 10,
      cancel: "div.nodrag",
      drag: function(){
        // track the position of the handler
        var id = $(this).attr("id");
        var currhandler = $("#" + id + " > span.handle");
        var handler_pos = track_pos_handler(currhandler);
        console.log( handler_pos );
      }
     });
    //$( contentbox ).resizable();
  });
  // fill contentbox with content
  contentbox.innerHTML = '<div class="nodrag content">' + contents[num] + '</div>';
  // add dragbox to div "contentplane"
  document.getElementById("contentplane").appendChild(dragbox);
  // add contentbox to dragbox
  dragbox.appendChild(contentbox);
  // add handle to dragbox
  dragbox.appendChild(handle);
}