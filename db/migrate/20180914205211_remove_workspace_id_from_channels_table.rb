class RemoveWorkspaceIdFromChannelsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :workspace_id
  end
end
