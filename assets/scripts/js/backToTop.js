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