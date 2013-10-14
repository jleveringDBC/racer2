class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.time :duration

      t.timestamps
    end
  end
end
