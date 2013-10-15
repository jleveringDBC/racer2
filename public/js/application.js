
$(document).ready(function() {

  $("button").click(function(e) {
      var form = $("form").select();
      e.preventDefault();
      $(".entrance").animate({left:'-1000px'});
      $("#3").delay(500).animate({right:'1400px'}, 800);
      $("#2").delay(1500).animate({right:'1400px'}, 800);
      $("#1").delay(2500).animate({right:'1400px'}, 800);
      setTimeout(function () {
       
          var player1 = document.getElementsByName("player_1")[0].value;
          var player2 = document.getElementsByName("player_2")[0].value;

          
          var game = new Game(player1,player2);
          game.start();
          // Create Game w/ players
          $.get("/play_game", function(response){
            $("#thegame").replaceWith(response);
          });

          $(document).on('keyup', function(event) {
            game.onKeyUp(event.which);
           });
    

      }, 2700);
      
  });
 
  // function update_position(player, counter)
  // {
  //   var length = $("#player" + player + "_strip > td").size();
  //   if (counter == length)
  //   {
  //     $.get("/endgame/" + player, function(response){
  //       console.log(response);
  //       $("#results").replaceWith(response);
  //     });

  //   }
 
  //   counter += 1;
  //   $("#player" + player + "_strip td.active").removeClass("active");
  //   $("#player" + player + "_strip td:nth-child(" + counter + ")").addClass("active");
  //   return counter;
  // }
 
 
  
});
