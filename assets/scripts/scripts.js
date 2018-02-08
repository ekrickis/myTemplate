/*
 * On scrollToTop button press 
 * scrolls to page top.
 */
(function($){
	$(document).ready(function(){

		$(window).scroll(function(){
			if($(this).scrollTop() > 150) {
				$('.scrollToTop').fadeIn();
			}
			else {
				$('.scrollToTop').fadeOut();
			}
		})

		$('.scrollToTop').click(function(){
			$('html').animate({scrollTop : 0}, 'slow');
		})
	});
})(jQuery);
/*
 * On hamburger press shows Nav menu if hidden
 * otherwise hides it.
 */

(function($){
	$( document ).ready(function() {

		var hamburger = $(".hamburger");
		var closeBtn = $( ".close-button");
		var menu = $( ".mobiile__services-menu" );

		showMenuOnClick (hamburger, closeBtn);
		showMenuOnClick (closeBtn, hamburger);

		function showMenuOnClick (showBtn, hideBtn) {
			hideBtn.click(function() {
				menu.slideToggle( "fast", function() {
					hideBtn.hide();
					showBtn.show();
				});
			});			
		}

	});

})(jQuery);
/*
 * Settings for Slick slider
 */

(function($){
	jQuery(document).ready(function ($) {

		$('.center').slick({
			centerMode: true,
			slidesToShow: 1,
			dots: true,
			arrows: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
				  breakpoint: 1024,
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

	});    
})(jQuery);
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