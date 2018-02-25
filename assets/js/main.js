$(document).ready(function () {

  // Add smooth scrolling on all links inside the navbar
  $("#navScrollspy a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  $(".selection").on("click", "span", function () {
    $("span").removeClass("active");
    $(this).toggleClass("active");
    if ($("#allSelection").hasClass("active")) {
      $(".front-end").show(1000);
      $(".full-stack").show(1000);
    }
    if ($("#frontEndSelection").hasClass("active")) {
      $(".front-end").show(1000);
      $(".full-stack").hide(1000);
    }
    if ($("#fullStackSelection").hasClass("active")) {
      $(".full-stack").show(1000);
      $(".front-end").hide(1000);
    }
  });
});