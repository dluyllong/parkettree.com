jQuery(document).ready(function($){
	'use strict';
	
	// INIT SLIDER PRODUCTS
	jQuery('.products-group .list').bxSlider({
		infiniteLoop: false,
		speed: 4000,
		pause: 600,			  
		minSlides: 4,
		maxSlides: 4,
		slideMargin: 0,
		pager: false, 
		controls: true
	});
	
});