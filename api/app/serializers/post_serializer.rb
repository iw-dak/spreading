class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :status, :slug, :views, :votes, :readtime, :image, :created_at, :updated_at, :user, :categories, :tags

  def nb_comments
    Comment.where(post_id: object.id).count
  end
end
