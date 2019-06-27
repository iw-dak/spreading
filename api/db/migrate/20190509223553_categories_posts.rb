class CategoriesPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :categories_posts, :id => false do |t|
      t.references :post
      t.references :category

      t.timestamps
    end
  end
end
