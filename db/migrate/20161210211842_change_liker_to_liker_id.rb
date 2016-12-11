class ChangeLikerToLikerId < ActiveRecord::Migration[5.0]
  def change
    remove_column :likes, :liker, :integer
    add_column :likes, :liker_id, :integer, null: false
  end
end
