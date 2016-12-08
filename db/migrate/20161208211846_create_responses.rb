class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.string :title
      t.text :content, null: false

      t.integer :author_id, null: false
      t.integer :story_id, null: false

      t.timestamps
    end
    add_index :responses, :author_id
    add_index :responses, :story_id
  end
end
