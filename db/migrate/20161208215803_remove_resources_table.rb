class RemoveResourcesTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :responses
  end
end
