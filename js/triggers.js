var $hidable_vis = $($(".handle").get());
var $hidable_dis = $($(".scroll-up").get());

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
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $("#container").addClass('front');
    $("#container").removeClass('back');
    $hidable_vis.each(function() {
      var $current = $(this);
      $current.addClass('nothidden');
      $current.removeClass('hidden');
    });
    $hidable_dis.each(function() {
      var $current = $(this);
      $current.addClass('display');
      $current.removeClass('nodisplay');
    });
  } else {
    $("#container").addClass('back');
    $("#container").removeClass('front');
    $hidable_vis.each(function() {
      var $current = $(this);
      $current.addClass('hidden');
      $current.removeClass('nothidden');
    });
    $hidable_dis.each(function() {
      var $current = $(this);
      $current.addClass('nodisplay');
      $current.removeClass('display');
    });
  }
}

$(window).scroll( throttle(select_active,100) );
