(function ($) {
  ("use strict");

  const requestURL =
    "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";
  // "https://jsonplaceholder.typicode.com/users";

  function sendRequest(method, url, body = null) {
    const headers = { "Content-Type": "application/json" };

    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    }).then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      return responce.json().then((error) => {
        const e = new Error("щось пішло не так");
        e.data = error;
        throw e;
      });
    });
  }

  // Validate email
  function validateEmail(email) {
    var re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  function writeError(text, container) {
    if (container.length) {
      container.removeClass("animate");
      container.text(String(text)).fadeIn();
      container.addClass("animate");
    } else {
      return;
    }
  }

  function clearInputValue(inputs) {
    inputs.each(function () {
      $(this).val("");
    });
  }

  $("#submit").click(function (e) {
    e.preventDefault();
    let inputs = $(".c-form__input");
    let email = $('.c-form input[type="email"]').val();
    let validate = validateEmail(email);
    let container = $(".c-form__error");
    inputs.each(function () {
      $(this).removeClass("error");
      writeError("", container);
    });

    let err = 0;

    inputs.each(function () {
      if (
        ($(this).prop("required") && !$(this).val()) ||
        ($(this).prop("required") && $(this).val().length < 4)
      ) {
        $(this).addClass("error");
        writeError(
          "Please enter the highlighted fields (min 4 symbols)",
          container
        );
        err++;
      } else if ($(this).attr("type") == "email" && !validate) {
        $(this).addClass("error");
        writeError("Email: " + email + " is not valid", container);
        err++;
      }
    });

    if (!err) {
      writeError("Form sending", container);
      // $(".c-form__feedback").submit();
      const body = {};
      inputs.each(function () {
        let name = $(this).prop("name");
        let value = $(this).val();
        body[name] = value;
      });
      sendRequest("POST", requestURL, body)
        .then((data) => [clearInputValue(inputs), console.log(data)])
        .catch((err) => writeError(err, container));
    }
  });

  $("#min_button").click(function (e) {
    let email = $(".e-form-min__mail").val();
    let container = $(".e-form-min__error");
    e.preventDefault();
    $(".e-form-min__mail").removeClass("error");
    if (validateEmail(email)) {
      $(".e-form-min").submit();
    } else {
      writeError("Email: " + email + " is not valid", container);
      $(".e-form-min__mail").addClass("error");
    }
  });
})(jQuery);
