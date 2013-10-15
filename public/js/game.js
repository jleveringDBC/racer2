function Game(player1, player2) {

  this.player1 = new Player(81, player1);
  this.player2 = new Player(80, player2);
  player_array = [this.player1, this.player2]
  this.winner = null;

}

Game.prototype.render = function(player_number, player) {

  $("#player" + player_number + "_strip td.active").removeClass("active");
  $("#player" + player_number + "_strip td:nth-child(" + player.position + ")").addClass("active");
};


Game.prototype.start = function() 
{
  this.start_time =  new Date().getTime();
  $.post('/play_game', {player1: this.player1.name, player2: this.player2.name});
};

Game.prototype.update_position = function(player)
  {
    player.position += 1;
  };



Game.prototype.checkwinner = function() 
{
  var winner;
  var length = $("#player1_strip > td").size();
  if (this.player1.position == length)
  {
    this.winner = "1";
  }
  else if(this.player2.position == length)
  {
    this.winner = "2";
  }
  if (this.winner != null)
  {
    var end = new Date().getTime();
    this.duration = end - this.start_time;
    console.log(this.duration);
    $("#endgame").replaceWith("PLAYER" + this.winner + " WON!!!");
    // $.get("/endgame/" + player_number, function(response){
    //   console.log(response);
    //   $("#endgame").replaceWith(response);
    // });
    $.post('/game_over', {duration: this.duration, winner: this.winner});
  }
};

Game.prototype.onKeyUp = function(key) {

  if(key == this.player1.key && this.winner == null)
  {
    console.log("Q");
    this.update_position(this.player1);
    this.render(1, this.player1);
    this.checkwinner();
  }
  else if(key == this.player2.key && this.winner == null)
  {
    this.update_position(this.player2);
    this.render(2, this.player2);
    this.checkwinner();
  }

};
