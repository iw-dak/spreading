class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :status, :slug, :views, :votes, :readtime, :image, :is_external, :external_link, :created_at, :updated_at, :user, :categories, :tags, :comments, :nb_comments

  class CommentCustomSerializer < CommentSerializer
    # move shared code to a mixin or base class, customize here
  end

  has_many :comments, serializer: CommentCustomSerializer

  def nb_comments
    Comment.where("status = ? AND post_id = ?", true, object.id).count
  end

  def votes
    Vote.where(post_id: object.id).count
  end

  def comments
    Comment.where("status = ? AND post_id = ?", true, object.id)
  end
end
