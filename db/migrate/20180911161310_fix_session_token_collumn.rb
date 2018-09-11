class FixSessionTokenCollumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :session_token
    add_column :users, :session_token, :string, unique: true, null: false
  end
end
