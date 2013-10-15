function Game(player_names) {
  this.players = [];
  for(i=0; i < player_names.length; i++)
  {
   this.players[i] = new Player (80+i, player_names[i]);
  }
  // this.player1 = new Player(81, player1);
  // this.player2 = new Player(80, player2);
  this.winner = null;

}

Game.prototype.render = function(player_number, player) {

  $("#player" + player_number + "_strip td.active").removeClass("active");
  $("#player" + player_number + "_strip td:nth-child(" + player.position + ")").addClass("active");
};


Game.prototype.start = function()
{
  this.start_time =  new Date().getTime();
  var player_names = {};
  for(i=0; i < this.players.length; i++)
  {
    var key = 'player' + (i+1);
    player_names[key] = this.players[i].name;
    console.log(this.players[i].name);
  }
  $.post('/play_game', player_names);
};

Game.prototype.update_position = function(player)
  {
    player.position += 1;
  };



Game.prototype.checkwinner = function()
{
  var winner;
  var length = $("#player1_strip > td").size();
  for(i=0; i<this.players.length; i++)
  {
    if(this.players[i].position == length)
    {
      this.winner = i+1;
    }
  }
  if (this.winner !== null)
  {
    var end = new Date().getTime();
    this.duration = end - this.start_time;
    console.log(this.duration);
    $("#endgame").replaceWith("PLAYER" + this.winner + " WON!!!");
    $.post('/game_over', {duration: this.duration, winner: this.winner});
  }
};

Game.prototype.onKeyUp = function(key) {

  for(i=0; i<this.players.length; i++)
  {
    if(key == this.players[i].key && this.winner === null)
    {
      this.update_position(this.players[i]);
      this.render(i+1, this.players[i]);
      this.checkwinner();
    }
  }

};
