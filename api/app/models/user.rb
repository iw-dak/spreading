class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  extend FriendlyId
  friendly_id :firstname, use: :sequentially_slugged, slug_column: :username

  validates_presence_of :email, :password

  has_many :posts
  has_many :votes
end
