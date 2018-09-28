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
        opacity: 0.2
    });
    $('.system').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.c').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.java').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.python').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.lisp').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.app').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_website').change(function() {
    $('.system').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.c').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.java').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.python').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.lisp').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.website').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_systems').change(function() {
    $('.website').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.c').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.java').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.python').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.lisp').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.system').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_all').change(function() {
    $('.website').css({
        transform: 'scale(1)',
        opacity: 1
    });
    $('.app').css({
        transform: 'scale(1)',
        opacity: 1
    });
    $('.c').css({
        transform: 'scale(1)',
        opacity: 1
    });
    $('.java').css({
        transform: 'scale(1)',
        opacity: 1
    });
	$('.python').css({
        transform: 'scale(1)',
        opacity: 1
    });
	$('.lisp').css({
        transform: 'scale(1)',
        opacity: 1
    });
    $('.system').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_java').change(function() {
    $('.website').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.c').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.python').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.lisp').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.system').css({
        transform: 'scale(0.5)',
        opacity:0.2
    });
	$('.java').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_c').change(function() {
    $('.website').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.java').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.python').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.lisp').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.system').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.c').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_python').change(function() {
	  console.log("python");
    $('.website').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.c').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.java').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.lisp').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.system').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.python').css({
        transform: 'scale(1)',
        opacity: 1
    });
  });
  
  $('#bt_lisp').change(function() {
    $('.website').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.app').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.c').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.java').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.python').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
    $('.system').css({
        transform: 'scale(0.5)',
        opacity: 0.2
    });
	$('.lisp').css({
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