class User < ApplicationRecord
    validates_presence_of :firstname, :lastname, :birthdate, :address, :email, :phone, :password, :roles

    has_many :posts
end
