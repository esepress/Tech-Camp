  ///////////////////////////////
  // Header Fixed
  ///////////////////////////////



var menu = $('#navigation');
var origOffsetY = menu.offset().top;

function scroll() {
   if ($(window).scrollTop() >= origOffsetY) {
       $('#navigation').addClass('nav-wrap');
       $('#services').addClass('exp');
       //$('.content').addClass('menu-padding');
   } else {
       $('#navigation').removeClass('nav-wrap');
       $('#services').removeClass('exp');
       //$('.content').removeClass('menu-padding');
   }



   if($(window).scrollTop() + $(window).height() == $(document).height()) {
   addPackery();
}


  }

 document.onscroll = scroll;


///////////////////////////////
// One page Smooth Scrolling
///////////////////////////////

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            return false;
        }
    }
});



/*--------------------------------------   change word  -------------------------------------*/

(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 1000,
                pauseSpeed: 100,
        child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
          items.each(function() {$(this).hide();})
          if(!o.child){var next = $(obj).children(':first');
          }else{var next = o.child;
          }
          $(next).fadeIn(o.fadeSpeed, function() {
            $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
              var next = $(this).next();
              if (next.length == 0){
                  next = $(obj).children(':first');
              }
              $(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
            })
          });
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('#rotate').rotaterator({fadeSpeed:1000, pauseSpeed:100});
 });


//  =========================testimonial=================================================

      $(document).ready(function() {
          $("#client-speech").owlCarousel({
            autoPlay: 3000,
              navigation : false, // Show next and prev buttons
              slideSpeed : 700,
              paginationSpeed : 1000,
              singleItem:true,
              pagination:false
          });
      });

//  ==============================  sponsor  ====================================================


      $(document).ready(function() {
          $("#sponsorship").owlCarousel({
              autoPlay: 3000,
              navigation : false, // Show next and prev buttons
              pagination:false,
              items : 4,
              itemsDesktop : [1199,3],
              itemsDesktopSmall : [979,3],
              itemsTablet: [600,3],
              itemsMobile : [400,2]
          });
      });            


// ======================================  faq  ===================================================

$(document).ready(function () 
    {

        $('.faq-p').hide();

        $('h5').click(function () 
        {
            $(this).next('.faq-p').slideToggle(500);
            $(this).siblings().next('.faq-p').slideUp(500);
            $(this).addClass('active');
            $(this).siblings('h5').removeClass('active');

            if($(this).children('img').attr("src") == "assets/img/icon-plus.png")
            {
                $(this).children('img').attr("src" , "assets/img/minus1.png")
                $(this).siblings('h5').children('img').attr("src" , "assets/img/icon-plus.png")
            }
            else
            {
                $(this).children('img').attr("src" , "assets/img/icon-plus.png")
                $(this).removeClass('active');
            }
        });

    });
