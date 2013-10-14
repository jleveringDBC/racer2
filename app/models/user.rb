class User < ActiveRecord::Base
  validates :username, presence: true
  validates :username, uniqueness: true
  has_many :game_users
  has_many :games, through: :game_users
end
