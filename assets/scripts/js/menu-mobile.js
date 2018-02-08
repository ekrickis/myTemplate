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