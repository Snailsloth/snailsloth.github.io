$(document).ready(function() {
        $('#imageGallery').lightSlider({
          gallery:true,

          item:1,
          vertical:true,
          thumbItem:6,
          thumbMargin:15,
          slideMargin:15,
          enableThumbSwipe: true,
            onSliderLoad: function(el) {
                el.lightGallery({
                    selector: '#imageGallery .lslide'
                });
                $(".lSPager").mCustomScrollbar({
                  theme:"dark"
                });
            }   
        });


});