/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////




  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  /////////////////////////////////////// NEW STUFF /////////////////////////////////////////////
  
  const KEY = {
    
    "UP": 38,
    "DOWN": 40,
    "WKEY": 87,
    "SKEY": 83
    
  }
   // game variables
   
   var paddleOne = {};
   var paddleTwo = {};
   var pongBall = {};
   var score = 0;

  ///////////////////////////////////////////////////////////////////////////////////////////////

  // Game Item Objects
 paddleOne.coordX = 0;
 paddleOne.coordY = 200;
 paddleOne.speedX = 0;
 paddleOne.speedY = 0;
 paddleOne.id = $(paddleOne);

 paddleTwo.coordX = 0;
 paddleTwo.coordY = 200;
 paddleTwo.speedX = 0;
 paddleTwo.speedY = 0;
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)                           // change 'eventType' to the type of event you want to handle
 
 //////////////////////////////////////////NEW STUFF //////////////////////////////////////////////

  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp)

////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionPaddleOne();
    redrawPaddleOne();
    repositionPaddleTwo();
    redrawPaddleTwo();
    
  }
  /////////////////////////////////////// NEW STUFF /////////////////////////////////////////////////////////////
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
      if (event.which === KEY.UP) {
      paddleTwo.speedY = -5;
    } else if (event.which === KEY.DOWN) {
      paddleTwo.speedY = 5;
    }if (event.which === KEY.WKEY) {
        paddleOne.speedY = -5;
      } else if (event.which === KEY.SKEY) {
        paddleOne.speedY = 5;
      }
    
  }

   // function stops movement after releasing the key
   function handleKeyUp(event) {
     if (event.which === KEY.UP) {
      paddleTwo.speedY = 0;
    } else if (event.which === KEY.DOWN) {
      paddleTwo.speedY = 0;
    } if (event.which === KEY.WKEY) {
      paddleOne.speedY = 0;
    }  else if (event.which === KEY.SKEY) {
      paddleOne.speedY = 0;
    }

  }

  // attempt to create borders for the game
 function defineBorders(obj) {
  if (obj.height > $board.height || obj.height < $board.height) {
    obj.speedY = 0;
    obj.speedX = 0;
  }
 }
 defineBorders(paddleOne)

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// FACTORY FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

 

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionPaddleOne() {
    paddleOne.coordX += paddleOne.speedX;
    paddleOne.coordY += paddleOne.speedY;
  }
  
function repositionPaddleTwo() {
    paddleTwo.coordX += paddleTwo.speedX;
    paddleTwo.coordY += paddleTwo.speedY;
}

  function redrawPaddleOne() {
    $('#paddleOne').css("left", paddleOne.coordX)
                   .css("top", paddleOne.coordY);
    
   }
   function redrawPaddleTwo() {
    $('#paddleTwo').css("right", paddleTwo.coordX,)
                   .css("top", paddleTwo.coordY);
   }
}
