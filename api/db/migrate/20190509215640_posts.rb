class Posts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content
      t.string :status
      t.string :slug
      t.integer :views
      t.string :image

      t.timestamps
    end
  end
end
