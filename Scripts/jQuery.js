$(document).ready(function () {

  // Панель навигации - появляется при движении вниз
  var waypoint = new Waypoint({
    element: document.getElementById('our-values'),
    handler: function (direction) {
      if (direction == 'down') {
        $('nav').attr('id', 'sticky-panel');

      } else {
        $('nav').removeAttr('id');
      }
    },
    offset: 30
  });


  // Панель навигации - исчезает внизу
  var waypoint = new Waypoint({
    element: document.getElementById('pies-images-section'),
    handler: function (direction) {
      if (direction == 'down') {
        $('nav').removeAttr('id');

      } else {
        $('nav').attr('id', 'sticky-panel');
      }
    },
    offset: 70
  });


  $('.order-button').click(function () {
    $('html, body').animate({
      scrollTop: $('#how-to-order').offset().top
    }, 1000);
  });

  $('.about-us').click(function () {
    $('html, body').animate({
      scrollTop: $('#our-values').offset().top
    }, 1000);
  });

  $('.catalogue').click(function () {
    $('html, body').animate({
      scrollTop: $('#pies-images-section').offset().top
    }, 1000);
  });

  $('.make-order').click(function () {
    $('html, body').animate({
      scrollTop: $('#how-to-order').offset().top
    }, 1000);
  });

  $('.contacts').click(function () {
    $('html, body').animate({
      scrollTop: $('#cities-section').offset().top
    }, 1000);
  });

  $('.feedback').click(function () {
    $('html, body').animate({
      scrollTop: $('#feedback-section').offset().top
    }, 1000);
  });

  $('.to-beginning').click(function () {
    $('html, body').animate({
      scrollTop: $('#beginning').offset().top
    }, 1000);
  });

  // Секции
  var waypoint = new Waypoint({
    element: document.getElementById('our-values'),
    handler: function (direction) {
      $('.col-6.animright').addClass('animate__animated animate__fadeInRight');
    },
    offset: 500
  });


  var waypoint = new Waypoint({
    element: document.getElementById('anstart2'),
    handler: function (direction) {
      $('.col-6.animleft').addClass('animate__animated animate__fadeInLeft');
    },
    offset: 500
  });


  var waypoint = new Waypoint({
    element: document.getElementById('anstart3'),
    handler: function (direction) {
      $('.col-6.animright3').addClass('animate__animated animate__fadeInRight');
    },
    offset: 500
  });

  var waypoint = new Waypoint({
    element: document.getElementById('feedback-section'),
    handler: function (direction) {
      $('.col-4.anim4').addClass('animate__animated animate__fadeInUp');
    },
    offset: 500
  });


  // Hamburger menu
  $('.mobile-nav-icon').click(function () {
    var icon = $('.mobile-nav-icon i');
    if (icon.hasClass('ion-md-menu')) {
      icon.removeClass('ion-md-menu');
      icon.addClass('ion-md-close');
    } else {
      icon.removeClass('ion-md-close');
      icon.addClass('ion-md-menu');
    }
    $('#uppermenu').slideToggle(300);
  });

});