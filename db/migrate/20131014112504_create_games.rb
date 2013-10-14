class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.float :duration

      t.timestamps
    end
    create_table :game_users do |t|
      t.belongs_to :game
      t.belongs_to :user

      t.timestamps
    end
  end
end
