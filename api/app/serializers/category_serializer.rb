class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at, :posts
end
