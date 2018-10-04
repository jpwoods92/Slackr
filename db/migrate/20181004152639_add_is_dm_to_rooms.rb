class AddIsDmToRooms < ActiveRecord::Migration[5.2]
  def change
    remove_column :rooms, :is_dm
    add_column :rooms, :is_dm, :boolean, default: false
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
