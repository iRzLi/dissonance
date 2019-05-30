# == Schema Information
#
# Table name: server_users
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  admin      :boolean          default(FALSE)
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerUser < ApplicationRecord
    validates :user_id, :server_id, presence: true
    validates :admin, inclusion: { in: [ true, false ] }

    belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server


    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User


end
