# == Schema Information
#
# Table name: private_rooms
#
#  id         :bigint           not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PrivateRoom < ApplicationRecord 

    validates :user1_id, uniqueness: { scope: :user2_id }
    before_validation :diff_user_ids
    before_validation :sort_user_ids

    def diff_user_ids
        self.user1_id != self.user2_id
    end

    # Force user1_id to be less than user2_id
    def sort_user_ids
        self.user1_id, self.user2_id = [user1_id, user2_id].sort
    end

    belongs_to :user1,
    primary_key: :id,
    foreign_key: :user1_id,
    class_name: :User

    belongs_to :user2,
    primary_key: :id,
    foreign_key: :user2_id,
    class_name: :User

    has_many :private_messages,
    primary_key: :id,
    foreign_key: :private_room_id,
    class_name: :PrivateMessage,
    dependent: :destroy

end
