(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".e-header__burger").click(function () {
      $(this).toggleClass("active");
      $("body").toggleClass("lock");
      $(".c-header__menu").slideToggle(300, function () {
        if ($(this).css("display") === "none") {
          $(this).removeAttr("style");
        }
      });
    });
    $(".e-navigation__links li a").click(function () {
      if ($(window).width() < 1101) {
        $(".c-header__menu").slideToggle(300, function () {
          if ($(this).css("display") !== "none") {
            $(this).removeAttr("style");
          }
        });
        $(".e-header__burger").removeClass("active");
        $("body").removeClass("lock");
      }
    });
  });
})(jQuery);
