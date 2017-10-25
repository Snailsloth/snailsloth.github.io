$(document).ready(function () {
	//dev swiper  
    var devSwiper = new Swiper('.swiper-container', {
        spaceBetween: 5,
        onSlideChangeStart: function(event) {
	    	var id = $(".swiper-slide-active").attr('id').slice(6);
			$('#btn'+id).addClass('active_dev_stage').siblings().removeClass('active_dev_stage');
	    }
    });  



	$('.dev_pagination_rounds').on('mouseover', function() {
		var butNum = $(this).attr("id").substring(3);
    	$(this).addClass('active_dev_stage').siblings().removeClass('active_dev_stage');
    	devSwiper.slideTo(butNum - 1,1000,false);
    	var butCount = $('.dev_pagination_rounds').length;
    	var devProgress = (butNum * 100) / butCount;
    	$(".dev-slider-progressbar").attr("value", devProgress) ;
    });


		//progressbar @ddevslider
		jQuery(function () {

	        	var animate = setInterval(function () {

	            window.progressbar && (progressbar.value += 10);

		            if (!window.progressbar || progressbar.value >= progressbar.max) {
		                clearInterval(animate);
		            }

	        	}, 1000);

	    });



	//office-swiper
	var swiper = new Swiper('.swiper-office-container', {
		// Disable preloading of all images
	    preloadImages: false,
	    // Enable lazy loading
	    lazyLoading: true,
	    watchSlidesVisibility: true,
        pagination: '.swiper-office-pagination',
        effect: 'coverflow',
        initialSlide: 1,
        loop:true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '3',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 20,
            modifier: 1,
            slideShadows : false
        }
    });

    //disable "ghost_dragging_images"
    $("img").mousedown(function(){
    return false;
    });

});
