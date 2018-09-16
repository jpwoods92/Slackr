class RemoveTableChannelsMemberships < ActiveRecord::Migration[5.2]
  def change
    drop_table :channel_memberships
  end
end
