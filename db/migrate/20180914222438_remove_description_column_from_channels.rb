class RemoveDescriptionColumnFromChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :description
  end
end
