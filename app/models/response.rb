class Response < ApplicationRecord
  validates :content, :story_id, :author_id, presence: true

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :story

end
