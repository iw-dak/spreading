class AddExternalLinkToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :external_link, :string,  :default => "", :null => true
  end
end
