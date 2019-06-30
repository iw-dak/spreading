class User < ApplicationRecord
  extend FriendlyId
  friendly_id :firstname, use: :sequentially_slugged, slug_column: :username
  has_secure_password
  validates_presence_of :firstname, :lastname, :username, :birthdate, :address, :email, :phone, :password, :roles

  has_many :posts

  def as_json(options = {})
    super(options.merge({ except: [:password_digest] }))
  end
end
