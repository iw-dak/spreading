# require 'bcrypt'

class User < ApplicationRecord
    has_secure_password
    # include BCrypt
    validates_presence_of :firstname, :lastname, :birthdate, :address, :email, :phone, :password, :roles

    has_many :posts
end
