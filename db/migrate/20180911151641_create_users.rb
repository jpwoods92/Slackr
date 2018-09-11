class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true
      t.string :email
      t.string :avatar_url
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
  end
end
