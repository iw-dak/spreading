class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  extend FriendlyId
  friendly_id :firstname, use: :sequentially_slugged, slug_column: :username

  validates_presence_of :firstname, :lastname, :username, :birthdate, :address, :email, :phone, :password, :roles

  has_many :posts
#   def as_json(options = {})
#     super(options.merge({ except: [:encrypted_password] }))
#   end
end
