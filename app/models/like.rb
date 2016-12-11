# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  liker_id   :integer          not null
#

class Like < ApplicationRecord
  validates :liker_id, :story_id, presence: true

  validates :liker_id, uniqueness: { scope: :story_id,
    message: "Users can like a story/response only once" }

  belongs_to :story
  belongs_to :liker,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :liker_id

end
