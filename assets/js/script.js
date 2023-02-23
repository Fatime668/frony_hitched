'use strict'
//slider
$('.owl-carousel').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:3,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      400:{
        items:1
      },
      600:{
          items:2
      },
      1000:{
          items:1
      }

  }
})
//loadmore
$(document).ready(function(){
  $(".faqs-container").slice(0,4).show();
  $('.loadmore').on("click",function(){
    $(".faqs-container:hidden").slice(0,4).show();
    if($(".faqs-container:hidden").length == 0){
      $('.loadmore').hide();
    }
  });

  
})
//carousel



$('.carousel').slick({
  dots: true,
  infinite: true,
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
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		