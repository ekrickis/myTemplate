/*On window scroll, 
	if 150px from top top-bar will shown,
	if not top-bar will be hidden*/
(function ($) {
	$(function(){
	    $(window).scroll(function() {
	        if ($(this).scrollTop() >= 150) {
	        	
	            $('.top-bar__mobile').addClass('top-bar--sticky');
	        }
	        else {
	            $('.top-bar__mobile').removeClass('top-bar--sticky');
	        }
	    });

	});
})(jQuery);