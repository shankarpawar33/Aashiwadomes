(function($) { // Begin jQuery
    $(function() { // DOM ready
$('#disclaimerModal').modal('show');
         
        /*var docWidth = document.documentElement.offsetWidth;

        [].forEach.call(
          document.querySelectorAll('*'),
          function(el) {
            if (el.offsetWidth > docWidth) {
              console.log(el);
            }
              
            
          }

        );
        console.log('done overflow x elements');

        var screenWidth = window.innerWidth;
        var visibleElements = jQuery(":visible");
        visibleElements.each(function(){
            var $this = jQuery(this);
            if($this.width() > screenWidth){
                $this.css("border", "1px solid green");
                console.log("Screen width is " + screenWidth + " and the following element is " + $this.width(), $this);
            }
        });*/





        /* $("html, body").animate({ scrollTop: 0 }, 500); 
         */

        /*
         var slider = $('.responsive').slick({
              dots: false,
              infinite: false,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:true,
              autoplay:false,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
            });


        */

        /*var owl = $('.owl-carousel').owlCarousel({
            loop:true,
            nav:false,
            items: 1,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
            center: true
        })*/
        var owl2 = $(".home-slider-modal").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,

            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: true
        });
        $(".home-slider-modal-nav .next").click(function(e) {
            owl2.trigger('next.owl.carousel');
        });

        $(".home-slider-modal-nav .previous").click(function(e) {
            owl2.trigger('prev.owl.carousel');
        });


        var owl3 = $(".site-status-slider").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,

            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: true
        });
        $(".site-status-slider-nav .next").click(function(e) {
            owl3.trigger('next.owl.carousel');
        });

        $(".site-status-slider-nav .previous").click(function(e) {
            owl3.trigger('prev.owl.carousel');
        });

        var owl4 = $(".gallery-slider-modal").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,

            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: true
        });
        $(".gallery-slider-modal-nav .next").click(function(e) {
            owl4.trigger('next.owl.carousel');
        });

        $(".gallery-slider-modal-nav .previous").click(function(e) {
            owl4.trigger('prev.owl.carousel');
        });







        var owl1 = $(".owl-carousel.home-slider").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,

            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: true
        });

        var owl = $(".gallery-slider").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,

            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: false
        });

        $(".gallery-slider-nav .next").click(function(e) {
            owl.trigger('next.owl.carousel');
        });

        $(".gallery-slider-nav .previous").click(function(e) {
            owl.trigger('prev.owl.carousel');
        });

        owl.on('changed.owl.carousel', function(event) {
            var classindex = event.item.index + 1;
            console.log(event.item.index);
            $(".album .description").removeClass('present');
            setTimeout(function() {
                $(".album .description.desc" + classindex).addClass('present');
            }, 200);
        })

        $(".mobile-nav-toggle").click(function(event) {
            $(".mobile-nav-toggle").toggleClass('open');
            $(".menu-right-items").toggleClass('open');
            $('body,html').toggleClass();
        });



        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            event.preventDefault();

        });
/* 
        $(document).ready(function() {
            var scroll_start = 0;
            var startchange = $('#home');
            var offset = startchange.offset();
            $(document).scroll(function() {
                scroll_start = $(this).scrollTop();
                if (scroll_start > offset.top) {
                    $('.menu').css('background-color', 'white');
                    $('.menu').css('box-shadow', ' 0px 2px 5px rgba(0, 0, 0, 0.25)');
                } else {
                    $('.menu').css('background-color', 'transparent');
                    $('.menu').css('box-shadow', ' 0px 0px 0px rgba(0, 0, 0, 0.25)');

                }
            });
        });
 */





    }); // end DOM ready
})(jQuery); // end jQuery

function goto(elem) {
    $(".mobile-nav-toggle").removeClass('open');
    $(".menu-right-items").removeClass('open');
    $('html, body').animate({
        scrollTop: ($(elem).offset().top - 120)
    }, 500, function() {

    });
}
function go(a){
    if(a=="b1")
    window.location="ThisIsHome.html";
else if(a=="b2")
window.location="ThisIsHome.html";
else if(a=="b3")
window.location="ThisIsHome.html";
else if(a=="b4")
window.location="ThisIsHome.html";
else if(a=="b5")
window.location="ThisIsHome.html";
else if(a=="b6")
window.location="ThisIsHome.html";

}
function goToMain(a){
  if(a=="home")  
     window.location="index.html#home";
 else if(a=="story")
 window.location="index.html#story";
  else if(a=="Specifications")
window.location="index.html#Specifications";
else if(a=="gallery")
window.location="index.html#gallery" ;
else if(a=="contact")
window.location="index.html#contact";

}