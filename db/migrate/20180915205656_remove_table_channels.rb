class RemoveTableChannels < ActiveRecord::Migration[5.2]
  def change
    drop_table :channels
  end
end
