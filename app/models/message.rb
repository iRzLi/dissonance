# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  room_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#



class Message < ApplicationRecord

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User


    belongs_to :room,
    primary_key: :id,
    foreign_key: :room_id,
    class_name: :Room
end
