class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :story_id, null: false
      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :story_id
  end
end
