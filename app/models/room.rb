# == Schema Information
#
# Table name: rooms
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  general    :boolean          default(FALSE)
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#



class Room < ApplicationRecord
    validates :name, :server_id, presence: true
    validates :general, inclusion: { in: [ true, false ] }
    belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

    has_many :messages,
    primary_key: :id,
    foreign_key: :room_id,
    class_name: :Message,
    dependent: :destroy
end
