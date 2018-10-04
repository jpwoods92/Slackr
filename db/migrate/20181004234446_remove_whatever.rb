class RemoveWhatever < ActiveRecord::Migration[5.2]
  def change
    remove_column :rooms, :whatever
  end
end
