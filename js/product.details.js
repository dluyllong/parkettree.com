jQuery(document).ready(function($){
	'use strict';
	
	var productGroupSliderCtrl,
		productGroupSliderEl = jQuery('.products-group .slider'),
		setItemSlideNumber = function () {
			var i = 4;
			if ( productGroupSliderEl.width() < 970 ) {
				i--;
			}
			if ( productGroupSliderEl.width() < 750 ) {
				i--;
			}
			if ( productGroupSliderEl.width() < 480 ) {
				i--;
			}
			return i;
		};
	
	//console.log(setItemSlideNumber());
	// INIT SLIDER PRODUCTS
	productGroupSliderCtrl = jQuery('.products-group .list').bxSlider({
		infiniteLoop: false,
		speed: 4000,
		pause: 600,			  
		minSlides: setItemSlideNumber(),
		maxSlides: setItemSlideNumber(),
		moveSlides: 1,
		slideMargin: 0,
		slideWidth: 293,
		pager: false, 
		controls: true
	});
	
	jQuery(window).resize(function () {
		productGroupSliderCtrl.destroySlider();
		productGroupSliderCtrl = jQuery('.products-group .list').bxSlider({
			infiniteLoop: false,
			speed: 4000,
			pause: 600,			  
			minSlides: setItemSlideNumber(),
			maxSlides: setItemSlideNumber(),
			moveSlides: 1,
			slideMargin: 0,
			slideWidth: 293,
			pager: false, 
			controls: true
		});
		
	});
	
});