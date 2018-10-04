class AddColumnToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :is_dm, :boolean, default: false
  end
end
