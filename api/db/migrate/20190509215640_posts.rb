class Posts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :slug
      t.text :content
      t.string :status
      t.integer :views
      t.integer :readtime
      t.string :image

      t.timestamps
    end
  end
end
