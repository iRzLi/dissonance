# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  username_number :integer          not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates_uniqueness_of :username, scope: :username_number
    validates :password, length: { minimum: 6, allow_nil: true }

    before_validation :ensure_session_token, :ensure_username_number

    attr_reader :password

    has_one_attached :profile_picture

    has_many :admined_servers,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :Server,
    dependent: :destroy

    has_many :server_users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ServerUser,
    dependent: :destroy

    has_many :servers,
    through: :server_users,
    source: :server

    has_many :messages,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Message,
    dependent: :destroy

    has_many :private_messages,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :PrivateMessage,
    dependent: :destroy



    def private_rooms
        PrivateRoom.includes(:user1, :user2, :private_messages).where("user1_id = ? OR user2_id = ?", self.id, self.id);
    end


    def ensure_username_number
        self.username_number = Random.rand(1..999)
        until( already_exists?(self.username, self.username_number) == false ) do
            self.username_number = Random.rand(1..999)
        end
    end

 

    def already_exists?(username, number)
        user = User.find_by(username: username, username_number: number)
        if (user.nil?)
            return false
        end
        return true
    end

 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

 

    def ensure_session_token
        while(self.session_token.nil? || User.find_by(session_token: self.session_token ) ) do
            self.session_token = SecureRandom::urlsafe_base64
        end
    end

 

    def reset_session_token
        while(User.find_by(session_token: self.session_token ) ) do
            self.session_token = SecureRandom::urlsafe_base64
        end
        self.save!
        self.session_token
    end
end


 
