jQuery(document).ready(function($){
	'use strict';
	
	var productGroupSliderCtrl,
		productGroupSliderEl = jQuery('.products-group .slider'),
		productGroupList = productGroupSliderEl.find('.list'),
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
		
	// INIT SLIDER PRODUCTS
	productGroupSliderCtrl = productGroupList.bxSlider({
		useCSS: false,
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
		productGroupSliderCtrl = productGroupList.bxSlider({
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