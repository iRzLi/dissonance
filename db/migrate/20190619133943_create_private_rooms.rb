class CreatePrivateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :private_rooms do |t|
      t.integer :user1_id, null: false, index: true
      t.integer :user2_id, null: false, index: true
      t.timestamps
    end
    add_index :private_rooms, [:user1_id,:user2_id], unique: true
  end
end
