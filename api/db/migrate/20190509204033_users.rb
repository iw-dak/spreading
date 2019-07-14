class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname, null: true
      t.string :lastname, null: true
      t.string :username, null: true
      t.datetime :birthdate, null: true
      t.string :address, null: true
      t.string :phone, null: true
      t.string :roles, null: true
      t.string :profile, null: true

      t.timestamps
    end
  end
end
