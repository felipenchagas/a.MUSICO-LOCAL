( function( $ ) {
	var WidgetKenthaElementorCardsGrid = function( $scope, $ ) {
		if(!$('#qtBody').hasClass('elementor-editor-active')){
			return;
		}
		if(typeof( $.qtWebsiteObj ) !== 'object' ){
			console.log( 'Missing main theme script' );  
		}
		try {
			$.qtWebsiteObj.fn.dynamicBackgroundsV4('#qtBody .kentha-elementor-cards-grid');
		} catch(e) {
			console.log(e);
		}
	};
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/kentha-elementor-cards-grid.default', WidgetKenthaElementorCardsGrid );
	} );
} )( jQuery );