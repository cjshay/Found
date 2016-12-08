class RemoveNullFalseFromTitleColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :stories, :title, :string
    add_column :stories, :title, :string
  end
end
