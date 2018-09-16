class ChangeColumnChannelIdonMessagesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :channel_id
    add_column :messages, :room_id, :integer, null: false
  end
end
