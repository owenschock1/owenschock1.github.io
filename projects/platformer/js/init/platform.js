(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(400, 250, .5, .1);
        createPlatform(380, 600, 1, .1)
        createPlatform(650, 390, 1.7, .1);
        createPlatform(50, 460, .9, .1);
        createPlatform(589, 520, .7, .1);
        createPlatform(110, 380, 1, .1);
        createPlatform(140, 140, 1, .1);
        createPlatform(870, 450, .5, .1);
        createPlatform(140, 560, 1, .1)

        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);