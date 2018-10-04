# == Schema Information
#
# Table name: room_memberships
#
#  id         :bigint(8)        not null, primary key
#  room_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class RoomMembership < ApplicationRecord
    validates :room_id, :user_id, presence: true

    belongs_to :member, class_name: "User", foreign_key: "user_id"
    belongs_to :room, class_name: "Room", foreign_key: "room_id"
end
