var active = false;

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
  // allow 100px of tolerance
  if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
    active = true;
    $("#topmenu").detach().appendTo("#container");
    $("#signe_div").detach().appendTo("#container");
    $("#anmeldung_link").detach().appendTo("#container");
    $("#container").addClass('front');
    $("#container").removeClass('back');
    hidable_vis.each(function() {
      var $current = $(this);
      $current.addClass('nothidden');
      $current.removeClass('hidden');
    });
    hidable_dis.each(function() {
      var $current = $(this);
      $current.addClass('display');
      $current.removeClass('nodisplay');
    });
  } else {
    active = false;
    $("#topmenu").detach().appendTo("body");
    $("#signe_div").detach().appendTo("body");
    $("#anmeldung_link").detach().appendTo("body");
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
      $current.removeClass('display');
    });
  }
}

// fire once at start
select_active();
// and after that on scroll
$(window).scroll( throttle(select_active,100) );
