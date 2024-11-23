// Dropdown Effect


$(document).ready(function () {
  $("nav .container .list").click(function () {
    $("nav .container .nav-content .links").fadeToggle();
  });
});

// Scroll JS


$(window).scroll(function () {
  var windowOffset = $(this).scrollTop();
  
  if (windowOffset > 100 ) {
    $("nav").css({
      backgroundColor: "white",
  })
  }
  
  if (windowOffset < 100 ) {
    $("nav").css({
      backgroundColor: "#ffffff00",
  })
  }

});
