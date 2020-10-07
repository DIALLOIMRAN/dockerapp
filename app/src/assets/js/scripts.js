jQuery(document).ready(function ($) {

  // $("#LoginForm").validate();

  $('[data-toggle="tooltip"]').tooltip();

  $(".toggle-password").click(function() {
    $(this).toggleClass("uil-eye uil-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $('.FeaturesCarousel-Items').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  var current_fs, next_fs, previous_fs;
  var left, opacity, scale;
  var animating;

  $(".Next-FieldSet").click(function(){
    if($("#LoginForm").valid()){
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      previous_fs = $(this).parent().next();
      next_fs.show();
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          scale = 1 - (1 - now) * 0.2;
          left = (now * 50)+"%";
          opacity = 1 - now;
          next_fs.css({'left': left, 'opacity': opacity, 'transform': 'translate(0%, -50%)'});
        },
        complete: function(){
          current_fs.hide();
          animating = false;
        },
      });
    }
  });

  $(".JoinProgramme-BTN").click(function(){
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      previous_fs = $(this).parent().next();
      $('.Join-Programme').show();
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          scale = 1 - (1 - now) * 0.2;
          left = (now * 50)+"%";
          opacity = 1 - now;
          $('.Join-Programme').css({'left': left, 'opacity': opacity, 'transform': 'translate(0%, -50%)'});
        },
        complete: function(){
          current_fs.hide();
          animating = false;
        },
      });
  });

  $(".Prev-FieldSet").click(function(){
    animating = true;
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    previous_fs.show();
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        scale = 0.8 + (1 - now) * 0.2;
        left = ((1-now) * 50)+"%";
        opacity = 1 - now;
        current_fs.css({'left': left});
        previous_fs.css({'left': '0', 'transform': 'translate(0%, -50%)', 'opacity': opacity});
      },
      duration: 300,
      complete: function(){
        current_fs.hide();
        animating = false;
      },
    });
  });

  // RESPONSIVE

  var width = $(window).width();

  if( (width <= 768) ){


    $('.ToggleAlerts-BTN').click(function(){
      $('body').toggleClass('HiddenClass1');
      $('.NotificationsContainer').toggleClass('Toggled-NotificationsContainer');
    });

    $(document).on("click", function(event){
      if(!$(event.target).closest(".ToggleAlerts-BTN").length){
          $('.NotificationsContainer').removeClass('Toggled-NotificationsContainer');
          $('body').removeClass('HiddenClass1');
      }
    });

    $('.ToggleMenu-BTN').click(function(){
      $('.Menu-Side').toggleClass('ToggledMenu-Side');
      $('body').toggleClass('HiddenClass2');
    });

    $(document).on("click", function(event){
      if(!$(event.target).closest(".ToggleMenu-BTN").length){
          $('.Menu-Side').removeClass('ToggledMenu-Side');
          $('body').removeClass('HiddenClass2');
      }
    });

    $('.NotificationsContainer').appendTo('.ToggleAlerts');

    $('.StatsBox .row').slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  } else {

    $('.AlertBox-BTN').click(function(){
      $('.NotificationsContainer').toggleClass('Toggled-NotificationsContainer');
    });

    $(document).on("click", function(event){
      if(!$(event.target).closest(".AlertBox-BTN").length){
          $('.NotificationsContainer').removeClass('Toggled-NotificationsContainer');
      }
    });

  }

});
