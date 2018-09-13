class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, :default => 'guest', null: false
  end
end
