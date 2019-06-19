# == Schema Information
#
# Table name: private_messages
#
#  id              :bigint           not null, primary key
#  body            :text             not null
#  user_id         :integer          not null
#  private_room_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class PrivateMessage < ApplicationRecord

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User


    belongs_to :private_room,
    primary_key: :id,
    foreign_key: :private_room_id,
    class_name: :PrivateRoom
    
end
