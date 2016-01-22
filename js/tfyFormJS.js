/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function () {
    $('#company').focus(); //cursor start
    $('#formContact').validate({//advanced validation form
        rules: {
            email: {
                required: true,
                email: true
            },
            email_confirm: {
                required: true,
                equalTo: '#email'
            },
            feedback: {
                required: true
            }
        }, //end of rules
        messages: {
            email: {
                required: "Field is required.",
                email: "Please type a valid email."
            },
            email_confirm: {
                required: "Field is required.",
                equalTo: "The two emails don't match."
            },
            feedback: {
                required: "Field is required."
            }
        }, // end of messages 
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        } // end errorPlacement
    });//end validate
}); //end ready
//$('#name').blur(function () {
//    var fieldValue = $(this).val();
//    if (isNaN(fieldValue)) {
//        alert('Please supply a number');
//    }
//});
//$('#formContact').submit(function () {
//    if ($('#email').val() == '') {
//        alert('Please supply a name in the Name field.');
//        return false;
//    }
