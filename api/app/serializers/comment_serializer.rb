class CommentSerializer < ActiveModel::Serializer
  attributes :id, :status, :user, :post
end
