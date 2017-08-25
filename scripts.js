$(document).ready(function () {
  
  var $navbar = $('.navbar');
  $(window).scroll(function () {
    if ( $(this).scrollTop() >= 340 && !$navbar.hasClass('navbar-scrolling') ) {
      $navbar.addClass('navbar-scrolling');
    } else if ( $(this).scrollTop() < 340 && $navbar.hasClass('navbar-scrolling') ) {
      $navbar.removeClass('navbar-scrolling');
    }
  });
  
  $('.navbar-nav a[href*=#]:not([href=#])').click(function () {
    $('.navbar-nav a').removeClass('active');
    $(this).addClass('active');   
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 30
        }, {
          duration: 1000,
          easing: 'easeOutExpo'
        });
        return false;
      }
    }
  });
  
});