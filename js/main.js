jQuery(document).ready(function($){
	'use strict';
	
	// RETURN TOP BUTTON
	jQuery('#back-top').click(function () {
		if(navigator.appName!='Opera'){$('html, body').animate({ scrollTop: 0 }, 1000)}
		else{$('html').animate({ scrollTop: 0 }, 1000)}
	});
	
	// hide #back-top first
	jQuery("#back-top").hide();
	
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('#back-top').fadeIn();
		} else {
			jQuery('#back-top').fadeOut();
		}
		if (jQuery(this).scrollTop() > jQuery('.header-top').outerHeight()) {
			jQuery('.ma-header-container').addClass('navbar-fixed-top');
			jQuery('.header-posion').css('padding-bottom',jQuery('.ma-header-container').outerHeight());
			
		} else {
			jQuery('.ma-header-container').removeClass('navbar-fixed-top');
			jQuery('.header-posion').css('padding-bottom',0);
		}
	});
	
	// SHOW / HIDE USER MENU
	jQuery('.menu.dropit li').bind('mouseover tap', function(){
		if ( jQuery(this).find('.dropit-submenu').hasClass('hide') )
			jQuery(this).find('.dropit-submenu').removeClass('hide');
	});
	jQuery('.menu.dropit li').bind('mouseleave tap', function(){
		if ( !jQuery(this).find('.dropit-submenu').hasClass('hide') )
			jQuery(this).find('.dropit-submenu').addClass('hide');
	});
	
	// SHOW / HIDE MINI SEARCH FORM
	jQuery('.quick-access').bind('mouseover tap', function(){
		if ( jQuery(this).find('form').hasClass('hide') )
			jQuery(this).find('form').removeClass('hide');
	});
	jQuery('.quick-access').bind('mouseleave tap', function(){
		if ( !jQuery(this).find('form').hasClass('hide') )
			jQuery(this).find('form').addClass('hide');
	});
	
	
	
	// INIT SLIDER BRAND
	jQuery('.ma-brand-slider-contain .bx-slider').bxSlider({
		infiniteLoop: 0,
		speed: 4000,
		pause: 600,			  
		minSlides: 2,
		maxSlides: 6,
		slideWidth: 161,
		slideMargin: 0,
		pager:false, 
		controls: true,
	});
	
	initPage();
	
	function initPage () {
		jQuery('.checkbox input').prop('checked',false);
		jQuery('.checkbox label').click(function(){
			var thisEl = jQuery(this),
				parent = thisEl.parent(),
				input = thisEl.find('input');
			
			input.prop('checked',!input.prop('checked'));
			
			if ( input.prop('checked') ) {
				parent.addClass('checked');
			} else {
				parent.removeClass('checked');
			}
			return false;
		});
	}
});