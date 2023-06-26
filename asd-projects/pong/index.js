/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    
    "UP": 38,
    "DOWN": 40,
    "WKEY": 87,
    "SKEY": 83
    
  }
  // Game Item Objects PADDLE ONE IS ON THE LEFT, PADDLE TWO ON THE RIGHT
  var paddleOne = factory("#paddleOne");
  var paddleTwo = factory("#paddleTwo");
  var pongBall = factory("#pongBall");
  
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveGameItem(paddleOne);
    moveGameItem(paddleTwo);
    defineBorders(paddleOne);
  }
  
  /* 
  Called in response to events.
  */
  /////////////////////////////////////// NEW STUFF /////////////////////////////////////////////////////////////
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
      ///////////////////////trying to define borders for the pong game///////////////////////
    
 
  
 



  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function factory(id){
    var object = {};
    object.id = id;
    object.coordX = parseFloat($(id).css('left'));
    object.coordY = parseFloat($(id).css('top'));
    object.width = $(id).width();
    object.height = $(id).height();
    object.speedX = 0;
    object.speedY = 0;
    return object;
  }
  function moveGameItem(gameItem) {
    if (gameItem === paddleOne || paddleTwo) {
      paddleOne.coordX += paddleOne.speedX;
      paddleOne.coordY += paddleOne.speedY;
      paddleTwo.coordX += paddleTwo.speedX;
      paddleTwo.coordY += paddleTwo.speedY;
      $("#paddleOne").css("left", paddleOne.coordX)
               .css("top", paddleOne.coordY);
      $("#paddleTwo").css("right", paddleTwo.coordX)
                     .css("top", paddleTwo.coordY);
    } else if (gameItem === pongBall) {
      
  }
  }


}

