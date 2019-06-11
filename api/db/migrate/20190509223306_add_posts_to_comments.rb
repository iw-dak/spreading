class AddPostsToComments < ActiveRecord::Migration[5.2]
  def change
    add_reference :comments, :posts, foreign_key: true
  end
end
