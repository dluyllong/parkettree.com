jQuery(document).ready(function($){
	
	$('#back-top').click(function () {
		if(navigator.appName!='Opera'){$('html, body').animate({ scrollTop: 0 }, 1000)}
		else{$('html').animate({ scrollTop: 0 }, 1000)}
	});
	
});