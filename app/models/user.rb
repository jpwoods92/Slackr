# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  avatar_url      :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#  username        :string           default("guest"), not null
#

class User < ApplicationRecord
    validates :username, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}
    validates :avatar_url, presence: true, length: { maximum: 245 }
    

    after_initialize :ensure_avatar_url
    after_initialize :ensure_session_token

    has_many :room_memberships, class_name: "RoomMembership", foreign_key: "user_id"
    has_many :rooms, through: :room_memberships, source: :rooms
    
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
    
    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def ensure_avatar_url
        self.avatar_url ||= './app/assets/images/oliver_picture.jpeg'
    end
    
end
