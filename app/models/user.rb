# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  avatar_url      :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :avatar_url, presence: true
    validates :email, :session_token, uniqueness: true,
    validates :password, length: { minimum: 6, allow_nil: true}

    before_validation :ensure_avatar_url, :ensure_session_token

    attr_reader :password

    def find_by_credentials(email, password)
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
