class AddIsExternalToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :is_external, :string, :default => "", :null => true
  end
end
