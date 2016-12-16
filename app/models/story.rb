# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#  parent_id  :integer
#

class Story < ApplicationRecord
  validates :content, :author_id, presence: true

  has_attached_file :image, default_url: "no_image"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  has_many :responses,
    class_name: 'Story',
    primary_key: :id,
    foreign_key: :parent_id

  belongs_to :story,
    class_name: 'Story',
    primary_key: :id,
    foreign_key: :parent_id,
    optional: true

  has_many :likes
  has_many :likers,
    through: :likes
end
