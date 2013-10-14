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
  "GET IT"
end

