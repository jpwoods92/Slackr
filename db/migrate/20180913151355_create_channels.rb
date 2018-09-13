class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :workspace_id, null: false
      t.integer :owner_id, null: false
      t.string :title
      t.boolean :is_private, null: false, default: true
      t.string :description

      t.timestamps
    end
    add_index :channels, :workspace_id
    add_index :channels, :owner_id
  end
end
