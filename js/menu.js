$(document).ready(function(){
  $("#nav-icon").click(function(){
    event.preventDefault();
    if( $("#top nav ul").hasClass("expand") ){
      $("#top nav ul").removeClass("expand");
      $("#top nav ul").addClass("collapse");
      $("#projects-content #title").removeClass("content-down");
      $("#projects-content #title").addClass("content-up");
      $("#about-content #title").removeClass("content-down");
      $("#about-content #title").addClass("content-up");
    }
    else{
      $("#top nav ul").removeClass("collapse");
      $("#top nav ul").addClass("expand");
      $("#projects-content #title").removeClass("content-up");
      $("#projects-content #title").addClass("content-down");
      $("#about-content #title").removeClass("content-up");
      $("#about-content #title").addClass("content-down");
    }
  });
});
