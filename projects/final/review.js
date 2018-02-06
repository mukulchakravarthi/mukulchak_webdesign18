$(document).ready(function(){
	$('.menu-toggle').on('click', function() {
	  $(this).toggleClass('toggled-on');
	});


	var flip = 0;
	$( '.menu-toggle' ).click(function() {
	  $( '.test' ).toggle( flip++ % 2 === 0 );
	});
});