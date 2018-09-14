class DropWorkspaceTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :workspace_memberships
    drop_table :workspaces
  end
end
