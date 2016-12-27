# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

# begin password change user feature

  has_attached_file :image, default_url: "user_00.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :stories,
    class_name: 'Story',
    primary_key: :id,
    foreign_key: :author_id

  has_many :likes,
    class_name: 'Like',
    primary_key: :id,
    foreign_key: :liker_id

  has_many :liked_stories,
    through: :likes,
    source: :story

  has_many :follower_follows,
    class_name: 'Follow',
    primary_key: :id,
    foreign_key: :follower_id

  has_many :followee_follows,
    class_name: 'Follow',
    primary_key: :id,
    foreign_key: :followee_id

  has_many :followers,
    through: :followee_follows

  has_many :followees,
    through: :follower_follows


  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
