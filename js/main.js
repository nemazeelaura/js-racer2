
$(document).ready(function() {
	console.log('hello friends'); 


  //redirect to game.html
	$( 'button' ).click(function() {
  		document.location.href = "game.html";
	});

  //click boxes to move
  $( '.players > div' ).click(function() {
  	console.log('hello');
  	console.log($(this));
  		// '.box'.keydown(function() {
  		// 	console.log('hello');	
	
	});




});

		// 	$('.box').toggleClass('alt'); 
	// 	$('.box').toggleClass('animated');
	// });


	// $('#js-translate').click(function(e){
		//   e.preventDefault();
		//   $('.box').toggleClass('--move');
		//   $('.box1').toggleClass('--move');
		// });	
		  		// '.box'.keydown(function() {
  		// 	console.log('hello');	
	