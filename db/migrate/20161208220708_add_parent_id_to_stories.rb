class AddParentIdToStories < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :parent_id, :integer
  end
end
