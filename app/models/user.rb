class User < ActiveRecord::Base
  validates :username, presence: true
  validates :username, uniqueness: true
  has_and_belongs_to_many :games
end
