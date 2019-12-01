(function($, window, undefined) {
  $(document).ready(function() {
    $("form").validate({
      rules: {
        name: {
          required: true,
          minlength: 5
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          required: "Please, enter a name"
        },
        email: {
          required: "Please, enter an email",
          email: "Email is invalid"
        },
        message: {
          required: "Please, enter a message"
        }
      }
    });
  });
})(jQuery, window);
