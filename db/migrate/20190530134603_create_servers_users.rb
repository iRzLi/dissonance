class CreateServersUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_users do |t|
      t.integer :user_id, null: false, index: true
      t.boolean :admin, default: false
      t.integer :server_id, null: false, index: true
      t.timestamps
    end
    add_index :server_users, [:user_id, :server_id], unique: true
  end
end
