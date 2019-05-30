class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :join_link, null: false
      t.boolean :public, default: true
      t.integer :admin_id, null: false, index: true
      t.timestamps
    end
    add_index :servers, :join_link, unique: true
  end
end
