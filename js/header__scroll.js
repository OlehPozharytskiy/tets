$(function () {
  let header = $(".c-header");
  let hederHeight = header.height(); // вичислив висоту шапки

  function stikyHeader() {
    if ($(this).scrollTop() > 1) {
      header.addClass("c-header__fixed");
      $(".c-inner").css({
        paddingTop: hederHeight + "px", // відступив від body, на висоту шапки
      });
    } else {
      header.removeClass("c-header__fixed");
      $(".c-inner").css({
        paddingTop: 0, // удаляю отступ у body
      });
    }
  }

  $(window).scroll(function () {
    stikyHeader();
  });
  $(window).on("load", function () {
    stikyHeader();
  });
});
