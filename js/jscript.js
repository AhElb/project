//  Preloader
jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});


(function ($) {


    $("#togglePassword").click(function(){






// Check the checkbox state
  if($("#password_input").hasClass("pass")){

   // Changing type attribute
$("#password_input").attr('type','text') ;
$("#password_input").removeClass("pass");
$("#password_input").addClass("showt");
    $("#togglePassword").removeClass('far fa-eye');
        $("#togglePassword").addClass('fas fa-eye-slash');




   
  }
  else if ($("#password_input").hasClass("showt")) {



$("#password_input").attr('type','password') ;
$("#password_input").addClass("pass");


$("#password_input").removeClass("showt");

$("#togglePassword").removeClass('fas fa-eye-slash');
        $("#togglePassword").addClass('far fa-eye ');


   
  }

           

    });


    //  Header fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass("animated slideInDown fixed"), 3000;
        } else {
            $('.header').removeClass("animated slideInDown fixed"), 3000;
        }
    });

    $("#menu-slide").click(function() {
        $('#navbarNavDropdown ').toggleClass( "show" ) , 3000;
        });



})(jQuery);;

