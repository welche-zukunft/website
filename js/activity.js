$( "#anmeldung_link > a" ).click(function() {
  $( "#anmeldung" ).animate({
    left: "0",
  }, 1000, function() {
    // Animation complete.
  });
});
$( "#anmeldung > div.flex > div.paper > div.align_right > a.pseudo" ).click(function() {
  $( "#anmeldung" ).animate({
    left: "100vw",
  }, 1000, function() {
    // Animation complete.
  });
});
