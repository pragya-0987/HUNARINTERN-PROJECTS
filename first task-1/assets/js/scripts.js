/*
Author       : theme_ocean 
Template Name: Ajmain - Personal Portfolio/CV HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
			
		/*START MENU JS*/				
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});
		
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  	
		/*END MENU JS*/
		
		/* START PORTFOLIO JS */
		$('.grid').mixitup({
		targetSelector: '.mix',
		});
		/* END PORTFOLIO JS */	
		
		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/				

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/		

		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[980,1],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/		
			
	}); 		
	
	
	/*START MAP JS*/		
	$(".map").hide();
	
	/*START SHOW FUNCTION*/
	$(".map_title").on('click', function(){
	$(".map").show(500);
	$(".map_title").hide(500);
	});

	/*START HIDE FUNCTION*/
	$(".close_btn").on('click', function(){
		$(".map").hide(500);
		$(".map_title").show(500);
	});
	/*END MAP JS*/
	
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
			
})(jQuery);


  

