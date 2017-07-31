var active = true;

function setstatus(sitestatus){
	active = sitestatus;
}


// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
  var lastCall, timeoutId;
  return function () {
    var now = new Date().getTime();
    if (lastCall && now < (lastCall + interval) ) {
      // if we are inside the interval we wait
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        lastCall = now;
        fn.call();
      }, interval - (now - lastCall) );
    } else {
      // otherwise, we directly call the function 
      lastCall = now;
      fn.call();
    }
  };
}

function select_active() {
  var hidable_vis = $($(".handle").get());
  hidable_vis.push( $($(".dragbox").get()) );
  var hidable_dis = $($(".scroll-up").get());
  hidable_dis.push( $($(".scroll-down").get()) );
  hidable_dis.push( $($("#bottom_menus").get()) );

  var scrollPosition = $(window).scrollTop();
  var toleratePosition = scrollPosition + 80;

  targetSection = $("#container_section");
  var sectionTop = targetSection.offset().top;
  var sectionBottom = sectionTop + targetSection.height();

  // allow 100px of tolerance
  //if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {

  // test whether we are on a specific section instead
  //if (toleratePosition >= sectionTop && toleratePosition <= sectionBottom) {

  // allow 100px of tolerance from top
  if($(window).scrollTop() <=  100) {
	//console.log("set active");
    active = true;
    // disable scrolling out of container
    $("body").css("overflow", "hidden");
    $("#topmenu").detach().appendTo("#container");
    $("#signe_div").detach().appendTo("#container");
    //$("#bottom_menus").detach().appendTo("#container");
    $("#container").addClass('front');
    $("#container").removeClass('back');
    hidable_vis.each(function() {
      var $current = $(this);
      $current.addClass('nothidden');
      $current.removeClass('hidden');
    });
    hidable_dis.each(function() {
      var $current = $(this);
      //$current.addClass('display');
      $current.removeClass('nodisplay');
    });
  } 
  else{
	//console.log("set inactive");
    active = false;
    $("body").css("overflow", "initial");
    //flush_boxes();
    //reset_ws();
    $("#topmenu").detach().appendTo("body");
    $("#signe_div").detach().appendTo("body");
    //$("#bottom_menu").detach().appendTo("body");
    $("#container").addClass('back');
    $("#container").removeClass('front');
    hidable_vis.each(function() {
      var $current = $(this);
      $current.addClass('hidden');
      $current.removeClass('nothidden');
    });
    hidable_dis.each(function() {
      var $current = $(this);
      $current.addClass('nodisplay');
      //$current.removeClass('display');
    });
  }
}

function highlight(elem) {
  $(elem).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// and after that on scroll
$(window).scroll( throttle(select_active,100) );
