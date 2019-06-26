class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :status, :slug, :views, :image, :created_at, :updated_at, :user, :categories,

  def nb_comments
    Comment.where(post_id: object.id).count
  end
end
