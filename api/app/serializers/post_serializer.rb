class PostSerializer < ActiveModel::Serializer
  attributes :title, :content, :status, :slug, :views, :image

  def nb_comments
    Comment.where(post_id: object.id).count
  end
end
