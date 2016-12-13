# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, uniqueness: { scope: :followee_id,
    message: "Users can follow another user only once" }
  validates :follower_id, :followee_id, presence: true
  validate(:user_ids_dont_match)

  def user_ids_dont_match
    if follower_id == followee_id
      errors[:followee_id].push("User cannot follow self")
    end
  end

  belongs_to :follower,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :followee_id



end
