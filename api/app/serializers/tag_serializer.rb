class TagSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :posts
end
