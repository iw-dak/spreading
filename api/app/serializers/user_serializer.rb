class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username, :birthdate, :address, :email, :phone, :roles, :created_at, :updated_at
end
