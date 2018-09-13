class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :url, null: false

      t.timestamps
    end
    add_index :workspaces, :owner_id
    add_index :workspaces, :url
  end
end
