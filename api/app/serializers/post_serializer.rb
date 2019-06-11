class PostSerializer < ActiveModel::Serializer
  attributes :title, :content, :status, :slug, :views, :image
  
  def nb_comments
    Comment.where(post_id: object.id).count
  end

  # def author
  #   {
  #     author_id: self.object.user.id, 
  #     author_name: self.object.user.name
  #   }
  # end
end
