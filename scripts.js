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
  
  $('#bt_app').change(function() {
    $('.website').css({
        transform: 'scale(0.5)',
        opacity: 0.4
    });
    $('.systems').css({
        transform: 'scale(0.5)',
        opacity: 0.4
    });
    $('.app').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_website').change(function() {
    $('.systems').css({
        transform: 'scale(0.5)',
        opacity: 0.4
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.4
    });
    $('.website').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_systems').change(function() {
    $('.website').css({
        transform: 'scale(0.5)',
        opacity: 0.4
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.4
    });
    $('.systems').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_todos').change(function() {
    $('.website').css({
        transform: 'scale(1)',
        opacity: 1
    });
    $('.app').css({
        transform: 'scale(1)',
        opacity: 1
    });
    $('.systems').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('.thumbnail').hover(function(){
    $(this).children(".cust-caption").slideDown();
  },
  function(){
    $(this).children(".cust-caption").fadeOut();
  });
  
});