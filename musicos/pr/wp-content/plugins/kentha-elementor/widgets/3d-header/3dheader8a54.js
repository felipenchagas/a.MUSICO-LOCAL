( function( $ ) {
	var WidgetKenthaElementor3dHeader = function( $scope, $ ) {


		$('#qttesting').html('Ok 2' );


		if(!$('#qtBody').hasClass('elementor-editor-active')){
			return;
		}
		if(typeof( $.qtWebsiteObj ) !== 'object' ){
		}
		try {
			
			$.qtWebsiteObj.fn.dynamicBackgroundsV4('#qtBody .kentha-elementor-3d-header');
			$.qtWebsiteObj.fn.qt3DfxFunction.init();
		} catch(e) {
			console.log(e);
		}
	};
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/kentha-elementor-3dheader.default', WidgetKenthaElementor3dHeader );
	} );
} )( jQuery );