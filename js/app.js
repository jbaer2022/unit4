 /* Project 4 - OOP Game App
 * app.js */

const game = new Game();

$("#image").hide();


document.getElementById('btn__reset').addEventListener('click', function(){
   game.startGame();
    
});



//clicking the buttons
const $keys = $(document.getElementsByClassName("key"));



$(".key").on('click', function(k){
   game.handleInteraction($(k.target).text(), $(k.target));

});
 

$("body").keyup(function(k){
   if(game.started){
      game.handleInteraction(k.key, $(`.key:contains('${k.key}')`));
   }

});
 
