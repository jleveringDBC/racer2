// $(document).ready(function() {

  
 
  
// });

function startGame()
{
  // $("#go").on("click", function(e) {
      var form = $("form").select();
      $(".entrance").animate({left:'-1000px'});
      // $("#3").delay(500).animate({right:'1400px'}, 800);
      // $("#2").delay(1500).animate({right:'1400px'}, 800);
      // $("#1").delay(2500).animate({right:'1400px'}, 800);
      setTimeout(function () {
       
          var players = document.getElementsByClassName("player_name");
          var player_names = [];
          for(i=0; i < players.length; i++)
          {
            player_names[i] = players[i].value;
          }

          var game = new Game(player_names);

          // var player1 = document.getElementsByName("player_1")[0].value;
          // var player2 = document.getElementsByName("player_2")[0].value;

          
          // var game = new Game(player1,player2);
          game.start();

          $.get("/play_game", {player_count: game.players.length}, function(response){
            $("#thegame").replaceWith(response);
          });

          $(document).on('keyup', function(event) {
            game.onKeyUp(event.which);
           });
    

      }, 100);
      
  // });
}
