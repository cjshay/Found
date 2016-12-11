class ChangeUserIdOnLikes < ActiveRecord::Migration[5.0]
  def change
    remove_column :likes, :user_id, :integer
    add_column :likes, :liker, :integer, null: false
  end
end
