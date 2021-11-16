// reload file
// bug fixed

$(function () {
  let header = $(".c-header");
  let hederHeight = header.height();

  function stikyHeader() {
    if ($(this).scrollTop() > 1) {
      header.addClass("c-header__fixed");
      $(".c-inner").css({
        paddingTop: hederHeight + "px",
      });
    } else {
      header.removeClass("c-header__fixed");
      $(".c-inner").css({
        paddingTop: 0,
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
