var footballs = 0;

function footballClick(number){
    footballs = footballs + number;
    document.getElementById("footballs").innerHTML = footballs;
};

var fans = 0;

function buyFans(){
    var fanCost = Math.floor(10 * Math.pow(1.1,fans));     //works out the cost of this cursor
    if(footballs >= fanCost){                                   //checks that the player can afford the cursor
        fans = fans + 1;                                         //increases number of fans
    	footballs = footballs - fanCost;                          //removes the footballs spent
        document.getElementById('fans').innerHTML = fans;  //updates the number of fans for the user
        document.getElementById('footballs').innerHTML = footballs;  //updates the number of footballs for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,fans));       //works out the cost of the next cursor
    document.getElementById('fanCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	footballClick(fans);
	
}, 1000);

var seasonTicketHolders = 0;

function buySeasonTicketHolders(){
    var sthCost = Math.floor(300 * Math.pow(1.1,seasonTicketHolders));     
    if(footballs >= sthCost){                                   
        seasonTicketHolders = seasonTicketHolders + 1;           
    	footballs = footballs - sthCost;                          
        document.getElementById('seasonTicketHolders').innerHTML = seasonTicketHolders;  
        document.getElementById('footballs').innerHTML = footballs;  
    };
    var nextCost = Math.floor(300 * Math.pow(1.1,seasonTicketHolders));       
    document.getElementById('sthCost').innerHTML = nextCost; 
};
window.setInterval(function(){
	
	footballClick(seasonTicketHolders);
	
}, 100);



