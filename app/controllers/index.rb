get '/' do
  erb :index
end


post '/play_game' do
  session['player_1'] = User.find_or_create_by_username(username: params[:player1])
  session['player_2'] = User.find_or_create_by_username(username: params[:player2])

  # if session['player_1'] == session['player_2'] 
  #   return "Stop being a fuckup"
  # end

end

get '/play_game' do
  # @this_game = Game.create
  # @this_game.users = [session['player_1'], session['player_2']]
  # session[:start_time] = Time.now
  # session[:game] = @this_game.id
  erb :racecar
end

post '/game_over' do
  @winner = session["player_#{params[:winner]}"]
  Game.create(duration: params[:duration], winner: @winner.username)
end
