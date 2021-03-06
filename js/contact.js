$(function () {
    "use strict";

    // init the validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "https://formsubmit.co/ajax/contact@sergiorodas.com";

            // POST values in the background the the script URL
            $.ajax({
                url: url,
                method: "POST",
                data: $(this).serialize(),
                dataType: "json",
                success: function (data)
                {

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;

                    if(document.querySelector(".contact-button-2").lastChild.textContent == "Enviar Mensaje") {
                        var messageText = "El formulario ha sido enviado exitosamente.";
                    } else {
                        var messageText = data.message;
                    }

                    

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
