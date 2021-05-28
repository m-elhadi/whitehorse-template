
// navbar menu
// $(".navbar a").on("click", function () {
//   for (var i = 0; i < 10; i++) {
//     $(".navbar a").css("color", "#fff");
//   }
//   $(this).css("color", "#e75b1e");
//   $(".hvr-underline-from-center:before").css("background", "#e75b1e");
// });

// Navbar scroll
$(window).on("scroll", function () {
  var sc = $(this).scrollTop();
  console.log(sc);
  if (sc > 100) {
    $(".navbar").addClass("scrollnav");
    $(".navbar a").addClass("scrollnav-a");
    $(".navbar-brand img").addClass("scroll-img");
    $('.top-scroll').addClass("shows");

  } else {
    $(".navbar").removeClass("scrollnav");
    $(".navbar a").removeClass("scrollnav-a");
    $(".navbar-brand img").removeClass("scroll-img");
    $('.top-scroll').removeClass("shows");
  }
});

$(window).on("scroll", function () {
  var sc2 = $(this).scrollTop();

  if(sc2>4140){
    $('.navbar a[href^="#"]').css("background", "transparent");
    $('.navbar a[href^="#contact"]').css({background:'#f1a40e',borderRadius:'10px'});
  }
  else if(sc2<4139&&sc2>3640){
    $('.navbar a[href^="#"]').css("background", "transparent");
    $('.navbar a[href^="#team"]').css({background:'#f1a40e',borderRadius:'10px'});
  }
  else if(sc2<3641&&sc2>2000){
    $('.navbar a[href^="#"]').css("background", "transparent");
    $('.navbar a[href^="#gallary"]').css({background:'#f1a40e',borderRadius:'10px'});;
  }
  else if(sc2<2001&&sc2>1300){
    $('.navbar a[href^="#"]').css("background", "transparent");
    $('.navbar a[href^="#service"]').css({background:'#f1a40e',borderRadius:'10px'});
  }
  else if(sc2<1000&&sc2>650){
    $('.navbar a[href^="#"]').css("background", "transparent");
    $('.navbar a[href^="#about"]').css({background:'#f1a40e',borderRadius:'10px'});
  }
  else if(sc2<649&&sc2>=0){
    $('.navbar a[href^="#"]').css("background", "transparent");
    $('.navbar a[href^="#home"]').css({background:'#f1a40e',borderRadius:'10px'});
  }
});

$('.service-carsoul').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
//
$('.brand-item').owlCarousel({
  loop:true,
  margin:50,
  dots:true,
  autoplay:true,
  autoplayTimeout:5000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})



// typed
$("#example").typer({
  strings: [" للمحلات", " للمكاتب", " للشركات "],
  typeSpeed: 150,
  backspaceSpeed: 200,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat: false,
  autoStart: true,
  startDelay: 100,
  useCursor: false,
});


//
$('.top-scroll').on('click',function(){
  $(window).scrollTop(0);

})


// 


$('.navbar a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// 
$('html, body').on('scroll', function() {

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

});


// 
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
//Light Box Plugin
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  maxWidth:700,
  maxHeight:700
})