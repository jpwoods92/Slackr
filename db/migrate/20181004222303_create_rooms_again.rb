class CreateRoomsAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
    t.integer "owner_id", null: false
    t.string "title"
    t.boolean "is_private", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_dm", default: false
    end
    add_index :rooms, :owner_id
  end
end
