class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.integer :server_id, null: false, index: true
      t.timestamps
    end
  end
end
