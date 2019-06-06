require 'bcrypt'

class User < ApplicationRecord
    include BCrypt
    validates_presence_of :firstname, :lastname, :birthdate, :address, :email, :phone, :password, :roles

    # setter
    def password=(pwd)
    @password = BCrypt::Password.create(pwd)
    end
    has_many :posts
end
