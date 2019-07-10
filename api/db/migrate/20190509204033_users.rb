class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :username
      t.datetime :birthdate
      t.string :address
      t.string :phone
      t.string :roles
      t.string :profile

      t.timestamps
    end
  end
end
