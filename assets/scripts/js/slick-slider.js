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