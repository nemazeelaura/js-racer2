
$(document).ready(function() {
    console.log('hello friends');


  //redirect to game.html
    $( 'button' ).click(function() {
          document.location.href = "game.html";
    });
        
      	//setting variable for # of clicks on red and blue
		var redCount = 0;
		var blueCount = 0;

      	//click boxes to move
      $( '.players > div' ).click(function() {
          console.log('hello');
          console.log($(this));


          $(this).animate({
              left: '+=300',
          }, 50 ,function() {

          	// getting the background color of the box clicked
            var clr = $(this).css("background-color");
            
            if(clr === "rgb(0, 0, 255)" ) {
                // if more than five clicks blue wins
                blueCount++;

                if(blueCount > 5) { 
					alert("BLUE WINS!");
                	// refresh page
               		 location.reload(true);
                }

            } else if(clr === "rgb(255, 0, 0)" ) {
                  // if more than five clicks red wins
                  redCount++;
				 if(redCount > 5) {
				 	alert("RED WINS!");
				 	// refresh page
				 	location.reload(true);
                }
                	
                
            }


        });


    });

 });
	