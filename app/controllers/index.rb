get '/' do
  session.clear
  erb :index
end


post '/play_game' do
  session['player_1'] = User.find_or_create_by_username(username: params[:player_1])
  session['player_2'] = User.find_or_create_by_username(username: params[:player_2])

  if session['player_1'] == session['player_2'] 
    return "Stop being a fuckup"
  end

  redirect '/play_game'
end

get '/play_game' do
  @this_game = Game.create
  @this_game.users = [session['player_1'], session['player_2']]
  session[:start_time] = Time.now
  session[:game] = @this_game.id
  erb :racecar
end

get '/results' do
  erb :results
end

get '/endgame/:winner' do
  @duration = Time.now - session[:start_time]
  if params[:winner] == "1"
    @winner = session['player_1']
  elsif params[:winner] == "2"
    @winner = session['player_2']
  end
  @all_games = Game.all 
  @this_game = Game.find(session[:game])
  # @this_game.winner = @winner.username
  # @this_game.duration = duration
  @this_game.update_attributes(duration: @duration, winner: @winner.username)
  erb :endgame
end
