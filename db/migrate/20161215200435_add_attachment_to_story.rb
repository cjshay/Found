class AddAttachmentToStory < ActiveRecord::Migration[5.0]
  def self.up
    change_table :stories do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :stories, :image
  end
end
class AddAttachmentImageToEvents < ActiveRecord::Migration
  def self.up
    change_table :events do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :events, :image
  end
end
