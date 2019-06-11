class PostsHasCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :posts_has_categories, :id => false do |t|
      t.references :posts
      t.references :categories
    end
  end
end
