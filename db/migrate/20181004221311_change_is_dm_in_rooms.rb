class ChangeIsDmInRooms < ActiveRecord::Migration[5.2]
  def change
    remove_column :rooms, :is_dm
    add_column :rooms, :is_dm, :boolean, default: false
  end
end
