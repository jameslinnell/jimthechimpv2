var $ob = jQuery.noConflict()

$ob(function() {
    var open = false;
    $ob('.footerSlideButton').click(function() {
        if(open === false) {
            $ob('#footerSlideContent').animate({ height: '350px' });
            $ob(this).css('backgroundPosition', 'bottom left');
            open = true;
        } else {
            $ob('#footerSlideContent').animate({ height: '0px' });
            $ob(this).css('backgroundPosition', 'top left');
            open = false;
        }
    });
	
//	$ob('#footerSlideContainer').mouseover(function() {
//		if (open === false) {
//			$ob('#footerSlideContent').animate({
//				height: '350px'
//			});
//			$ob(this).css('backgroundPosition', 'bottom left');
//			open = true;
//		}
//	}).mouseout (function() {
//		if (open === true) {
//			$ob('#footerSlideContent').animate({
//				height: '0px'
//			});
//			$ob(this).css('backgroundPosition', 'top left');
//			open = false;
//		}
//    });
	
	
});

