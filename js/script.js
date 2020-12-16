$(document).ready(function(){
  [].forEach.call(
    document.querySelectorAll(".item__image"),
    function (el) {
      tns({
        container: el,
        items: 1,
        nav: true,
        controls: false,
        fixedWidth: 360,
        mouseDrag: true,
      });
    }
  );
  $(".sorting__view").on("click tap", function() {
    $(".sorting__view").removeClass("active")
    $(this).addClass("active")
  })
  $(".sorting__quantites").on("click tap", function() {
    $(".sorting__quantites").removeClass("active")
    $(this).addClass("active")
  })
  $('.tabs').tabs();
  $('select').formSelect();
});