class CommentSerializer < ActiveModel::Serializer
  attributes :id, :status, :user, :post, :content, :created_at, :updated_at
end
