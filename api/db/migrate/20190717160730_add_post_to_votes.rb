class AddPostToVotes < ActiveRecord::Migration[5.2]
  def change
    add_reference :votes, :post, foreign_key: true
  end
end
