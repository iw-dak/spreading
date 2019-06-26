class CategoriesPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :categories_posts, :id => false do |t|
      t.references :posts
      t.references :categories
    end
  end
end
