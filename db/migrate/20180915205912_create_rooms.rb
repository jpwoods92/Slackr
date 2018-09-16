class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.integer :owner_id, null: false
      t.string :title
      t.boolean :is_private, null: false, default: true

      t.timestamps
    end
    add_index :rooms, :owner_id
  end
end
