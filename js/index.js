
$(document).ready(function(){
    /*Mobile Menu Toggle Functionality*/
    if ($(window).width() < 1440) {
        $('.nav__hamburger-menu').click(() => {
            $('.nav__list--mobile').toggleClass('hidden');
        });
    }
  
  });