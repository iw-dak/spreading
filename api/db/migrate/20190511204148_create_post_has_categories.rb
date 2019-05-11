class CreatePostHasCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :post_has_categories do |t|

      t.timestamps
    end
  end
end
