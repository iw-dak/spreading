class User < ApplicationRecord
    validates_presence_of :firstname, :lastname, :birthdate, :address, :email, :phone, :password, :roles ,:posts

    has_many :posts
end
