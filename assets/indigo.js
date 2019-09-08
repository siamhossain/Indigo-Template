/** Hero slider **/

$(document).ready(function(){
    $('.hero-slider-wrap').slick({
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplayspeed: 1000,
        prevArrow: $(".arrow-next"),
        nextArrow:$(".arrow-prev"),
       
     });
});

/** testimonial slider **/

$(document).ready(function(){
    $('.testimonial-area-wrap').slick({
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplayspeed: 1000,
        dots:true,
        
     });
});

/** number count animation **/

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/**  blog details slider **/

$(document).ready(function(){
    $('.blog-details-slider').slick({
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplayspeed: 1000,
        prevArrow: $(".blog-prev"),
        nextArrow:$(".blog-next"),
       
     });
});

/** magnific pop-up **/

$(document).ready(function() {
    $('.round-button').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
          
            patterns: {
              youtube: {
                index: 'youtube.com/', 
                src: 'https://www.youtube.com/embed/YZcT74ZqkOA?autoplay=1' // URL that will be set as a source for iframe.
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
          
            },
          
            srcAction: 'iframe_src', 
          }
      });
  });

/** Header Responsive **/


function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "nav-collaps") {
    x.className = "nav-list";
  } 
  else {
    x.className = "nav-collaps";
  }
}

/** pagination **/

$('.page-item').on('click', 'a', function(){
  $('.page-link').removeClass('active');
  $(this).addClass('active');
});



/**  isotope **/

$(document).ready(function(){
  $('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
      filter: selector
    });
    return false;
  });
});
