class CreateWorkspaceMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :workspace_memberships do |t|
      t.integer :workspace_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :workspace_memberships, :workspace_id
    add_index :workspace_memberships, :user_id
  end
end
