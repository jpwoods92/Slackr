# == Schema Information
#
# Table name: rooms
#
#  id         :bigint(8)        not null, primary key
#  owner_id   :integer          not null
#  title      :string
#  is_private :boolean          default(TRUE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Room < ApplicationRecord
    validates :title, :owner_id, presence: true

    has_many :room_memberships, class_name: "RoomMembership", foreign_key: "room_id"
    has_many :members, through: :room_memberships, source: :member
    has_many :messages, dependent: :destroy
    
end

