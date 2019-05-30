# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  join_link  :string           not null
#  public     :boolean          default(TRUE)
#  admin_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
    validates :name, :join_link, presence: true
    validates :public, inclusion: { in: [ true, false ] }

    before_validation :ensure_join_link

    belongs_to :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :User

    has_many :server_users,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :ServerUser,
    dependent: :destroy

    has_many :users,
    through: :server_users,
    source: :user

    has_many :rooms,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Room,
    dependent: :destroy

    def ensure_join_link
        while(self.join_link.nil? || Server.find_by(join_link: self.join_link ) ) do
            self.join_link = SecureRandom::urlsafe_base64
        end
    end
end
